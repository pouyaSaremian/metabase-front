import { readFileSync } from "node:fs";
import { join } from "node:path";
import { load } from "cheerio";

type PlanKey = "oss" | "starter" | "pro" | "enterprise";

const PLAN_CLASS_MAP: Record<string, PlanKey> = {
    "pricing-tier-oss": "oss",
    "pricing-tier-starter": "starter",
    "pricing-tier-pro": "pro",
    "pricing-tier-enterprise": "enterprise",
};

const filePath = join(process.cwd(), "static/pricing/index.html");
const html = readFileSync(filePath, "utf8");

const $ = load(html);
const container = $(".plans-compare.full").first();
const mobileContainerIndex = html.indexOf('<div class="plans-compare-mobile">');

if (!container.length || mobileContainerIndex === -1) {
    throw new Error("Could not find plans comparison section in HTML.");
}

const planHeaders = container
    .children(".header")
    .toArray()
    .slice(1)
    .map((headerEl) => {
        const element = $(headerEl);
        const planName = element.clone().children().remove().end().text().trim();
        const ctaAnchor = element.find("a").first();
        const ctaLabel = ctaAnchor.text().trim();
        const ctaHref = ctaAnchor.attr("href") ?? "";

        return {
            name: planName,
            ctaLabel,
            ctaHref,
        };
    });

const sections: Array<{
    title: string;
    description: string;
    rows: Array<{
        id: string;
        label: string;
        href?: string;
        tooltip?: string;
        values: Record<PlanKey, { included: boolean; text: string }>;
    }>;
}> = [];

let currentSection: (typeof sections)[number] | undefined;

container
    .children()
    .toArray()
    .slice(5) // Skip blank header + 4 plan headers
    .forEach((child) => {
        const element = $(child);

        if (element.hasClass("section-title")) {
            const title = element.find("h3").text().trim();
            const description = element
                .clone()
                .children("h3")
                .remove()
                .end()
                .text()
                .replace(/\s+/g, " ")
                .trim();

            currentSection = {
                title,
                description,
                rows: [],
            };
            sections.push(currentSection);
            return;
        }

        if (element.hasClass("label")) {
            if (!currentSection) {
                throw new Error("Encountered label outside of a section");
            }

            const id = element.attr("id") ?? "";
            const linkElement = element.find("a").first();
            const dataRowLabel = element.attr("data-row") ?? "";
            const labelText =
                dataRowLabel.trim() ||
                (linkElement.length
                    ? linkElement.clone().children().remove().end().text().trim()
                    : element.clone().children().remove().end().text().trim());
            const tooltip = element.find("[data-tippy-content]").attr("data-tippy-content")?.trim();
            const href = linkElement.attr("href") ?? undefined;

            const values: Record<PlanKey, { included: boolean; text: string }> = {
                oss: { included: false, text: "" },
                starter: { included: false, text: "" },
                pro: { included: false, text: "" },
                enterprise: { included: false, text: "" },
            };

            currentSection.rows.push({
                id,
                label: labelText,
                tooltip,
                href,
                values,
            });

            return;
        }

        if (element.hasClass("pricing-tier")) {
            if (!currentSection) {
                throw new Error("Encountered pricing-tier outside of section");
            }
            const row = currentSection.rows.at(-1);
            if (!row) {
                throw new Error("Pricing tier encountered before any label");
            }

            const classes = element.attr("class")?.split(/\s+/) ?? [];
            const planClass = classes.find((cls) => cls.startsWith("pricing-tier-"));
            if (!planClass) {
                return;
            }
            const planKey = PLAN_CLASS_MAP[planClass];
            if (!planKey) {
                return;
            }

            const hasCheck = element.find("img.check").length > 0;
            const text = element
                .text()
                .replace(/\s+/g, " ")
                .replace(/\u00a0/g, " ")
                .trim();

            row.values[planKey] = {
                included: hasCheck,
                text,
            };
        }
    });

console.log(
    JSON.stringify(
        {
            plans: planHeaders,
            sections,
        },
        null,
        2,
    ),
);


import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

interface LearnAssetRouteParams {
  path: string[];
}

export async function GET(
  _request: Request,
  context: { params: Promise<LearnAssetRouteParams> }
) {
  const { path: pathSegments } = await context.params;

  if (!pathSegments || pathSegments.length === 0) {
    return new NextResponse("Not Found", { status: 404 });
  }

  // Images are stored in static/learn/images/ directory
  // Check if this is an images path
  if (pathSegments[0] === "images") {
    const learnImagesRoot = path.join(
      process.cwd(),
      "static",
      "learn",
      "images"
    );
    const imagePath = pathSegments.slice(1); // Remove "images" from the path
    const filePath = path.join(learnImagesRoot, ...imagePath);

    // Security check
    const relative = path.relative(learnImagesRoot, filePath);
    if (
      relative.startsWith("..") ||
      path.isAbsolute(relative) ||
      relative.includes("node_modules")
    ) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    try {
      const fileContent = await fs.readFile(filePath);
      const ext = path.extname(filePath).toLowerCase();

      const contentTypeMap: Record<string, string> = {
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".gif": "image/gif",
        ".svg": "image/svg+xml",
        ".webp": "image/webp",
        ".pdf": "application/pdf",
      };

      const contentType = contentTypeMap[ext] || "application/octet-stream";

      return new NextResponse(fileContent, {
        headers: {
          "Content-Type": contentType,
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    } catch (error) {
      console.error("Error serving learn image asset:", error);
      return new NextResponse("Not Found", { status: 404 });
    }
  }

  // Fallback: try src/content/learn for other assets
  const learnAssetsRoot = path.join(process.cwd(), "src", "content", "learn");

  const filePath = path.join(learnAssetsRoot, ...pathSegments);

  // Security check: ensure the file is inside the learn assets directory
  const relative = path.relative(learnAssetsRoot, filePath);
  if (
    relative.startsWith("..") ||
    path.isAbsolute(relative) ||
    relative.includes("node_modules")
  ) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  try {
    const fileContent = await fs.readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();

    const contentTypeMap: Record<string, string> = {
      ".png": "image/png",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".gif": "image/gif",
      ".svg": "image/svg+xml",
      ".webp": "image/webp",
      ".pdf": "application/pdf",
    };

    const contentType = contentTypeMap[ext] || "application/octet-stream";

    return new NextResponse(fileContent, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Error serving learn asset:", error);
    return new NextResponse("Not Found", { status: 404 });
  }
}

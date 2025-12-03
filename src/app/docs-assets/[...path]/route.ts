import fs from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

interface DocsAssetRouteParams {
  path: string[];
}

const docsAssetsRoot = path.join(
  process.cwd(),
  "src",
  "content",
  "docs",
  "content",
  "docs"
);

const getMimeType = (filePath: string): string => {
  const ext = path.extname(filePath).toLowerCase();

  switch (ext) {
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".gif":
      return "image/gif";
    case ".svg":
      return "image/svg+xml";
    case ".webp":
      return "image/webp";
    default:
      return "application/octet-stream";
  }
};

const isSafeAssetPath = (targetPath: string): boolean => {
  const relative = path.relative(docsAssetsRoot, targetPath);
  return (
    !!relative &&
    !relative.startsWith("..") &&
    !path.isAbsolute(relative) &&
    !relative.includes("node_modules")
  );
};

export const dynamic = "force-static";

export async function GET(
  _request: Request,
  context: { params: Promise<DocsAssetRouteParams> }
) {
  const { params } = context;
  const { path: segments } = await params;

  if (!segments || segments.length === 0) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const filePath = path.join(docsAssetsRoot, ...segments);

  if (!isSafeAssetPath(filePath)) {
    return new NextResponse("Not Found", { status: 404 });
  }

  try {
    const data = await fs.readFile(filePath);
    const contentType = getMimeType(filePath);

    return new NextResponse(data, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new NextResponse("Not Found", { status: 404 });
  }
}

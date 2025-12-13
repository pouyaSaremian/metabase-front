# Link Checker Scripts

This directory contains scripts to check for broken links in the application.

## Available Scripts

### 1. Static Link Checker (`check-links.ts`)

Validates links by checking against the codebase structure without making HTTP requests. This is faster and doesn't require a running server.

**Usage:**
```bash
# Check internal links only
pnpm check-links

# Check external links as well (slower)
pnpm check-links:external

# Save report to file
pnpm check-links:report
```

**What it checks:**
- All URLs in the sitemap
- Links in markdown files (docs and learn sections)
- Links in React components (TSX/TS files)
- Validates internal routes against known routes

### 2. HTTP Link Checker (`check-links-http.ts`)

Makes actual HTTP requests to check if URLs are accessible. Requires a running server (dev or production).

**Usage:**
```bash
# Check against localhost:3000 (default)
pnpm check-links:http

# Check against a specific URL
pnpm check-links:http --url https://metabase.ir

# Check external links as well
pnpm check-links:http:external

# Save report to file
pnpm check-links:http:report
```

**What it checks:**
- All URLs in the sitemap via HTTP requests
- Validates actual HTTP status codes
- Detects network errors and timeouts

## When to Use Which Script

- **Static Checker**: Use during development, in CI/CD pipelines, or when you want fast validation without a running server
- **HTTP Checker**: Use when you want to verify that pages actually load correctly, or to test a production build

## Output

Both scripts provide:
- Summary of total links checked
- Count of working vs broken links
- Detailed list of broken links with:
  - URL
  - Source file (where the link was found)
  - Error message or HTTP status code

## Exit Codes

- `0`: All links are working
- `1`: Broken links found

This makes the scripts suitable for CI/CD pipelines where you want builds to fail if broken links are detected.

## Examples

### Check links before deployment
```bash
# Build the project first
pnpm build

# Start the production server
pnpm start &

# Wait a moment for server to start, then check
sleep 5
pnpm check-links:http --url http://localhost:3000

# Kill the server
pkill -f "next start"
```

### Check links in CI/CD
```bash
# In your CI pipeline
pnpm check-links:report
# If broken links are found, the script exits with code 1
```

### Check production site
```bash
pnpm check-links:http --url https://metabase.ir --output production-link-report.txt
```

## Configuration

The scripts use the `NEXT_PUBLIC_BASE_URL` environment variable if set, otherwise they default to:
- Static checker: `https://metabase.ir`
- HTTP checker: `http://localhost:3000`

You can override this by:
- Setting the environment variable: `NEXT_PUBLIC_BASE_URL=https://example.com pnpm check-links:http`
- Using the `--url` flag (HTTP checker only): `pnpm check-links:http --url https://example.com`

## Troubleshooting

### "Error checking sitemap URLs"
- Make sure you've built the project: `pnpm build`
- The sitemap module needs to be importable

### "Request timeout" errors
- The server might be slow to respond
- Try increasing the timeout in the script (default: 10 seconds)
- Check if the server is actually running

### Too many external link failures
- External sites might be blocking automated requests
- Use `--external` flag only when necessary
- Some sites require specific User-Agent headers
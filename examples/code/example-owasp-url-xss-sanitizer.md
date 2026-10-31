# OWASP Safe URL Protocol & XSS Sanitization Gate

Live interactive security gate demonstrating how Masallah validates external URLs against `javascript:`/`data:` injection vectors, strips dangerous HTML payloads, and enforces `rel="noopener noreferrer"`.

```tsx
const ALLOWED_PROTOCOLS = new Set(["https:", "http:"]);

export function sanitizeExternalUrl(rawUrl: string): { safe: boolean; href: string; reason: string } {
  try {
    const parsed = new URL(rawUrl.trim());
    if (!ALLOWED_PROTOCOLS.has(parsed.protocol)) {
      return { safe: false, href: "#blocked-unsafe-protocol", reason: `Blocked protocol: ${parsed.protocol}` };
    }
    return { safe: true, href: parsed.toString(), reason: "Verified HTTPS/HTTP origin" };
  } catch {
    return { safe: false, href: "#invalid-url", reason: "Malformed URL rejected" };
  }
}
```

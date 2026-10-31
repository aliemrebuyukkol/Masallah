# OWASP Frontend Security, XSS Sanitization & Pre-Commit Secret Audit

- **Category:** Security
- **Source:** [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org)
- **Target Model:** Gemini 2.5 Pro / Claude 3.7 Sonnet
- **License:** CC-BY-SA-4.0 / MIT
- **Tags:** Security, Architecture, Frontend, Testing, Prompt, Workflow

## Description

Audits web applications and repositories against OWASP Cheat Sheets for DOM XSS, unsafe external links, Content Security Policy (CSP), and credential leakage.

## Original Prompt

```text
Audit this web application for security vulnerabilities using OWASP Cheat Sheets.
```

## Masallah Optimized Prompt

```text
Conduct a comprehensive security audit and remediation pass modeled on the OWASP Cheat Sheet Series (`cheatsheetseries.owasp.org`):
1. DOM-Based XSS Prevention: Verify zero unvalidated usage of `dangerouslySetInnerHTML`, `eval()`, or `javascript:` URLs. Enforce strict URL protocol allowlisting (`https:` / `http:` only) on all external source/demo/repo links.
2. Safe External Navigation: Ensure every external `<a target="_blank">` includes `rel="noopener noreferrer"`.
3. HTTP Security Headers & CSP: Configure `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`, and `X-Frame-Options: SAMEORIGIN`.
4. Pre-Commit Secret Scanning: Scan all tracked files against high-entropy patterns (API keys, `ghp_`, `gho_`, `sk-`, `AIza`, private keys, `.env` files) and block commit if any match is found.
```

## Example Input

Masallah repository and static web application prior to GitHub push and production deploy.

## Example Output

Executable secret/XSS scanner (`scripts/collect/security-scan.mjs`) + OWASP compliance report.

# Field Schema and Validation Rules

Define every output field, its type, and how to validate it. Treat any field that fails validation as `null` with confidence `none`.

## Person fields
- `full_name` — string. Validate against the resolving source. Reject role labels (for example, "Sales Team").
- `title` — string. Use the current title only. Prefer the most recent dated source.
- `linkedin_url` — string. Must match `https://www.linkedin.com/in/...`. Strip tracking params.
- `email` — string. Validate format `local@domain`. Lowercase. Set `email_inferred: true` and confidence `low` if pattern-derived rather than confirmed.
- `phone` — string. Store in E.164 where possible. Accept only publicly listed numbers.
- `location` — string. Use "City, Region, Country" form when available.

## Company fields
- `legal_name` — string. Prefer the name on the official site footer or filings.
- `domain` — string. Lowercase, host only, no scheme or path.
- `industry` — string. Use a plain-language label.
- `employee_range` — string enum: `1-10`, `11-50`, `51-200`, `201-500`, `501-1000`, `1001-5000`, `5001+`.
- `hq_location` — string. "City, Region, Country".
- `founded_year` — integer, four digits.
- `description` — string, one or two factual sentences. No marketing language.
- `funding_stage` — string. Use only when reported by a credible source.

## Cross-field rules
- The person's employer must reconcile with the resolved company. Record any mismatch in `conflicts`.
- Every non-null field must have a matching entry in `sources`.
- Never carry placeholder text such as "N/A" or "TBD" into a value; use `null`.

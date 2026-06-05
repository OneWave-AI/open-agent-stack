# Impact Rubric

Assign one severity to each entry that touches a declared stack item. Sort the report by this order.

## Breaking

The change removes or alters behavior the stack relies on, or sets a deprecation deadline.

- Examples: model retired, endpoint removed, response schema changed, required parameter added, auth method dropped.
- Default action: migrate now, or plan migration before the stated cutoff.

## Behavioral

Existing calls keep working but produce different results or defaults.

- Examples: changed default model, altered token limits, modified rate limits, output format tweaks.
- Default action: review and validate against current usage; plan a fix if results regress.

## Additive

New capability that does not affect existing usage.

- Examples: new model variant, new optional parameter, new SDK helper.
- Default action: adopt optionally if it improves the stack.

## Informational

Relevant context with no direct action.

- Examples: pricing change on an unused tier, docs reorganization, beta announcement.
- Default action: no action; note briefly.

## Deadlines

When an entry carries a deprecation or end-of-life date, always record the exact date and surface it in the recommended action.

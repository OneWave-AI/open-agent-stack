# Baseline schema

The baseline lives at `references/baseline.json`. It stores the last captured state per competitor so the next run can diff against it. It contains no secrets.

## Structure

```json
{
  "competitors": [
    {
      "name": "Acme",
      "domain": "https://acme.example",
      "captured_at": "2026-06-05",
      "pages": {
        "home": {
          "url": "https://acme.example",
          "headline": "Short summary of hero messaging"
        },
        "pricing": {
          "url": "https://acme.example/pricing",
          "plans": [
            {
              "name": "Starter",
              "price": "29",
              "interval": "month",
              "features": ["feature a", "feature b"]
            }
          ]
        },
        "content": {
          "url": "https://acme.example/blog",
          "recent_items": [
            { "title": "Post title", "date": "2026-05-30" }
          ]
        }
      }
    }
  ]
}
```

## Field notes

- `captured_at` and item `date` use ISO `YYYY-MM-DD`.
- `price` is a string to preserve currency symbols, ranges, and "Contact us" values.
- Omit a page object when the competitor has no such surface; do not invent one.
- One object per competitor in the `competitors` array; match on `name` across runs.

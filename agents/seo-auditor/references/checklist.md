# Audit checklist

Work through every applicable item per URL. Record evidence (the actual value found) for each.

## On-page

- Confirm exactly one `<title>` tag; check length (roughly 50 to 60 characters) and keyword relevance.
- Confirm a meta description exists, is unique, and stays under about 160 characters.
- Confirm exactly one `<h1>` and a logical heading order (no skipped levels).
- Confirm a self-referencing canonical tag.
- Check `meta robots` for unintended `noindex` or `nofollow`.
- Validate JSON-LD structured data for the content type (Article, Product, Organization, BreadcrumbList).
- Confirm Open Graph (`og:title`, `og:description`, `og:image`) and Twitter card tags.
- Confirm meaningful `alt` text on content images.
- Check internal link depth; flag orphan pages and pages more than 3 clicks from the home page.

## Technical

- Confirm HTTP 200 and a single redirect hop at most.
- Confirm HTTPS and no mixed content.
- Parse `robots.txt`; flag rules that block important paths.
- Confirm `sitemap.xml` exists, is referenced in `robots.txt`, and covers indexable URLs.
- Confirm a mobile viewport meta tag.
- Check `hreflang` correctness for multilingual sites.
- Crawl internal links; report broken (4xx/5xx) targets.

## Performance

- Flag render-blocking CSS/JS in the document head.
- Flag oversized or non-next-gen images (serve WebP/AVIF; set width/height).
- Note any Core Web Vitals hints (LCP element, layout-shift risks).
- Verify current CWV thresholds with WebSearch before asserting pass/fail.

## Content

- Check title and description uniqueness across all audited URLs.
- Flag thin content (very low word count for the page intent).
- Flag duplicate or near-duplicate pages.
- Assess primary keyword targeting and presence in title, H1, and first paragraph.

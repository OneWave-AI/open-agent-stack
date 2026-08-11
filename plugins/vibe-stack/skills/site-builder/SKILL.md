---
name: site-builder
description: Build a marketing website that converts and ranks -- page inventory, copy before layout, one honest conversion path, real SEO and OG metadata, forms that actually deliver. Use for landing pages, company sites, product sites, and portfolios, as opposed to apps with accounts and data.
---

# Site Builder

A marketing site is not a small app. Apps are judged on what they do; sites are judged in about four seconds on what they say. Which means the failure modes are different: an app breaks, a site just quietly fails to convince anyone and nobody tells you why.

Two rules govern everything below. Copy comes before layout -- designing a hero before knowing the sentence is how you end up with a headline written to fit a box. And the site does one job -- the visitor should never wonder what they are meant to do next.

## Workflow

1. **Answer the four questions.** Before a single file: what does this sell, to whom, what does the visitor do next, and why should they believe it. If the user cannot answer the fourth with something concrete -- a name, a number, a screenshot, a quote -- that is the site's real problem, and it will not be solved by design. Say so.
2. **Inventory the pages.** Most sites need fewer than the user thinks: home, one page per real offering, about, contact, plus legal. A five-page site done properly beats a twelve-page site with eight thin pages -- thin pages hurt both conversion and search. Decide the nav now, because nav length constrains everything after.
3. **Write the copy first, as plain text.** Per page: the one-line promise, the proof, the objection it answers, the call to action. Then read it aloud. The headline states what the thing is and who it is for -- clever comes second, and only after clear. Specific beats sweeping every time: "invoices chase themselves" over "streamline your workflow". No "Unlock", no "Supercharge", no "In today's fast-paced world".
4. **One conversion path.** Pick the single action that matters -- book, buy, sign up, reply -- and make everything point at it. The same CTA wording throughout, present above the fold and repeated at natural decision points. Every competing secondary action you remove raises the odds of the primary one. If there is a form, it asks the fewest fields you can actually act on.
5. **Build the page in sections, not as a wall.** Vary the rhythm: full-bleed, then narrow, then asymmetric. Let one element be genuinely large. Standard order works and there is no prize for reinventing it -- hero, proof, what it does, how it works, objection handling, CTA -- but every section earns its place by doing a job in that sequence. See `polish-pass` for stripping the template smell out of the result.
6. **Do the metadata for real.** Per page: a unique title under ~60 characters, a description that would make someone click, canonical URL, and an OG image that renders correctly -- test the actual link preview, do not assume. Site-wide: `sitemap.xml`, `robots.txt`, favicon at every size, and JSON-LD (`Organization`, plus `LocalBusiness` if there is an address). A site without OG images looks broken every time anyone shares it, which is exactly when it matters most.
7. **Make the forms deliver.** The most common failure in this entire skill: the contact form that resolves into nothing. It must reach a human's inbox or a database, confirm submission visibly, handle its own error state, and have spam protection that is not a hidden field a bot fills in anyway. Then submit it yourself, on production, and confirm the message arrived. See `make-it-real`.
8. **Budget the performance.** Marketing sites are mostly images, and images are the whole performance story. Modern formats, correct dimensions, lazy below the fold and priority above it, and explicit width and height so nothing shifts. Fonts subset and preloaded, `font-display: swap`, two families maximum. Target LCP under 2.5s on a throttled mobile connection -- measure it, because desktop tells you nothing.
9. **Verify on a phone first.** Most traffic is mobile and most of these sites are built in a desktop window. Check the hero at 390px wide, tap targets at 44px, that nothing scrolls sideways, and that the nav works with a thumb.

## Rules

- Never fabricate proof. No invented testimonials, no logos of companies that are not customers, no made-up numbers. It is a lie, it is often illegal, and it is the fastest way to destroy the trust the site exists to build. If there is no social proof yet, use specificity and a real demo instead.
- Every claim on the page has to be one the user would defend to a customer.
- Do not add a blog unless someone will actually write. An abandoned blog with three posts from last year signals more than no blog.
- Accessibility is conversion: real heading hierarchy, alt text, contrast at AA, keyboard-navigable nav and forms. A screen reader and a search crawler want the same things.
- Analytics before launch, not after -- launching untracked means the first week of data is gone permanently. One tool, key events defined, consent handled if it applies.
- The cookie banner is a conversion decision, not just a legal one. If the jurisdiction does not require it, do not ship one.
- No purple, no emoji as icons, no gradient text on a centered hero.

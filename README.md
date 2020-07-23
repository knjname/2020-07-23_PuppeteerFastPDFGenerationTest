# Fast PDF Generation Test Playground with Puppeteer

## The facts as far as I investigated

- `document.body.innerHTML = ...` is faster than `page.setContent(...)`.
  - There is no difference between `document.body.innerHTML` and `document.body.replaceWith(newBodyElement)`.
- In the context of PDF generation, older version pupeteer `1.11.0` is pretty fast. The latest version `5.2.1` is very slow.

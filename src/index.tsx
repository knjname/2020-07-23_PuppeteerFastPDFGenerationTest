import puppeteer from "puppeteer";

import { renderToString } from "react-dom/server";
import { LargeComponent } from "./LargeComponent";
import React from "react";

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  try {
    const page = await browser.newPage();
    for (let i = 0; i < 50; i++) {
      console.log(`==== ${i}`);

      console.time("HTML PRINT");
      const html = renderToString(<LargeComponent id={`${i}`} />);
      // await page.setContent(html);
      await page.evaluate((html) => (document.body.innerHTML = html), html);
      console.timeEnd("HTML PRINT");

      console.time("PDF PRINT");
      await page.pdf({ path: `output/foobar.${i}.pdf`, format: "A4" });
      console.timeEnd("PDF PRINT");
    }
    await page.close();
  } finally {
    await browser.close();
  }
})();

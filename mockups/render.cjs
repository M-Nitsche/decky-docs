// Renders every <section> of connect-claude.html, plus consent.html, to images/connect-claude at 2x.
// Needs playwright-core and its Chromium. See README.md.
const path = require("path");
const { chromium } = require("playwright-core");

const OUT = path.join(__dirname, "..", "images", "connect-claude");
const file = (name) => "file://" + path.join(__dirname, name);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1000, height: 1400 }, deviceScaleFactor: 2 });

  await page.goto(file("connect-claude.html"));
  await page.evaluate(() => document.fonts.ready);
  for (const section of await page.locator("section").all()) {
    const id = await section.getAttribute("id");
    await section.screenshot({ path: path.join(OUT, `${id}.png`) });
    console.log(id);
  }

  await page.setViewportSize({ width: 1040, height: 772 });
  await page.goto(file("consent.html"));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(300);
  // The right half only: it holds the decision, and the whole page would be too small to read in the docs column.
  await page.screenshot({ path: path.join(OUT, "4-allow-access.png"), clip: { x: 520, y: 0, width: 520, height: 772 } });
  console.log("4-allow-access");

  await browser.close();
})();

const { chromium } = require("playwright");

async function run() {
  const baseUrl = process.env.URL || "http://127.0.0.1:5173/";
  const outDir = process.env.OUT_DIR || "screenshots";

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForTimeout(250);
  await page.screenshot({ path: `${outDir}/ktv-ai-desktop.png`, fullPage: true });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(250);
  await page.screenshot({ path: `${outDir}/ktv-ai-mobile.png`, fullPage: true });

  await browser.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});


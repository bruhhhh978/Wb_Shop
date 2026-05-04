/**
 * Chụp screenshot site sau build (vite preview) để so sánh với design gốc.
 * Chạy: pnpm run screenshot (sau pnpm run build).
 */
const http = require("node:http");
const path = require("node:path");
const fs = require("node:fs");
const { pathToFileURL } = require("node:url");
const { spawn } = require("node:child_process");
const { mkdir } = require("node:fs/promises");
const { chromium } = require("playwright");

const ROOT = path.join(__dirname, "..");
const PORT = Number(process.env.PREVIEW_PORT || 4187);
const BASE = `http://127.0.0.1:${PORT}/`;
const OUT_DIR = path.join(ROOT, "screenshots");

function waitForHttpOk(url, timeoutMs = 60000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    function tryOnce() {
      const req = http.get(url, (res) => {
        res.resume();
        if (res.statusCode && res.statusCode >= 200 && res.statusCode < 400) resolve();
        else schedule();
      });
      req.on("error", schedule);
      req.setTimeout(2000, () => {
        req.destroy();
        schedule();
      });
    }
    function schedule() {
      if (Date.now() - start > timeoutMs) reject(new Error(`Không kết nối được ${url}`));
      else setTimeout(tryOnce, 250);
    }
    tryOnce();
  });
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const preview = spawn(
    "npx",
    ["vite", "preview", "--host", "127.0.0.1", "--port", String(PORT), "--strictPort"],
    {
      cwd: ROOT,
      stdio: "inherit",
      shell: true,
    },
  );

  try {
    await waitForHttpOk(BASE);
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto(BASE, { waitUntil: "networkidle" });
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(OUT_DIR, "ktv-ai-desktop.png"), fullPage: true });

    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(OUT_DIR, "ktv-ai-mobile.png"), fullPage: true });

    const refPath = path.join(ROOT, "public", "design-reference.png");
    if (fs.existsSync(refPath)) {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(pathToFileURL(refPath).href, { waitUntil: "domcontentloaded" });
      await page.waitForTimeout(200);
      await page.screenshot({
        path: path.join(OUT_DIR, "design-reference-desktop.png"),
        fullPage: true,
      });
    } else {
      console.warn("Thiếu public/design-reference.png — bỏ qua screenshot design gốc.");
    }

    await browser.close();
    console.log("Screenshot xong:", OUT_DIR);
  } finally {
    preview.kill("SIGTERM");
    if (process.platform === "win32") {
      try {
        spawn("taskkill", ["/PID", String(preview.pid), "/T", "/F"], { shell: true, stdio: "ignore" });
      } catch {
        /* ignore */
      }
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

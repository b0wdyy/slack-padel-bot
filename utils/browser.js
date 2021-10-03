const puppeteer = require('puppeteer');

async function initCrawler({ date }) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const pageResponse = await page.goto(`https://www.tennisvlaanderen.be/dagplanning?clubId=2388&planningDay=${date}&terrainGroupId=9245`);

  return pageResponse;
}

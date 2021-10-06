const puppeteer = require("puppeteer");

function getDateFromDay(day) {
  switch (day) {
    case "maandag":
      return "Monday";
    case "dinsdag":
      return "Tuesday";
    case "woensdag":
      return "Wednesday";
    case "donderdag":
      return "Thursday";
    case "vrijdag":
      return "Friday";
    case "zaterdag":
      return "Zaterdag";
    case "zondag":
      return "Sunday";

    default:
      return "No valid date given";
  }
}

function getLink({ date }) {
  return `https://www.tennisvlaanderen.be/dagplanning?clubId=2388&planningDay=${date}&terrainGroupId=9245`;
}

async function initCrawler({ link }) {
  const LINK = link;

  const browser = await puppeteer.launch({ args: "--no-sandbox" });
  const page = await browser.newPage();
  await page.goto(LINK);
  try {
    const fields = await page.$$eval(
      ".reservation-table .Padel.available",
      (data) => data.map((d) => d.getAttribute("data-url"))
    );

    return fields.filter((d) => d.includes("startHour=17:00"));
  } catch (e) {
    return [];
  }
}

module.exports = { getLink, getDateFromDay, initCrawler };

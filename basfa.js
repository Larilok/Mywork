'use strict'

const puppeteer = require('puppeteer');
// const devices = require('puppeteer/DeviceDescriptors');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
//   await page.emulate(devices['iPhone 6']);
  await page.goto('https://docs.google.com/spreadsheets/d/1qxsET43yE_B6UYMZC2Cb4aheUcXeKdBAUmAkeoQn-eA/edit#gid=1811612640');
  await page.setViewport({width: 2000, height: 2000})
  await page.waitFor(1000);
  await page.screenshot({path: 'kel1.png'});
//   await page.screenshot({path: 'full1.png', fullPage: true});
  await browser.close();
})();
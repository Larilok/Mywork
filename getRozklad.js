'use strict';
const puppeteer = require('puppeteer');

// let scrape =
 (async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    
    await page.goto('http://rozklad.kpi.ua/Schedules/ScheduleGroupSelection.aspx');
     await page.waitFor(1000);
    await page.focus('#ctl00_MainContent_ctl00_txtboxGroup');
     await page.type('#ctl00_MainContent_ctl00_txtboxGroup','ІП-71',{delay: 100});         //Type the group 
    // await page.keyboard.press('ArrowDown',{delay: 100});
    await page.waitForSelector('#ctl00_MainContent_ctl00_btnShowSchedule');
    await page.click('#ctl00_MainContent_ctl00_btnShowSchedule',{clickCount: 100000000000});
    await page.keyboard.press('Enter',{delay: 100});
    await page.waitFor(8000);
    
    // const result = await page.evaluate(() => {
    //     let data = [];
    //     let elems = document.querySelectorAll('.product_pod');
    //     for(let elem of elems){
    //         let title = elem.childNodes[5].innerText;
    //         let price = elem.childNodes[7].children[1].innerText; 

    //         data.push({title, price}); 
        
    //     }
    //     return data;
    // });
    await browser.close();
    // return result;
})();

// scrape().then((value) => {
//     console.log(value); 
// });
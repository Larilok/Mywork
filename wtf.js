const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless:false
    });
    const page = await browser.newPage();
    const inputSelector = '#lst-ib';
    const email = 'test@whatever.com';

    await page.goto('https://www.google.com?q=test+stuff', {waitUntil: 'networkidle'});

    const inputValue = await page.$eval(inputSelector, el => el.value);
    await page.click(inputSelector);
  
    if (inputValue !== email) {
        // Ctrl + A selects all the content
        await page.keyboard.down('Control');
        await page.keyboard.down('A');

        await page.keyboard.up('A');
        await page.keyboard.up('Control');

        // Since it is all selected, no need to backspace since typing will put the new value right in over the old.
        await page.type(email);
    }
})();

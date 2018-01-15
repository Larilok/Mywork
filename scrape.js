'use strict';
const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('http://books.toscrape.com/');
    // await page.click('#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img');
   
    await page.waitFor(1000);
    
    const result = await page.evaluate(() => {
        let data = [];
        let elems = document.querySelectorAll('.product_pod');
        for(let elem of elems){
            let title = elem.childNodes[5].innerText;
            let price = elem.childNodes[7].children[0].innerText; 

            data.push({title, price}); 
        
        }
        return data;
    });
    browser.close();
    return result;
};

scrape().then((value) => {
    console.log(value); 
});
//const puppeteer = require('puppeteer');

// let scrape = async () => {
//     const browser = await puppeteer.launch({headless: false});
//     const page = await browser.newPage();

//     await page.goto('http://books.toscrape.com/');

//     const result = await page.evaluate(() => {
//         let data = []; // Создаём пустой массив для хранения данных
//         let elements = document.querySelectorAll('.product_pod'); // Выбираем все товары

//         for (var element of elements){ // Проходимся в цикле по каждому товару
//             let title = element.childNodes[5].innerText; // Выбираем название
//             let price = element.childNodes[7].children[0].innerText; // Выбираем цену

//             data.push({title, price}); // Помещаем объект с данными в массив
//         }

//         return data; // Возвращаем массив
//     });

//     browser.close();
//     return result; // Возвращаем данные
// };

// scrape().then((value) => {
//     console.log(value); // Получилось!
// });
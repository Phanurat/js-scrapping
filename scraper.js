const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    // ต่อไปคือการดำเนินการอื่นๆ ที่ต้องการทำ
    // ...
    await browser.close();
})();

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.facebook.com/profile.php?id=61558499640631');
    
    // ตัวอย่างการดึงข้อมูลจากเว็บไซต์
    const title = await page.title();
    console.log('หัวเรื่อง:', title);

    // ตัวอย่างการค้นหาและดึงข้อมูลจาก element ในหน้าเว็บ
    await page.waitForSelector('.example-class'); // รอให้ element ปรากฏ
    const elementText = await page.$eval('.example-class', element => element.textContent);
    console.log('ข้อความของ element:', elementText);

    // ต่อไปคือการดำเนินการอื่นๆ ที่ต้องการทำ
    // ...

    await browser.close();
})();

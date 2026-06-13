import {test,expect, chromium} from '@playwright/test'

test('Window Handling', async({})=>{
    const browser = await chromium.launch()// To create a browser instance
    // To create a new context, within context muitple pages can be stored
    const context = await browser.newContext()

    const page1 = await context.newPage()
    const page2 = await context.newPage()
    const page3 = await context.newPage()

    const allpages = context.pages()

    console.log("No of pages created: ", allpages.length)

    // It will launch the https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    // verify the title is present in the launched url
    await expect(page1).toHaveTitle("OrangeHRM")
    
    // It will launch the url - https://orangehrm.com/
    await page2.goto("https://orangehrm.com/")
    // It will verify the title of above website
    await expect(page2).toHaveTitle("OrangeHRM: All in One HR Software for Businesses | OrangeHRM")

    await page3.goto("https://www.saucedemo.com/")
    await expect(page3).toHaveTitle("Swag Labs")
    await page3.locator("#user-name").fill("standard_user")
    await page3.locator("#password").fill("secret_sauce")
    await page3.locator("#login").click()


})
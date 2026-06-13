import {test, expect} from '@playwright/test'

test('Assertion test', async({page})=>
{
    test.slow()
    await page.goto("https://testautomationpractice.blogspot.com/")

    // tohavetitle
    await expect(page).toHaveTitle("Automation Testing Practice")

    // toBevisible
    const start = await page.locator("button[class='start']")
    await expect(start).toBeVisible();

    // radio button
    const male = await page.locator("#male")
    await male.click();
    await expect(male).toBeChecked();

    // checkbox 
    const checkbox = await page.locator("#sunday")
    await checkbox.click()
    await expect(checkbox).toBeChecked();

    // tohaveText
    const text = await page.locator(" button[class='submit-btn']")
    await expect(text).toHaveText("Submit")

})
// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  // triple the default timeout ex 30s and now its 90s
  test.slow()
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Date Picker', async({page})=>
{
  const year = "1992"
  const month = "6"
  const Day = "10"
  await page.goto('https://testautomationpractice.blogspot.com/')
  await page.locator("input[id='txtDate']").click()
  await page.getByLabel('Select year').selectOption(year)
  await page.getByLabel('Select month').selectOption(month)
  await page.locator('#ui-datepicker-div').getByRole('link', { name: Day, exact: true }).click();
  await page.waitForTimeout(3000)
})

test('DatePicker3', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByPlaceholder('Start Date').fill('1992-06-10');
  await page.getByPlaceholder('End Date').fill('2026-05-25');
  await page.locator("div[class='post-body entry-content']").getByRole('button', { name: 'Submit' }).click();
  await page.waitForTimeout(3000)
});

test('Upload', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.locator('#singleFileInput').click();
  await page.locator('#singleFileInput').setInputFiles('UshaLResume.pdf');
  await page.getByRole('button', { name: 'Upload Single File' }).click();
  await page.waitForTimeout(3000)
});

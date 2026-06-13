import { test, expect } from '@playwright/test'

test('PlaywrightWithJenkins - sanity check', async ({ page }) => {
  console.log('Running PlaywrightWithJenkins test')
  expect(true).toBeTruthy()
})

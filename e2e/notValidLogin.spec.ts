import { test as setup, expect } from '@playwright/test';

setup('authenticateNegative', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByLabel('Username').fill('incorrectUser');
  await page.getByLabel("Password").fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  const errorMessage = await page.locator('//*[@id="error"]').textContent();
  expect(errorMessage).toContain('Your username is invalid!');
  await page.close();
})


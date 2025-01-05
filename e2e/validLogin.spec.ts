import {test as setup, expect} from '@playwright/test';

setup('authenticatePositive', async ({ page }) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.getByLabel('Username').fill('student');
await page.getByLabel("Password").fill('Password123');
await page.getByRole('button', { name:'Submit'}).click();
await page.waitForURL('https://practicetestautomation.com/logged-in-successfully/');
await expect (page).toHaveTitle('Logged In Successfully | Practice Test Automation');
await page.close();
})
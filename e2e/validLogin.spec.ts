import { test as setup, expect } from '@playwright/test';
import {LoginPage} from './pages/LoginPage';

setup('authenticatePositive', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login("student", "Password123");
  await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
  await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation');
  await loginPage.close();
})
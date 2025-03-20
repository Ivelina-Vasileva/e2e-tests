import { test as setup, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

setup('authenticateNegative', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login("incorrectUser", "Password123");

  const errorMessage = await loginPage.getErrorMessage();
  expect(errorMessage).toContain("Your username is invalid!");
  await loginPage.close();
});
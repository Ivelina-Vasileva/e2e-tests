import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';

test('Scroll page and verify element visibility', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.acceptCookies();
  await homePage.scrollToBottom();
  expect(await homePage.isEmailSubscriptionVisible()).toBeTruthy();
  await page.close();
});
import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { BasePage } from './pages/BasePage';

test('Pause Site - Search Engine', async ({ page }) => {
  const homePage = new HomePage(page);
  const basePage = new BasePage(page);
  await homePage.goto();
  expect(await basePage.checkTitle('▷ Pause Jeans — онлайн магазин за дамски и мъжки дрехи'));
  await homePage.acceptCookies();
  await homePage.search('чорапи');
  expect(await basePage.checkTitle("PauseJeans"));
  await page.close();
})
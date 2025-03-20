import { test, expect } from '@playwright/test';
import { BasePage } from './pages/BasePage';

test('Pause Site - Buy button', async ({ page }) => {
  const basePage = new BasePage(page);
  await basePage.goto('https://pausejeans-online.com/');
  await expect(page).toHaveTitle('▷ Pause Jeans — онлайн магазин за дамски и мъжки дрехи');
  await basePage.clickButtonByName('Приеми');
  await basePage.clickLinkByName('Мъже');
  const firstProduct = page.locator('//*[@id="js-product-list"]/div[1]/div/div/div[1]').first();
  await firstProduct.click();
  await basePage.clickButtonByName('Купи');

  const bannerLocator = page.locator('//*[@id="product"]/div[15]/div/div/span[3]');

  const bannerText = await bannerLocator.innerText();

  expect(bannerText).toContain('Продъктът беше добавен към количката');

  await page.close();
})
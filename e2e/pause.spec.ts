import { test, expect } from '@playwright/test';

test('Pause Site - Buy button', async ({ page }) => {
  await page.goto('https://pausejeans-online.com/');
  await expect(page).toHaveTitle('▷ Pause Jeans — онлайн магазин за дамски и мъжки дрехи');
  await page.getByRole('button', { name: 'Приеми' }).click();
  await page.getByRole('link', { name: 'Мъже' }).click();
  const firstProduct = page.locator('//*[@id="js-product-list"]/div[1]/div/div/div[1]').first();
  await firstProduct.click();
  await page.getByRole('button', { name: 'Купи' }).click();

  const bannerLocator = page.locator('//*[@id="product"]/div[15]/div/div/span[3]');

  const bannerText = await bannerLocator.innerText();

  expect(bannerText).toContain('Продъктът беше добавен към количката');

  await page.close();
})
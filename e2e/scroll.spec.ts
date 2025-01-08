import { test, expect } from '@playwright/test';

test('Scroll page and verify element visibility', async ({ page }) => {
  await page.goto('https://pausejeans-online.com/');
  await page.getByRole('button', { name: 'Приеми' }).click();
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  const targetElement = await page.$('//*[@id="blockEmailSubscription_displayFooter"]');
  expect(await targetElement?.isVisible()).toBeTruthy();
  await page.close();
});
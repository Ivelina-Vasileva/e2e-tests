import { test, expect } from '@playwright/test';

test('Order', async ({ page }) => {
  // 1. Зареди URL на сайта
  await page.goto('https://solvewoo.com/');
  const productLocator = page.locator('//*[@id="post-2"]/div/div/div[2]/div/div/div/div/div[2]/div[2]/div/div[3]/div');
  await productLocator.hover(); // 2. Хавърва на продукта
  const buttonLocator = page.locator('//*[@id="post-2"]/div/div/div[2]/div/div/div/div/div[2]/div[2]/div/div[3]/div/div[3]/div[3]/div[2]/div[2]/a');
  await buttonLocator.click(); // 3. Клика върху продукта
  await page.getByRole('link', { name: 'Поръчка' }).click(); // 4. Клика на "Поръчка"
  await page.waitForTimeout(2000)
  await page.locator('//*[@id="billing_first_name"]').fill('Test User'); // 5. Име
  await page.getByLabel('Фамилия').fill('Test User'); //6. Фамилия
  const prefixes = ['087', '088', '089']; //7. Валидни телефонни префикси
  const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)]; //8. Генерира автоматично префикс
  const phoneNumber = `${randomPrefix}${Math.floor(1000000 + Math.random() * 9000000)}`; // 9. Генерира телефонния номер
  await page.getByLabel('Телефон').fill(phoneNumber); // 10. Въвежда телефонен номер
  await page.getByLabel('Имейл адрес').fill(`testuser${Date.now()}@example.com`); //11. Въвежда имейл
  await page.getByRole('button', { name: 'Поръчване' }).click(); //12.Клика на "Поръчване"

  // 13.Тук трябва да пише,че сме направили успешно поръчка :)
  await page.close();
})
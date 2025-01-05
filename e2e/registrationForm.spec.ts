import { test, expect } from '@playwright/test';

test('Generic registration form', async ({ page }) => {
  // 1. Зареди URL на сайта
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
  await page.getByLabel('First Name').fill('Test User'); // Име
  await page.getByLabel('Last Name').fill('Test User'); //Фамилия
  await page.getByLabel('E-Mail').fill(`testuser${Date.now()}@example.com`); // Динамичен имейл
  const prefixes = ['087', '088', '089']; //Валидни телефонни префикси
  const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)]; //Генерира автоматично префикс
  const phoneNumber = `${randomPrefix}${Math.floor(1000000 + Math.random() * 9000000)}`; //Генерира телефонния номер
  await page.getByLabel('Telephone').fill(phoneNumber); //Въвежда телефонен номер
  await page.locator('//*[@id="input-password"]').fill('SecurePassword123'); // Парола
  await page.locator('//*[@id="input-confirm"]').fill('SecurePassword123'); //Потвърждава парола
  await page.locator('label', { hasText: 'Yes' }).click(); // Избира "Да"
  await page.locator('label[for="input-agree"]').click();
  await page.getByRole('button', { name: /register|sign up|submit|continue/i }).click();
  await expect(page).toHaveTitle('Your Account Has Been Created!')
  await page.close()
});

import { test, expect, chromium } from '@playwright/test';

test('Test new page event and login', async () => {
  const browser = await chromium.launch({
    headless: false,
    args: [
      '--disable-blink-features=AutomationControlled', // Деактивира автоматизацията/Лъжем playwright-a, че е браузър 
    ],
  });

  // Създава нов контекст и страница
  const context = await browser.newContext();
  const page = await context.newPage();
  // Отива на страницата
  await page.goto('https://bookly24.com/');

  // Щраква върху елемент "Get Started Now For Free"
  await page.locator('//*[@id="content"]/div[2]/div/div[3]/div/div/div[3]/div/div/div').click();

  // Проверява заглавието
  await expect(page).toHaveTitle('Bookly24');

  // Чака нова страница да се отвори след натискане на бутона
  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'), // Чака отваряне на нова страница
    page.getByRole('button', { name: 'Continue with Google' }).click(), // Щраква на бутона
  ]);

  // Изчаква новата страница да се зареди
  await newPage.waitForLoadState();

  // Проверява заглавието на новата страница
  const title = await newPage.title();
  expect(title).toContain('Sign in - Google Accounts');

  // Въвежда текст в полето за имейл и парола
  await newPage.waitForSelector('input[type="email"]');
  await newPage.locator('input[type="email"]').fill('example@test.com');
  await newPage.getByRole('button', { name: 'Next' }).click();
  await newPage.waitForSelector('input[type="password"]', { timeout: 10000 });
  await newPage.locator('input[type="password"]').fill('examplePassword.')
  await newPage.getByRole('button', { name: 'Next' }).click();
  await new Promise((resolve) => setTimeout(resolve, 10000));
  // Чака страницата да има текст "Business Profiles"
  await page.waitForSelector('h3.ant-typography.page-title.css-d2lrxs');
  const businessProfileText = await page.locator('h3.ant-typography.page-title.css-d2lrxs');
  await expect(businessProfileText).toBeVisible();
  //Затваря страницата
  await page.close();
});

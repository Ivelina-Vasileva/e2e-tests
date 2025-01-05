import { test, expect } from '@playwright/test';

//Expect page to have title'▷ Pause Jeans — онлайн магазин за дамски и мъжки дрехи'
test('title name', async ({ page }) => {
    await page.goto('https://pausejeans-online.com/');
    await expect(page).toHaveTitle('▷ Pause Jeans — онлайн магазин за дамски и мъжки дрехи');
});

//Expect to login button is visible
test('login button present', async ({ page }) => {
    await page.goto('https://pausejeans-online.com/');
    await page.locator('//*[@id="cookiesplus-form"]/div[3]/div[1]/div[1]/div[1]/button').click();
    await page.locator('//*[@id="memgamenu-form_2651469545"]/nav/div[2]/ul/li[3]/a/span').click();
    await expect(page).toHaveTitle('▷ Дамски дрехи → Онлайн облекло и цени → Pause Jeans™');
    await page.locator('//*[@id="js-product-list"]/div[1]/div/div/div[1]/article/div/div[1]/a/img').click();
    await expect(page).toHaveTitle('Цикламени чорапи Samples  ⊶ ХИТ Цена — Pause Jeans')
    await page.locator('//*[@id="add-to-cart-or-refresh"]/div[2]/div/div[1]/div[2]/button').click();

    const banner = page.locator('//*[@id="product"]/div[15]/div/div/span[3]');

    await expect(banner).toHaveText('Цикламени чорапи Samples Продъктът беше добавен към количката');
});

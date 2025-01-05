import { test, expect } from '@playwright/test';

test('Pause Site - Search Engine', async ({ page }) => {
    await page.goto('https://pausejeans-online.com/');
    await expect(page).toHaveTitle('▷ Pause Jeans — онлайн магазин за дамски и мъжки дрехи');
    await page.getByRole('button', { name: 'Приеми' }).click();
    await page.locator('//*[@id="leo_search_query_top"]').fill('чорапи');
    await page.locator('//button[@id="leo_search_top_button"]').click();
await expect (page).toHaveTitle("PauseJeans");
await page.close();
})
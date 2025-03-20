import { test } from '@playwright/test';
import { OrderPage } from './pages/OrderPage';

test('Order', async ({ page }) => {
  const orderPage = new OrderPage(page);
  await orderPage.goto();
  await orderPage.selectProduct();
  await orderPage.addToCart();
  await page.waitForTimeout(2000)
  await orderPage.goToCheckout();
  await orderPage.fillPersonalDetails('Test', 'User');
  await orderPage.placeOrder();

  await page.close();
})
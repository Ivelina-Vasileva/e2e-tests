import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class OrderPage extends BasePage {
  private productLocator!: string;
  private addToCartButton = 'button[name="add-to-cart"]';
  private goToCartButton = 'a[href="/cart"]';
  private checkoutButton = 'button[name="checkout"]';
  private firstNameField = 'input[name="billing_first_name"]';
  private lastNameField = 'input[name="billing_last_name"]';
  private emailField = 'input[name="billing_email"]';
  private addressField = 'input[name="address"]';
  private phoneField = 'input[name="billing_phone"]';
  private paymentMethodSelector = 'select[name="payment_method"]';
  private confirmOrderButton = 'button[name="confirm_order"]';

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.page.goto('https://solvewoo.com/');
  }

  async selectProduct() {
    this.productLocator = '//*[@id="post-2"]/div/div/div[2]/div/div/div/div/div[2]/div[2]/div/div[3]/div';
    const product = await this.page.locator(this.productLocator);
    await product.click();
  }

  async addToCart() {
    await this.page.locator(this.addToCartButton).click();
  }

  async goToCheckout() {
    const checkoutButton = 'a.button.checkout.wc-forward';
    await this.page.locator(checkoutButton).click();

  }
  async placeOrder() {
    const placeOrderButton = 'button#place_order[name="woocommerce_checkout_place_order"]';

    await this.page.locator(placeOrderButton).click();
  }

  async fillPersonalDetails(firstName: string, lastName: string) {

    await this.page.locator(this.firstNameField).fill(firstName);
    await this.page.locator(this.lastNameField).fill(lastName);

    const prefixes = ['087', '088', '089'];
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const phoneNumber = `${randomPrefix}${Math.floor(1000000 + Math.random() * 9000000)}`;

    await this.page.locator(this.phoneField).fill(phoneNumber);
    const email = `testuser${Date.now()}@example.com`;
    await this.page.locator(this.emailField).fill(email);
  }
}

import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
  }

  async fillRegistrationForm() {
    await this.page.getByLabel('First Name').fill('Test User');
    await this.page.getByLabel('Last Name').fill('Test User');
    await this.page.getByLabel('E-Mail').fill(`testuser${Date.now()}@example.com`);

    const prefixes = ['087', '088', '089'];
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const phoneNumber = `${randomPrefix}${Math.floor(1000000 + Math.random() * 9000000)}`;
    await this.page.getByLabel('Telephone').fill(phoneNumber);

    await this.page.locator('//*[@id="input-password"]').fill('SecurePassword123');
    await this.page.locator('//*[@id="input-confirm"]').fill('SecurePassword123');

    await this.page.locator('label', { hasText: 'Yes' }).click();
    await this.page.locator('label[for="input-agree"]').click();
  }

  async submitRegistration() {
    await this.page.getByRole('button', { name: /register|sign up|submit|continue/i }).click();
  }

  async verifyRegistrationSuccess() {
    await expect(this.page).toHaveTitle('Your Account Has Been Created!');
  }
}

import { Page, expect } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async close() {
    await this.page.close();
  }

  async clickButtonByName(buttonName: string) {
    await this.page.getByRole('button', { name: buttonName }).click();
  }

  async clickLinkByName(linkName: string) {
    await this.page.getByRole('link', { name: linkName }).click();
  }

  async checkTitle(expectedTitle: string) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }
}
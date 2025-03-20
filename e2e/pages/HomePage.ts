import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  private baseUrl: string;
  private acceptCookiesButton = '#accept-cookies';
  private menCategoryLink = 'a[href="/men"]';
  private searchInput = '#leo_search_query_top';
  private searchButton = '#leo_search_top_button';

  constructor(page: Page, baseUrl = 'https://pausejeans-online.com/') {
    super(page);
    this.baseUrl = baseUrl;
  }

  async goto() {
    await this.page.goto('https://pausejeans-online.com/');
  }

  async acceptCookies() {
    await this.page.waitForSelector('button[name="saveCookiesPlusPreferences"]', { state: 'visible' });
    await this.page.getByRole('button', { name: 'Приеми' }).click();

  }

  async navigateToMenCategory() {
    await this.page.click(this.menCategoryLink);
  }

  async scrollToBottom() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async isEmailSubscriptionVisible(): Promise<boolean> {
    const targetElement = await this.page.$('//*[@id="blockEmailSubscription_displayFooter"]');
    return await targetElement?.isVisible() || false;
  }

  async search(query: string) {
    await this.page.fill(this.searchInput, query);
    await this.page.click(this.searchButton);
  }
}

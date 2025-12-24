import { Page, Locator } from '@playwright/test';

export class AppPage {
  readonly page: Page;
  readonly title: Locator;
  readonly content: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('app-root .content span');
    this.content = page.locator('app-root .content');
  }

  async navigateTo() {
    await this.page.goto('/');
  }

  async getTitleText() {
    return await this.title.textContent();
  }

  async getContent() {
    return await this.content.textContent();
  }
}
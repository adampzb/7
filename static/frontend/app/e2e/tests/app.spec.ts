import { test, expect } from '@playwright/test';
import { AppPage } from '../pages/app.page';

test.describe('Discussit App', () => {
  let appPage: AppPage;

  test.beforeEach(async ({ page }) => {
    appPage = new AppPage(page);
    await appPage.navigateTo();
  });

  test('should display welcome message', async () => {
    const titleText = await appPage.getTitleText();
    expect(titleText).toBe('discussit-app app is running!');
  });

  test('should have proper page title', async ({ page }) => {
    await expect(page).toHaveTitle(/discussit/);
  });

  test('should have main content area', async ({ page }) => {
    const content = page.locator('app-root .content');
    await expect(content).toBeVisible();
  });
});
import { test, expect } from '@playwright/test';

test('Homepage UI should match screenshot', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  await expect(page).toHaveScreenshot();
});
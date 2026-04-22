import { test, expect } from '@playwright/test';

test('Check mobile view', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });

  await page.goto('https://www.amazon.in/');

  const searchBox = page.locator('#twotabsearchtextbox');

  await expect(searchBox).toBeVisible();
});
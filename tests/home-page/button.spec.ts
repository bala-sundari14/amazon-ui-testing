import { test, expect } from '@playwright/test';

test('Check search button UI', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  const button = page.locator('#nav-search-submit-button');

  await expect(button).toBeVisible();

  const box = await button.boundingBox();

  console.log('Button size:', box);

  expect(box?.width).toBeGreaterThan(30);
  expect(box?.height).toBeGreaterThan(30);
});
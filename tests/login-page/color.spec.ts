import { test, expect } from '@playwright/test';

test('Check search button color', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  const button = page.locator('#nav-search-submit-button');

  await expect(button).toBeVisible();

  const color = await button.evaluate(el =>
    window.getComputedStyle(el).backgroundColor
  );

  console.log('Button color:', color);

  expect(color).toBeTruthy();
});
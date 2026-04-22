import { test, expect } from '@playwright/test';

test('Check search box padding', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  const searchBox = page.locator('#twotabsearchtextbox');

  const padding = await searchBox.evaluate(el =>
    window.getComputedStyle(el).padding
  );

  console.log('Padding:', padding);

  expect(padding).toBeTruthy();
});
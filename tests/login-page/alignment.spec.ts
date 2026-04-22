import { test, expect } from '@playwright/test';

test('Check alignment of search box and button', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  const searchBox = page.locator('#twotabsearchtextbox');
  const button = page.locator('#nav-search-submit-button');

  const box1 = await searchBox.boundingBox();
  const box2 = await button.boundingBox();

  console.log('SearchBox Y:', box1?.y);
  console.log('Button Y:', box2?.y);

  // Allow small difference (tolerance)
  const difference = Math.abs((box1?.y ?? 0) - (box2?.y ?? 0));

  expect(difference).toBeLessThan(5); //  allow small pixel difference
});

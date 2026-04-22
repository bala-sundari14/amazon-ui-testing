import { test, expect } from '@playwright/test';

test('Check layout consistency', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  const logo = page.locator('#nav-logo');
  const search = page.locator('#twotabsearchtextbox');

  const logoBox = await logo.boundingBox();
  const searchBox = await search.boundingBox();

  expect(logoBox?.x).toBeLessThan(searchBox?.x);
});
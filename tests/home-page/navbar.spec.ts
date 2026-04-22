import { test, expect } from '@playwright/test';

test('Check navbar elements', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  const logo = page.locator('#nav-logo');
  const searchBox = page.locator('#twotabsearchtextbox');

  await expect(logo).toBeVisible();
  await expect(searchBox).toBeVisible();

  const logoBox = await logo.boundingBox();
  const searchBoxBox = await searchBox.boundingBox();

  expect(logoBox?.x).toBeLessThan(searchBoxBox?.x); // logo left side ✅
});
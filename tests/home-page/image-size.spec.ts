import { test, expect } from '@playwright/test';

test('Check product image size', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  // scroll down to load product images
  await page.mouse.wheel(0, 1000);

  // select visible product image
  const image = page.locator('img[alt]').nth(1);

  await expect(image).toBeVisible();

  const box = await image.boundingBox();

  console.log('Image size:', box);

  expect(box?.width).toBeGreaterThan(100);
  expect(box?.height).toBeGreaterThan(100);
});
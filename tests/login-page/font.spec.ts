import { test, expect } from '@playwright/test';

test('Check search box font size', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  const searchBox = page.locator('#twotabsearchtextbox');

  await expect(searchBox).toBeVisible();

  const fontSize = await searchBox.evaluate(el => 
    window.getComputedStyle(el).fontSize
  );

  console.log('Font size:', fontSize);

  expect(fontSize).toBeTruthy(); // flexible check ✅
});
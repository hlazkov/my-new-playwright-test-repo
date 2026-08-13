import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Catalog' }).click();
  await page.locator('#product-6').click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await expect(page.getByRole('link', { name: 'My Cart (1)' })).toBeVisible();
});

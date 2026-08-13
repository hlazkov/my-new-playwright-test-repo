import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Catalog' }).click();

  await page.locator('#product-6').click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await expect(page.getByRole('link', { name: 'My Cart (1)' })).toBeVisible();
});

test('Buying high heels', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Catalog' }).click();

  await page.locator(`[href$="/flower-print-jeans"]`).click();

  await page.locator(`#product-select-option-0`).selectOption("L");

  await page.locator(`#add`).click();

  await expect(page.locator(`#cart-target-desktop`)).toContainText("1");

  await page.locator(`#cart-target-desktop`).click();

  await expect(page.locator(`form`).locator(`[href$="/flower-print-jeans"]`))
    .toHaveText("Black heels - L / Red")
});


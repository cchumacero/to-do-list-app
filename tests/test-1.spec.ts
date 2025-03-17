import { test, expect } from '@playwright/test';

test('test-prueba', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await expect(page).toHaveTitle('To Do')
  await page.getByRole('heading', { name: 'To Do List' }).click();
  await page.getByRole('textbox', { name: 'Ingresa tu tarea...' }).click();
  await page.getByRole('button', { name: '+' }).click();
  
});
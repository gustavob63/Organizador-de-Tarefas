const { test, expect } = require('@playwright/test');
test('frontend serves index and can call backend', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await page.click('#callApi');
  const content = await page.locator('#output').innerText();
  expect(content).toContain('Olá do backend');
});
test('backend health', async ({ request }) => {
  const r = await request.get('http://localhost:5000/api/hello');
  expect(r.ok()).toBeTruthy();
  const j = await r.json();
  expect(j.status).toBe('ok');
});

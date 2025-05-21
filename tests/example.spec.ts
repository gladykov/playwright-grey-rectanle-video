import { test } from '@playwright/test';

test('Create video', async ({ page }) => {
  const waitTime = 2000
  await page.goto('https://staging.confluence.atlasauthority.com/wiki/home');
  await page.waitForTimeout(waitTime)
  await page.setViewportSize({width: 500, height: 500})
  await page.waitForTimeout(waitTime)
  await page.setViewportSize({width: 1280, height: 720})
  await page.waitForTimeout(waitTime)
  await page.goto('https://google.pl');
  await page.waitForTimeout(waitTime)
  await page.goto('https://staging.confluence.atlasauthority.com/wiki/home');
  await page.waitForTimeout(waitTime)

});

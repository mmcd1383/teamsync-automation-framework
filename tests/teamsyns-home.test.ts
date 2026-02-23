import { test, expect } from '@playwright/test';
import { TeamSyncHomePage } from '../src/pages/teamsync-home.page';

test('TeamSync homepage loads and button exists', async ({ page }) => {
  const home = new TeamSyncHomePage(page);

  await home.navigate();

  const header = await home.getHeaderText();
  expect(header).toBe('Welcome to TeamSync');

  // Check the button exists (but don't click it!)
  await expect(page.locator('#create-team-btn')).toBeVisible();
});

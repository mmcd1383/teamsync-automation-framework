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


test('User can open delete team page from home page', async ({ page }) => {
  const homePage = new TeamSyncHomePage(page);

  await homePage.navigate();

  // Act
  await homePage.clickDeleteTeam();

  // Assert
  const teamList = page.getByTestId('teams-list');
  await expect(teamList).toBeVisible();
});

test('User can navigate to delete team page', async ({ page }) => {
  const homePage = new TeamSyncHomePage(page);

  await homePage.navigate();
  await homePage.clickDeleteTeam();

  await expect(
    page.getByText('Select a team to delete')
  ).toBeVisible();
});


import { test, expect } from '@playwright/test';
import { TeamSyncHomePage } from '../src/pages/teamsync-home.page';
import { DeleteTeamPage } from '../src/pages/delete-team.page';

test('User can navigate to delete team page', async ({ page }) => {
  const homePage = new TeamSyncHomePage(page);

  await homePage.navigate();
  await homePage.clickDeleteTeam();

  await expect(
    page.getByText('Select a team to delete')
  ).toBeVisible();
});


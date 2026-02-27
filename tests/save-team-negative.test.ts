/*import { test, expect } from '@playwright/test';
import { TeamSyncHomePage } from '../src/pages/teamsync-home.page';
import { CreateTeamPage } from '../src/pages/create-team.page';

test('validation appears when team name is empty', async ({ page }) => {
  const home = new TeamSyncHomePage(page);
  const createTeam = new CreateTeamPage(page);

  await home.navigate();
  await home.clickCreateTeam();

  await createTeam.enterTeamName(''); // empty
  await createTeam.saveTeam();

  await expect(page.locator('#save-status')).toBeVisible();
  await expect(page.locator('#save-status')).toHaveText('Please enter a team name');
});*/

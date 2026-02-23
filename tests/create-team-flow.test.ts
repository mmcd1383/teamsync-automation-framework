import { test, expect } from '@playwright/test';
import { TeamSyncHomePage } from '../src/pages/teamsync-home.page';
import { CreateTeamPage } from '../src/pages/create-team.page';

test('coach can navigate to create team page', async ({ page }) => {
  const home = new TeamSyncHomePage(page);
  const createTeam = new CreateTeamPage(page);

  await home.navigate();
  await home.clickCreateTeam();

  const header = await createTeam.getHeaderText();
  expect(header).toBe('Create a New Team');
});
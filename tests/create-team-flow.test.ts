import { test, expect } from '@playwright/test';
import { TeamSyncHomePage } from '../src/pages/teamsync-home.page';
import { CreateTeamPage } from '../src/pages/create-team.page';

test('coach can create a team, save it, and see it on the homepage', async ({ page }) => {

  const home = new TeamSyncHomePage(page);
  const createTeam = new CreateTeamPage(page);

  // 1️⃣ Navigate to homepage
  await home.navigate();
  await expect(page.locator('h1')).toHaveText('Welcome to TeamSync');

  // 2️⃣ Go to Create Team page
  await home.clickCreateTeam();
  await expect(page.locator('h1')).toHaveText('Create a New Team');

  // 3️⃣ Fill in team name + save it
  const teamName = 'Cambuslang Rangers 2010';
  await createTeam.enterTeamName(teamName);
  await createTeam.saveTeam();

  // 4️⃣ Assert save status message appears before redirect
  await expect(page.getByTestId('save-status')).toBeVisible();
  await expect(page.getByTestId('save-status')).toHaveText(
    `Team "${teamName}" saved successfully!`
  );

  // 5️⃣ After redirect, assert we are back on homepage
  await page.waitForURL('**/index.html');
  await expect(page.locator('h1')).toHaveText('Welcome to TeamSync');

  // 6️⃣ Assert the team appears in the homepage list
  await home.expectTeamVisible(teamName);

  // 7️⃣ Optional: Assert clickable link appears
  await expect(home.teamLinkByName(teamName)).toBeVisible();
});
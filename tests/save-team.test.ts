
import { test, expect } from '@playwright/test';
import { TeamSyncHomePage } from '../src/pages/teamsync-home.page';
import { CreateTeamPage } from '../src/pages/create-team.page';

test( 'coach can create a team and save it successfully', async ( { page } ) => { 
    const home = new TeamSyncHomePage( page );
    const createTeam = new CreateTeamPage( page );

    await home.navigate();
    await home.clickCreateTeam();

    await expect (page.locator('h1')).toHaveText( 'Create a New Team' );

    const teamName = 'Cambuslang Rangers 2010';
    await createTeam.enterTeamName (teamName)
    await createTeam.saveTeam();

    await expect (page.locator('#save-status')).toBeVisible();
    await expect (page.locator('#save-status')).toHaveText( `Team "${teamName}" saved successfully!` );

    //await page.pause();

    // After save assertions
    await home.navigate();
    await expect(page.getByTestId('teams-list')).toContainText(teamName);  

});







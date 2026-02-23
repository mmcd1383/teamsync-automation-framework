
import { test, expect } from '@playwright/test';
import { TeamSyncHomePage } from '../src/pages/teamsync-home.page';
import { CreateTeamPage } from '../src/pages/create-team.page';

test( 'coach can create a team and save it successfully', async ( { page } ) => { 
    const home = new TeamSyncHomePage( page );
    const createTeam = new CreateTeamPage( page );

    await home.navigate();
    await home.clickCreateTeam();

    await expect (page.locator('h1')).toHaveText( 'Create a New Team' );

    await createTeam.enterTeamName ('Cambuslang Rangers 2010')
    await createTeam.saveTeam();

    await expect (page.locator('#save-status')).toBeVisible();
    await expect (page.locator('#save-status')).toHaveText( 'Team "Cambuslang Rangers 2010" saved successfully!' );

    await page.pause();

});







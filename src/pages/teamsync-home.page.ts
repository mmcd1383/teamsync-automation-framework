import { Page, Locator, expect } from '@playwright/test';

export class TeamSyncHomePage{
  private page: Page;
  private teamsList: Locator;
  private createTeamBtn: Locator;

  
  constructor( page: Page) {
    this.page = page;
    this.teamsList = page.getByTestId('teams-list');
    this.createTeamBtn = page.getByTestId('#create-team-btn');
  }

  async navigate() {
    await this.page.goto('http://127.0.0.1:5500/teamsync-app/index.html', { waitUntil: 'load' });
  }

  async getHeaderText() {
    return this.page.textContent('h1');
  }

  async clickCreateTeam() {
    await this.page.click('#create-team-btn');
  }

  
 async expectTeamVisible(teamName: string) {
    await expect(this.teamsList).toContainText(teamName);
  }


  teamLinkByName(teamName: string) {
    return this.page.locator('#teamsList a', { hasText: teamName });
  }
}
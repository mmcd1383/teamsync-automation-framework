import { Page, Locator, expect } from '@playwright/test';

export class TeamSyncHomePage{
  private deleteTeamBtn: Locator;
  private page: Page;
  private teamsList: Locator;
  private createTeamBtn: Locator; 

  
  constructor( page: Page) {
    this.page = page;
    this.teamsList = page.getByTestId('teams-list');
    this.createTeamBtn = page.getByTestId('create-team-btn');
    this.deleteTeamBtn = page.getByTestId('delete-team-btn');
  }

  async navigate() {
    await this.page.goto('/'), { waitUntil: 'load' };
  }

  async getHeaderText() {
    return this.page.textContent('h1');
  }

  async clickCreateTeam() {
    await this.page.click('#create-team-btn');
  }

  async clickDeleteTeam() {
    await this.deleteTeamBtn.click();
}

  async expectTeamVisible(teamName: string) {
    await expect(this.teamsList).toContainText(teamName);
  }

  async getTeamNames(): Promise<string[]> {
  return await this.teamsList.locator('a').allTextContents();
}


  teamLinkByName(teamName: string) {
    return this.page.locator('#teamsList a', { hasText: teamName });
  }

}
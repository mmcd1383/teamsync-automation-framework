import { Page } from '@playwright/test';

export class CreateTeamPage {
  constructor(private page: Page) {}

  async getHeaderText() {
    return this.page.textContent('h1');
  }

  async enterTeamName(name: string) {
    await this.page.fill('#team-name', name);
  }

  async saveTeam() {
    await this.page.click('#save-team-btn');
  }

  async getSaveStatus() {
    return this.page.textContent('#save-status');
  }
}
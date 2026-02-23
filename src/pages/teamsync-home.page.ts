import { Page } from '@playwright/test';

export class TeamSyncHomePage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('http://127.0.0.1:5500/teamsync-app/index.html', { waitUntil: 'load' });
  }

  async getHeaderText() {
    return this.page.textContent('h1');
  }

  async clickCreateTeam() {
    await this.page.click('#create-team-btn');
  }
}
import { Page, Locator, expect } from '@playwright/test';

export class TeamDashboardPage {
  readonly page: Page;
  readonly teamName: Locator;
  readonly navPlayers: Locator;
  readonly navCoaches: Locator;
  readonly navTraining: Locator;
  readonly navMatches: Locator;
  readonly navChat: Locator;

  constructor(page: Page) {
    this.page = page;
    this.teamName = page.locator('[data-qa="team-name"]');
    this.navPlayers = page.locator('[data-qa="nav-players"]');
    this.navCoaches = page.locator('[data-qa="nav-coaches"]');
    this.navTraining = page.locator('[data-qa="nav-training"]');
    this.navMatches = page.locator('[data-qa="nav-matches"]');
    this.navChat = page.locator('[data-qa="nav-chat"]');
  }

  async expectTeamName(name: string) {
    await expect(this.teamName).toHaveText(name);
  }

  async clickPlayers() {
    await this.navPlayers.click();
  }

  async clickCoaches() {
    await this.navCoaches.click();
  }

  async clickTraining() {
    await this.navTraining.click();
  }

  async clickMatches() {
    await this.navMatches.click();
  }

  async clickTeamChat() {
    await this.navChat.click();
  }
}
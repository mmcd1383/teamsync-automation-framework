import { Page, Locator } from '@playwright/test';

export class CreateTeamPage {
  private page: Page;
  private teamNameInput: Locator;
  private saveTeamBtn: Locator;
  private saveStatus: Locator;

  constructor(page: Page) {
    this.page = page;
    this.teamNameInput = page.getByTestId('team-name-input');
    this.saveTeamBtn = page.getByTestId('save-team-btn');
    this.saveStatus = page.getByTestId('save-status');
  }

  async getHeaderText() {
    return this.page.textContent('h1');
  }

  async enterTeamName(name: string) {
    await this.teamNameInput.fill(name);
  }

  async saveTeam() {
    await this.saveTeamBtn.click();
  }

  async getSaveStatus() {
    return this.saveStatus.textContent();
  }
}
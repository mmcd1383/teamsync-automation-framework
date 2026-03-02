// src/pages/PlayersPage.ts
import { Page, Locator, expect } from '@playwright/test';

export class PlayersPage {
  readonly page: Page;

  // Header + navigation
  readonly teamHeader: Locator;
  readonly backButton: Locator;

  // Form inputs
  readonly nameInput: Locator;
  readonly numberInput: Locator;
  readonly positionInput: Locator;
  readonly addButton: Locator;

  // Players list
  readonly playersList: Locator;

  constructor(page: Page) {
    this.page = page;

    // Page elements
    this.teamHeader   = page.getByTestId('team-header');
    this.backButton   = page.getByTestId('back-btn');

    this.nameInput     = page.getByTestId('player-name-input');
    this.numberInput   = page.getByTestId('player-number-input');
    this.positionInput = page.getByTestId('player-position-input');
    this.addButton     = page.getByTestId('add-player-btn');

    this.playersList  = page.getByTestId('players-list');
  }

  /**
   * Navigate directly to players page (optional).
   * Normally you would navigate from the dashboard instead.
   */
  async goto(teamId: string) {
    await this.page.goto(`/teamsync-app/players.html?id=${encodeURIComponent(teamId)}`);
  }

  async assertTeamName(expected: string) {
    await expect(this.teamHeader).toHaveText(expected);
  }

  async addPlayer(name: string, number?: number, position?: string) {
    await this.nameInput.fill(name);
    if (number !== undefined) await this.numberInput.fill(String(number));
    if (position) await this.positionInput.fill(position);

    await this.addButton.click();

    // Ensure it appears in the list
    await expect(this.playersList).toContainText(name);
  }

  async deletePlayerByName(name: string) {
    const item = this.page.locator('[data-testid^="player-item-"]', {
      hasText: name,
    }).first();

    const deleteBtn = item.getByRole('button', { name: /delete/i });

    await deleteBtn.click();

    await expect(this.playersList).not.toContainText(name);
  }

  async backToDashboard() {
    await this.backButton.click();
  }
}
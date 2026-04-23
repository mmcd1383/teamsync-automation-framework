import { Page, Locator, expect } from '@playwright/test';

export class DeleteTeamPage {
  readonly page: Page;

  readonly backToHomeButton: Locator;

  // Team list
  readonly deleteTeamsList: Locator;
  readonly teamItems: Locator;

  // Modal
  readonly confirmationModal: Locator;
  readonly confirmYesButton: Locator;
  readonly confirmNoButton: Locator;

  // Success message
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.backToHomeButton = page.locator('[data-qa="back-to-home-btn"]');

    // Team list
    this.deleteTeamsList = page.locator('[data-qa="delete-teams-list"]');
    this.teamItems = page.locator('[data-qa="delete-team-item"]');

    // Modal
    this.confirmationModal = page.locator('#delete-confirmation-modal');
    this.confirmYesButton = page.locator('[data-qa="confirm-delete-yes"]');
    this.confirmNoButton = page.locator('[data-qa="confirm-delete-no"]');

    // Success message
    this.successMessage = page.locator('#delete-success-message');
  }

  async goTo() {
    await this.page.goto('delete-team.html');
  }

  async clickBackToHome() {
    await this.backToHomeButton.click();
  }

  async selectTeamByName(teamName: string) {
    await this.page
      .locator('[data-qa="delete-team-item"]', { hasText: teamName })
      .click();
  }

  async confirmDeletion() {
    await expect(this.confirmationModal).toBeVisible();
    await this.confirmYesButton.click();
  }

  async cancelDeletion() {
    await expect(this.confirmationModal).toBeVisible();
    await this.confirmNoButton.click();
  }

  async expectTeamVisible(teamName: string) {
    await expect(
      this.page.locator('[data-qa="delete-team-item"]', { hasText: teamName })
    ).toBeVisible();
  }

  async expectTeamNotVisible(teamName: string) {
    await expect(
      this.page.locator('[data-qa="delete-team-item"]', { hasText: teamName })
    ).not.toBeVisible();
  }

  async expectNoTeamsMessage() {
    await expect(this.deleteTeamsList).toHaveText(
      'No teams available to delete.'
    );
  }

  async expectSuccessMessageVisible() {
    await expect(this.successMessage).toBeVisible();
    await expect(this.successMessage).toContainText(
      'Team deleted successfully'
    );
  }
}
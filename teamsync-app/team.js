// teamsync-app/team.js
import { getTeamIdFromUrl, loadTeam } from './common.js';

function renderTeamDashboard() {
  const teamId = getTeamIdFromUrl();
  const team = loadTeam(teamId);
  const nameEl = document.querySelector('[data-qa="team-name"]');

  if (!team) {
    if (nameEl) nameEl.textContent = 'Team not found';
    return;
  }

  if (nameEl) nameEl.textContent = team.name;

  // Wire the nav links to include ?id=<teamId>
  const linkMap = {
    'nav-players':  `players.html?id=${teamId}`,
    'nav-coaches':  `coaches.html?id=${teamId}`,
    'nav-training': `training.html?id=${teamId}`,
    'nav-matches':  `matches.html?id=${teamId}`,
    'nav-chat':     `chat.html?id=${teamId}`,
  };

  Object.entries(linkMap).forEach(([qa, href]) => {
    const el = document.querySelector(`[data-qa="${qa}"]`);
    if (el) el.setAttribute('href', href);
  });
}

renderTeamDashboard();
``
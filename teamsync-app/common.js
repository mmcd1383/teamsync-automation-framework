// teamsync-app/common.js
export function getTeamIdFromUrl() {
  return new URLSearchParams(window.location.search).get('id');
}

export function loadTeam(teamId) {
  const teams = JSON.parse(localStorage.getItem('teams') || '[]');
  return teams.find(t => t.id === teamId);
}

export function setHeaderWithTeamName(headerSelector, fallback = 'Team not found') {
  const teamId = getTeamIdFromUrl();
  const team = loadTeam(teamId);
  const el = document.querySelector(headerSelector);
  if (!el) return { teamId, team: null };

  if (!team) {
    el.textContent = fallback;
    return { teamId, team: null };
  }

  el.textContent = team.name;
  return { teamId, team };
}

export function setBackLink(selector, teamId) {
  const link = document.querySelector(selector);
  if (link) link.href = `team.html?id=${teamId}`;
}
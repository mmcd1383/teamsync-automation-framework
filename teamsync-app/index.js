// teamsync-app/index.js

(function renderTeamsList() {
  const teams = JSON.parse(localStorage.getItem('teams') || '[]');
  const list = document.querySelector('[data-qa="teams-list"]');
  if (!list) return;

  list.innerHTML = '';
  teams.forEach(team => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = team.name;
    a.href = `team.html?id=${team.id}`;
    a.setAttribute('data-qa', 'team-link');
    li.appendChild(a);
    list.appendChild(li);
  });
})();
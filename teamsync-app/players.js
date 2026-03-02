// teamsync-app/players.js
// This file powers the Players page: add/list/delete players for a team.

import {
  getTeamIdFromQuery,
  getTeam,
  setHeaderTeamName,
  ensureArray,
  writeJSON,
  readJSON,
  uid,
  backToTeam
} from './common.js';

const STATE = { teamId: null };

function storageKey(teamId) {
  return `team:${teamId}:players`;
}

function render(players) {
  const list = document.querySelector('[data-testid="players-list"]');
  list.innerHTML = '';

  if (!players.length) {
    const li = document.createElement('li');
    li.textContent = 'No players yet.';
    li.setAttribute('data-testid', 'players-empty');
    list.appendChild(li);
    return;
  }

  players.forEach(p => {
    const li = document.createElement('li');
    li.setAttribute('data-testid', `player-item-${p.id}`);

    const number = (p.number ?? '') === '' ? '' : `#${p.number} `;
    const position = p.position ? ` — ${p.position}` : '';

    const nameSpan = document.createElement('span');
    nameSpan.textContent = `${number}${p.name}${position}`;

    const delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.textContent = 'Delete';
    delBtn.setAttribute('aria-label', `Delete ${p.name}`);
    delBtn.dataset.action = 'delete';
    delBtn.dataset.id = p.id;

    li.appendChild(nameSpan);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

function loadAndRender() {
  const key = storageKey(STATE.teamId);
  const players = ensureArray(key);
  render(players);
}

function addPlayerFromForm(form) {
  const fd = new FormData(form);
  const name = fd.get('name')?.toString().trim();
  if (!name) return;

  const numberStr = fd.get('number')?.toString().trim();
  const number = numberStr ? Number(numberStr) : undefined;
  const position = fd.get('position')?.toString().trim() || undefined;

  const key = storageKey(STATE.teamId);
  const players = readJSON(key, []);
  players.push({ id: uid('player'), name, number, position });
  writeJSON(key, players);

  form.reset();
  form.querySelector('[data-testid="player-name-input"]').focus();
  loadAndRender();
}

function deletePlayerById(id) {
  const key = storageKey(STATE.teamId);
  const players = readJSON(key, []);
  const next = players.filter(p => p.id !== id);
  writeJSON(key, next);
  loadAndRender();
}

function wireEvents() {
  // Back button
  document.querySelector('[data-testid="back-btn"]')
    .addEventListener('click', () => backToTeam(STATE.teamId));

  // Add form
  const form = document.querySelector('[data-testid="player-form"]');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addPlayerFromForm(form);
  });

  // Delete buttons (event delegation)
  document.querySelector('[data-testid="players-list"]')
    .addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-action="delete"]');
      if (!btn) return;
      deletePlayerById(btn.dataset.id);
    });
}

(function init() {
  try {
    STATE.teamId = getTeamIdFromQuery();
  } catch (err) {
    alert('Missing team id');
    return;
  }

  const team = getTeam(STATE.teamId);
  if (!team) {
    alert('Team not found');
    return;
  }

  setHeaderTeamName(team);
  wireEvents();
  loadAndRender();
})();
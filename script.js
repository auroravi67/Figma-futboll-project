/* ======================================================
   script.js
   All the vanilla JS logic for the site lives here.
   Each function checks if the element it needs to fill
   actually exists on the current page before running.
   ====================================================== */

// Helper: "flag + country name" markup
function teamLabel(flag, name) {
  return `<span class="team-name"><span>${flag}</span><span>${name}</span></span>`;
}

// Helper: build fire emoji string based on heat level (1-5)
function heatFlames(level) {
  const labels = ["", "🔥", "🔥🔥", "🔥🔥🔥", "🔥🔥🔥🔥", "🔥🔥🔥🔥🔥"];
  const names  = ["", "Warm", "Heating Up", "Hot", "Very Hot", "ON FIRE"];
  return `<span class="heat-badge heat-${level}" title="${names[level]}">${labels[level]}</span>`;
}

/* ----------------------------------------------------
   STANDINGS / TABLE PAGE
   ---------------------------------------------------- */
function renderGroups() {
  const container = document.getElementById("groupsContainer");
  if (!container) return;

  const matchdayBox = document.getElementById("matchdayInfo");
  if (matchdayBox) matchdayBox.textContent = groupStageWindow;

  let html = "";
  groupsData.forEach(function (group) {
    html += `<div class="group-card"><h3>Group ${group.group}</h3>`;
    html += `<table><thead><tr>
      <th>#</th><th>Country</th>
      <th class="num">Pld</th><th class="num">GD</th><th class="num">Pts</th>
    </tr></thead><tbody>`;
    group.teams.forEach(function (team) {
      html += `<tr class="${team.status}">
        <td>${team.pos}</td>
        <td>${team.flag} ${team.country}</td>
        <td class="num">${team.played}</td>
        <td class="num">${team.gd > 0 ? "+" + team.gd : team.gd}</td>
        <td class="num">${team.pts}</td>
      </tr>`;
    });
    html += `</tbody></table></div>`;
  });
  container.innerHTML = html;
}

/* ----------------------------------------------------
   MATCH CARD BUILDER (shared by Matches + Bracket pages)
   ---------------------------------------------------- */
function buildMatchCard(match) {
  const team1Winner = match.winner === match.team1 ? "winner" : "";
  const team2Winner = match.winner === match.team2 ? "winner" : "";

  let scoreLine = "";
  if (match.extraTime) {
    const penWinner = match.team2 === match.winner ? match.team2 : match.team1;
    scoreLine = `<div class="match-note">Full time / Extra time, then ${penWinner} win on penalties ${match.penalties}</div>`;
  }

  return `
    <div class="match-card">
      <div class="match-meta">
        <span class="round-tag">${match.round}${match.half ? " · " + match.half : ""}</span>
        <span>${match.date} — ${match.venue}</span>
      </div>
      <div class="team-row ${team1Winner}">
        ${teamLabel(match.flag1, match.team1)}
        <span class="score">${match.score1}</span>
      </div>
      <div class="team-row ${team2Winner}">
        ${teamLabel(match.flag2, match.team2)}
        <span class="score">${match.score2}</span>
      </div>
      ${scoreLine}
      ${match.note ? `<div class="match-note">${match.note}</div>` : ""}
    </div>
  `;
}

/* ----------------------------------------------------
   MATCHES PAGE
   ---------------------------------------------------- */
function renderMatches() {
  const container = document.getElementById("matchesContainer");
  if (!container) return;

  const filterSelect = document.getElementById("roundFilter");
  const chosenRound = filterSelect ? filterSelect.value : "all";

  const filtered = matchesData.filter(function (match) {
    return chosenRound === "all" || match.round === chosenRound;
  });

  container.innerHTML = filtered.map(buildMatchCard).join("");
}

/* ----------------------------------------------------
   PREDICTIONS / BRACKET PAGE
   ---------------------------------------------------- */
function renderBracket() {
  const container = document.getElementById("bracketContainer");
  if (!container) return;

  let html = `<div class="bracket-row">`;
  roundOrder.forEach(function (roundName) {
    const matchesInRound = matchesData.filter(function (m) { return m.round === roundName; });
    html += `<div class="bracket-round"><h3>${roundName}</h3>`;
    matchesInRound.forEach(function (match) { html += buildMatchCard(match); });
    html += `</div>`;
  });
  html += `</div>`;
  container.innerHTML = html;

  const finalMatch = matchesData.find(function (m) { return m.round === "Final"; });
  const championBox = document.getElementById("championBanner");
  if (finalMatch && championBox) {
    championBox.innerHTML = `
      <div class="trophy">🏆</div>
      <h2>${finalMatch.winner === finalMatch.team1 ? finalMatch.flag1 : finalMatch.flag2} ${finalMatch.winner} — 2026 WORLD CUP CHAMPIONS</h2>
      <p>${finalMatch.note || ""}</p>
    `;
  }
}

/* ----------------------------------------------------
   NEWS PAGE
   ---------------------------------------------------- */
function renderNews() {
  const container = document.getElementById("newsContainer");
  if (!container) return;

  // Filter by active category
  const activeBtn = document.querySelector(".news-filter-btn.active");
  const activeFilter = activeBtn ? activeBtn.dataset.filter : "all";

  // Filter by heat level
  const heatSelect = document.getElementById("heatFilter");
  const minHeat = heatSelect ? parseInt(heatSelect.value) : 1;

  const filtered = newsData.filter(function (item) {
    const catMatch = activeFilter === "all" || item.tag === activeFilter;
    const heatMatch = item.heat >= minHeat;
    return catMatch && heatMatch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="news-empty">No stories match your filters right now. Try changing the heat level or category.</div>`;
    return;
  }

  // Sort by heat descending, then by id descending (newest first within same heat)
  filtered.sort(function (a, b) { return b.heat - a.heat || b.id - a.id; });

  // First item is the hero card if heat >= 4
  let html = "";
  const hero = filtered[0];
  if (hero.heat >= 4) {
    html += buildNewsHero(hero);
    const rest = filtered.slice(1);
    if (rest.length > 0) {
      html += `<div class="news-grid">`;
      rest.forEach(function (item) { html += buildNewsCard(item); });
      html += `</div>`;
    }
  } else {
    html += `<div class="news-grid">`;
    filtered.forEach(function (item) { html += buildNewsCard(item); });
    html += `</div>`;
  }

  container.innerHTML = html;
}

function buildNewsHero(item) {
  return `
    <div class="news-hero heat-card-${item.heat}">
      <div class="news-hero-inner">
        <div class="news-hero-left">
          <div class="news-flag-big">${item.flag}</div>
        </div>
        <div class="news-hero-right">
          <div class="news-top-row">
            <span class="news-category-badge">${item.category}</span>
            ${heatFlames(item.heat)}
            <span class="news-tag">${item.tag}</span>
          </div>
          <h2 class="news-hero-title">${item.title}</h2>
          <p class="news-hero-summary">${item.summary}</p>
          <div class="news-meta">${item.date} · ${item.team}</div>
        </div>
      </div>
    </div>
  `;
}

function buildNewsCard(item) {
  return `
    <div class="news-card heat-card-${item.heat}">
      <div class="news-top-row">
        <span class="news-category-badge">${item.category}</span>
        ${heatFlames(item.heat)}
      </div>
      <div class="news-card-flag">${item.flag}</div>
      <h3 class="news-card-title">${item.title}</h3>
      <p class="news-card-summary">${item.summary}</p>
      <div class="news-meta">${item.date} · <span class="news-tag-inline">${item.tag}</span></div>
    </div>
  `;
}

/* ----------------------------------------------------
   FAVORITES PAGE
   ---------------------------------------------------- */
function getFavorites() {
  try {
    const saved = localStorage.getItem("futboll_favorites");
    return saved ? JSON.parse(saved) : defaultFavorites.map(function(f) { return f.id; });
  } catch(e) {
    return defaultFavorites.map(function(f) { return f.id; });
  }
}

function saveFavorites(ids) {
  try { localStorage.setItem("futboll_favorites", JSON.stringify(ids)); } catch(e) {}
}

function renderFavorites() {
  const container = document.getElementById("favoritesContainer");
  if (!container) return;

  const savedIds = getFavorites();

  // Build a lookup of all teams from groupsData
  const allTeams = [];
  groupsData.forEach(function(group) {
    group.teams.forEach(function(team) {
      allTeams.push({
        id: team.country.toLowerCase().replace(/\s+/g, "-"),
        name: team.country,
        flag: team.flag,
        group: group.group,
        pts: team.pts,
        status: team.status,
        heat: team.pts >= 9 ? 5 : team.pts >= 7 ? 4 : team.pts >= 5 ? 3 : team.pts >= 3 ? 2 : 1
      });
    });
  });

  const favTeams = allTeams.filter(function(t) { return savedIds.indexOf(t.id) !== -1; });
  const otherTeams = allTeams.filter(function(t) { return savedIds.indexOf(t.id) === -1; });

  let html = "";

  if (favTeams.length === 0) {
    html += `<div class="fav-empty">No favorites yet! Add teams from the list below.</div>`;
  } else {
    html += `<div class="fav-grid">`;
    favTeams.forEach(function(team) {
      html += buildFavCard(team, true);
    });
    html += `</div>`;
  }

  // All-teams section
  html += `<h2 class="fav-section-title">All Teams — Add to Favorites</h2>`;
  html += `<div class="fav-all-grid">`;
  otherTeams.forEach(function(team) {
    html += buildFavCard(team, false);
  });
  html += `</div>`;

  container.innerHTML = html;

  // Wire up buttons
  container.querySelectorAll("[data-fav-toggle]").forEach(function(btn) {
    btn.addEventListener("click", function() {
      const id = btn.dataset.favToggle;
      const action = btn.dataset.action;
      const current = getFavorites();
      let updated;
      if (action === "remove") {
        updated = current.filter(function(x) { return x !== id; });
      } else {
        if (current.indexOf(id) === -1) current.push(id);
        updated = current;
      }
      saveFavorites(updated);
      renderFavorites();
    });
  });
}

function buildFavCard(team, isFav) {
  const heatLabel = ["", "Warm", "Heating Up", "Hot", "Very Hot", "ON FIRE"][team.heat] || "";
  const flames = ["", "🔥", "🔥🔥", "🔥🔥🔥", "🔥🔥🔥🔥", "🔥🔥🔥🔥🔥"][team.heat] || "";

  if (isFav) {
    return `
      <div class="fav-card heat-card-${team.heat}">
        <div class="fav-card-top">
          <span class="fav-flag">${team.flag}</span>
          <div class="fav-flames" title="${heatLabel}">${flames}</div>
        </div>
        <div class="fav-card-name">${team.name}</div>
        <div class="fav-card-meta">Group ${team.group} · ${team.pts} pts</div>
        <div class="fav-status ${team.status}">${statusLabel(team.status)}</div>
        <button class="fav-remove-btn" data-fav-toggle="${team.id}" data-action="remove">★ Remove</button>
      </div>
    `;
  } else {
    return `
      <div class="fav-mini-card">
        <span class="fav-mini-flag">${team.flag}</span>
        <span class="fav-mini-name">${team.name}</span>
        <button class="fav-add-btn" data-fav-toggle="${team.id}" data-action="add">+ Fav</button>
      </div>
    `;
  }
}

function statusLabel(status) {
  if (status === "qualified") return "✅ Qualified";
  if (status === "wildcard")  return "🌟 Wildcard";
  return "❌ Eliminated";
}

/* ----------------------------------------------------
   COUNTRIES TO WATCH — scroll-reveal animation
   Fades + slides each spotlight card into view as the
   user scrolls down the Favorites page.
   ---------------------------------------------------- */
function revealCountryCards() {
  const cards = document.querySelectorAll(".ctw-card");
  if (!cards.length) return;

  if (!("IntersectionObserver" in window)) {
    // Fallback for very old browsers: just show everything.
    cards.forEach(function (card) { card.classList.add("in-view"); });
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(function (card, index) {
    card.style.transitionDelay = (index * 70) + "ms";
    observer.observe(card);
  });
}

/* ----------------------------------------------------
   Run everything once the page has loaded.
   ---------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  renderGroups();
  renderMatches();
  renderBracket();
  renderNews();
  renderFavorites();
  revealCountryCards();

  // Round filter on Matches page
  const filterSelect = document.getElementById("roundFilter");
  if (filterSelect) filterSelect.addEventListener("change", renderMatches);

  // Category filter buttons on News page
  document.querySelectorAll(".news-filter-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
      document.querySelectorAll(".news-filter-btn").forEach(function(b) { b.classList.remove("active"); });
      btn.classList.add("active");
      renderNews();
    });
  });

  // Heat filter on News page
  const heatFilter = document.getElementById("heatFilter");
  if (heatFilter) heatFilter.addEventListener("change", renderNews);
});

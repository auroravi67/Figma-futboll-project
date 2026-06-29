/* ======================================================
   data.js
   This file just stores all our World Cup 2026 data
   in plain arrays/objects. Keeping data separate from
   the logic (script.js) makes it way easier to edit.
   ====================================================== */

const groupStageWindow = "Group Stage: June 11 \u2013 June 27, 2026  \u00b7  Matchday 1: Jun 11\u201317  \u00b7  Matchday 2: Jun 18\u201323  \u00b7  Matchday 3: Jun 24\u201327";

const groupsData = [
  { group: "A", teams: [
    { pos: 1, country: "Mexico",        flag: "🇲🇽", played: 3, gd: 5,  pts: 7, status: "qualified" },
    { pos: 2, country: "South Korea",   flag: "🇰🇷", played: 3, gd: 2,  pts: 5, status: "qualified" },
    { pos: 3, country: "Czech Republic",flag: "🇨🇿", played: 3, gd: -1, pts: 3, status: "out" },
    { pos: 4, country: "South Africa",  flag: "🇿🇦", played: 3, gd: -6, pts: 1, status: "out" },
  ]},
  { group: "B", teams: [
    { pos: 1, country: "Canada",        flag: "🇨🇦", played: 3, gd: 4,  pts: 7, status: "qualified" },
    { pos: 2, country: "Switzerland",   flag: "🇨🇭", played: 3, gd: 2,  pts: 6, status: "qualified" },
    { pos: 3, country: "Bosnia and Herzegovina", flag: "🇧🇦", played: 3, gd: -1, pts: 3, status: "out" },
    { pos: 4, country: "Qatar",         flag: "🇶🇦", played: 3, gd: -5, pts: 0, status: "out" },
  ]},
  { group: "C", teams: [
    { pos: 1, country: "Brazil",        flag: "🇧🇷", played: 3, gd: 6,  pts: 9, status: "qualified" },
    { pos: 2, country: "Morocco",       flag: "🇲🇦", played: 3, gd: 3,  pts: 6, status: "qualified" },
    { pos: 3, country: "Haiti",         flag: "🇭🇹", played: 3, gd: -2, pts: 3, status: "out" },
    { pos: 4, country: "Scotland",      flag: "🏴", played: 3, gd: -7, pts: 1, status: "out" },
  ]},
  { group: "D", teams: [
    { pos: 1, country: "United States", flag: "🇺🇸", played: 3, gd: 5,  pts: 7, status: "qualified" },
    { pos: 2, country: "Türkiye",       flag: "🇹🇷", played: 3, gd: 2,  pts: 5, status: "qualified" },
    { pos: 3, country: "Australia",     flag: "🇦🇺", played: 3, gd: 0,  pts: 4, status: "wildcard" },
    { pos: 4, country: "Paraguay",      flag: "🇵🇾", played: 3, gd: -7, pts: 1, status: "out" },
  ]},
  { group: "E", teams: [
    { pos: 1, country: "Germany",       flag: "🇩🇪", played: 3, gd: 7,  pts: 9, status: "qualified" },
    { pos: 2, country: "Ecuador",       flag: "🇪🇨", played: 3, gd: 1,  pts: 5, status: "qualified" },
    { pos: 3, country: "Ivory Coast",   flag: "🇨🇮", played: 3, gd: -1, pts: 3, status: "out" },
    { pos: 4, country: "Curaçao",       flag: "🇨🇼", played: 3, gd: -7, pts: 0, status: "out" },
  ]},
  { group: "F", teams: [
    { pos: 1, country: "Netherlands",   flag: "🇳🇱", played: 3, gd: 5,  pts: 7, status: "qualified" },
    { pos: 2, country: "Sweden",        flag: "🇸🇪", played: 3, gd: 2,  pts: 6, status: "qualified" },
    { pos: 3, country: "Japan",         flag: "🇯🇵", played: 3, gd: -1, pts: 4, status: "wildcard" },
    { pos: 4, country: "Tunisia",       flag: "🇹🇳", played: 3, gd: -6, pts: 1, status: "out" },
  ]},
  { group: "G", teams: [
    { pos: 1, country: "Egypt",         flag: "🇪🇬", played: 3, gd: 3,  pts: 6, status: "qualified" },
    { pos: 2, country: "Belgium",       flag: "🇧🇪", played: 3, gd: 2,  pts: 6, status: "qualified" },
    { pos: 3, country: "Iran",          flag: "🇮🇷", played: 3, gd: -1, pts: 4, status: "wildcard" },
    { pos: 4, country: "New Zealand",   flag: "🇳🇿", played: 3, gd: -4, pts: 1, status: "out" },
  ]},
  { group: "H", teams: [
    { pos: 1, country: "Spain",         flag: "🇪🇸", played: 3, gd: 8,  pts: 9, status: "qualified" },
    { pos: 2, country: "Uruguay",       flag: "🇺🇾", played: 3, gd: 1,  pts: 5, status: "qualified" },
    { pos: 3, country: "Saudi Arabia",  flag: "🇸🇦", played: 3, gd: -2, pts: 4, status: "wildcard" },
    { pos: 4, country: "Cabo Verde",    flag: "🇨🇻", played: 3, gd: -7, pts: 0, status: "out" },
  ]},
  { group: "I", teams: [
    { pos: 1, country: "France",        flag: "🇫🇷", played: 3, gd: 9,  pts: 9, status: "qualified" },
    { pos: 2, country: "Norway",        flag: "🇳🇴", played: 3, gd: 4,  pts: 7, status: "qualified" },
    { pos: 3, country: "Senegal",       flag: "🇸🇳", played: 3, gd: -1, pts: 4, status: "wildcard" },
    { pos: 4, country: "Iraq",          flag: "🇮🇶", played: 3, gd: -11,pts: 0, status: "out" },
  ]},
  { group: "J", teams: [
    { pos: 1, country: "Argentina",     flag: "🇦🇷", played: 3, gd: 7,  pts: 9, status: "qualified" },
    { pos: 2, country: "Austria",       flag: "🇦🇹", played: 3, gd: 1,  pts: 5, status: "qualified" },
    { pos: 3, country: "Algeria",       flag: "🇩🇿", played: 3, gd: -2, pts: 4, status: "wildcard" },
    { pos: 4, country: "Jordan",        flag: "🇯🇴", played: 3, gd: -6, pts: 1, status: "out" },
  ]},
  { group: "K", teams: [
    { pos: 1, country: "Colombia",      flag: "🇨🇴", played: 3, gd: 4,  pts: 7, status: "qualified" },
    { pos: 2, country: "Portugal",      flag: "🇵🇹", played: 3, gd: 3,  pts: 6, status: "qualified" },
    { pos: 3, country: "Uzbekistan",    flag: "🇺🇿", played: 3, gd: -3, pts: 4, status: "wildcard" },
    { pos: 4, country: "DR Congo",      flag: "🇨🇩", played: 3, gd: -4, pts: 1, status: "out" },
  ]},
  { group: "L", teams: [
    { pos: 1, country: "England",       flag: "🇬🇧", played: 3, gd: 5,  pts: 7, status: "qualified" },
    { pos: 2, country: "Croatia",       flag: "🇭🇷", played: 3, gd: 2,  pts: 5, status: "qualified" },
    { pos: 3, country: "Ghana",         flag: "🇬🇭", played: 3, gd: -2, pts: 4, status: "wildcard" },
    { pos: 4, country: "Panama",        flag: "🇵🇦", played: 3, gd: -5, pts: 1, status: "out" },
  ]},
];

const matchesData = [
  { id: 73, round: "Round of 32", half: "Bracket Top", date: "Jun 28, 2026", venue: "BC Place, Vancouver",
    team1: "South Korea", flag1: "🇰🇷", score1: 1, team2: "Canada", flag2: "🇨🇦", score2: 2, winner: "Canada" },
  { id: 74, round: "Round of 32", half: "Bracket Top", date: "Jun 28, 2026", venue: "Lumen Field, Seattle",
    team1: "Germany", flag1: "🇩🇪", score1: 3, team2: "Japan", flag2: "🇯🇵", score2: 0, winner: "Germany", note: "3rd-place wildcard" },
  { id: 75, round: "Round of 32", half: "Bracket Top", date: "Jun 28, 2026", venue: "Levi's Stadium, Bay Area",
    team1: "Netherlands", flag1: "🇳🇱", score1: 2, team2: "Morocco", flag2: "🇲🇦", score2: 1, winner: "Netherlands" },
  { id: 76, round: "Round of 32", half: "Bracket Top", date: "Jun 29, 2026", venue: "Hard Rock Stadium, Miami",
    team1: "Brazil", flag1: "🇧🇷", score1: 3, team2: "Sweden", flag2: "🇸🇪", score2: 1, winner: "Brazil" },
  { id: 77, round: "Round of 32", half: "Bracket Top", date: "Jun 29, 2026", venue: "Mercedes-Benz Stadium, Atlanta",
    team1: "France", flag1: "🇫🇷", score1: 2, team2: "Iran", flag2: "🇮🇷", score2: 0, winner: "France", note: "3rd-place wildcard" },
  { id: 78, round: "Round of 32", half: "Bracket Top", date: "Jun 29, 2026", venue: "Gillette Stadium, Boston",
    team1: "Ecuador", flag1: "🇪🇨", score1: 1, team2: "Norway", flag2: "🇳🇴", score2: 2, winner: "Norway" },
  { id: 79, round: "Round of 32", half: "Bracket Top", date: "Jun 30, 2026", venue: "Estadio Azteca, Mexico City",
    team1: "Mexico", flag1: "🇲🇽", score1: 2, team2: "Saudi Arabia", flag2: "🇸🇦", score2: 1, winner: "Mexico", note: "3rd-place wildcard" },
  { id: 80, round: "Round of 32", half: "Bracket Top", date: "Jun 30, 2026", venue: "AT&T Stadium, Dallas",
    team1: "England", flag1: "🇬🇧", score1: 3, team2: "Algeria", flag2: "🇩🇿", score2: 1, winner: "England", note: "3rd-place wildcard" },
  { id: 81, round: "Round of 32", half: "Bracket Bottom", date: "Jun 30, 2026", venue: "Lincoln Financial Field, Philadelphia",
    team1: "United States", flag1: "🇺🇸", score1: 2, team2: "Senegal", flag2: "🇸🇳", score2: 1, winner: "United States", note: "3rd-place wildcard" },
  { id: 82, round: "Round of 32", half: "Bracket Bottom", date: "Jul 1, 2026", venue: "NRG Stadium, Houston",
    team1: "Belgium", flag1: "🇧🇪", score1: 2, team2: "Ghana", flag2: "🇬🇭", score2: 0, winner: "Belgium", note: "3rd-place wildcard" },
  { id: 83, round: "Round of 32", half: "Bracket Bottom", date: "Jul 1, 2026", venue: "Arrowhead Stadium, Kansas City",
    team1: "Portugal", flag1: "🇵🇹", score1: 2, team2: "Croatia", flag2: "🇭🇷", score2: 1, winner: "Portugal" },
  { id: 84, round: "Round of 32", half: "Bracket Bottom", date: "Jul 1, 2026", venue: "SoFi Stadium, Los Angeles",
    team1: "Spain", flag1: "🇪🇸", score1: 3, team2: "Austria", flag2: "🇦🇹", score2: 0, winner: "Spain" },
  { id: 85, round: "Round of 32", half: "Bracket Bottom", date: "Jul 2, 2026", venue: "BMO Field, Toronto",
    team1: "Switzerland", flag1: "🇨🇭", score1: 1, team2: "Uzbekistan", flag2: "🇺🇿", score2: 0, winner: "Switzerland", note: "3rd-place wildcard" },
  { id: 86, round: "Round of 32", half: "Bracket Bottom", date: "Jul 2, 2026", venue: "Estadio BBVA, Monterrey",
    team1: "Argentina", flag1: "🇦🇷", score1: 2, team2: "Uruguay", flag2: "🇺🇾", score2: 0, winner: "Argentina" },
  { id: 87, round: "Round of 32", half: "Bracket Bottom", date: "Jul 3, 2026", venue: "Estadio Akron, Guadalajara",
    team1: "Colombia", flag1: "🇨🇴", score1: 2, team2: "Australia", flag2: "🇦🇺", score2: 1, winner: "Colombia", note: "3rd-place wildcard" },
  { id: 88, round: "Round of 32", half: "Bracket Bottom", date: "Jul 3, 2026", venue: "MetLife Stadium, New York/New Jersey",
    team1: "Türkiye", flag1: "🇹🇷", score1: 2, team2: "Egypt", flag2: "🇪🇬", score2: 1, winner: "Türkiye" },
  { id: 89, round: "Round of 16", date: "Jul 4, 2026", venue: "AT&T Stadium, Dallas",
    team1: "Germany", flag1: "🇩🇪", score1: 1, team2: "France", flag2: "🇫🇷", score2: 2, winner: "France", note: "Early European blockbuster" },
  { id: 90, round: "Round of 16", date: "Jul 4, 2026", venue: "SoFi Stadium, Los Angeles",
    team1: "Canada", flag1: "🇨🇦", score1: 0, team2: "Netherlands", flag2: "🇳🇱", score2: 2, winner: "Netherlands" },
  { id: 91, round: "Round of 16", date: "Jul 5, 2026", venue: "Mercedes-Benz Stadium, Atlanta",
    team1: "Brazil", flag1: "🇧🇷", score1: 3, team2: "Norway", flag2: "🇳🇴", score2: 1, winner: "Brazil" },
  { id: 92, round: "Round of 16", date: "Jul 5, 2026", venue: "Hard Rock Stadium, Miami",
    team1: "Mexico", flag1: "🇲🇽", score1: 1, team2: "England", flag2: "🇬🇧", score2: 2, winner: "England", note: "England silences the Azteca crowd" },
  { id: 93, round: "Round of 16", date: "Jul 6, 2026", venue: "Lincoln Financial Field, Philadelphia",
    team1: "Portugal", flag1: "🇵🇹", score1: 1, team2: "Spain", flag2: "🇪🇸", score2: 2, winner: "Spain", note: "Iberian derby classic" },
  { id: 94, round: "Round of 16", date: "Jul 6, 2026", venue: "Arrowhead Stadium, Kansas City",
    team1: "United States", flag1: "🇺🇸", score1: 2, team2: "Belgium", flag2: "🇧🇪", score2: 1, winner: "United States", note: "Host momentum pushes them through" },
  { id: 95, round: "Round of 16", date: "Jul 7, 2026", venue: "Estadio Azteca, Mexico City",
    team1: "Argentina", flag1: "🇦🇷", score1: 2, team2: "Türkiye", flag2: "🇹🇷", score2: 1, winner: "Argentina" },
  { id: 96, round: "Round of 16", date: "Jul 7, 2026", venue: "NRG Stadium, Houston",
    team1: "Switzerland", flag1: "🇨🇭", score1: 1, team2: "Colombia", flag2: "🇨🇴", score2: 2, winner: "Colombia" },
  { id: 97, round: "Quarterfinals", date: "Jul 9, 2026", venue: "MetLife Stadium, New York/New Jersey",
    team1: "France", flag1: "🇫🇷", score1: 2, team2: "Netherlands", flag2: "🇳🇱", score2: 1, winner: "France" },
  { id: 98, round: "Quarterfinals", date: "Jul 9, 2026", venue: "SoFi Stadium, Los Angeles",
    team1: "Spain", flag1: "🇪🇸", score1: 1, team2: "United States", flag2: "🇺🇸", score2: 0, winner: "Spain", note: "The historic run ends for the USMNT" },
  { id: 99, round: "Quarterfinals", date: "Jul 11, 2026", venue: "AT&T Stadium, Dallas",
    team1: "Brazil", flag1: "🇧🇷", score1: 2, team2: "England", flag2: "🇬🇧", score2: 1, winner: "Brazil", note: "A classic footballing rivalry goes to the Seleção" },
  { id: 100, round: "Quarterfinals", date: "Jul 11, 2026", venue: "Mercedes-Benz Stadium, Atlanta",
    team1: "Argentina", flag1: "🇦🇷", score1: 3, team2: "Colombia", flag2: "🇨🇴", score2: 1, winner: "Argentina" },
  { id: 101, round: "Semifinals", date: "Jul 14, 2026", venue: "AT&T Stadium, Dallas",
    team1: "France", flag1: "🇫🇷", score1: 2, team2: "Spain", flag2: "🇪🇸", score2: 1, winner: "France", note: "Rematch of the recent European Championship final" },
  { id: 102, round: "Semifinals", date: "Jul 15, 2026", venue: "MetLife Stadium, New York/New Jersey",
    team1: "Brazil", flag1: "🇧🇷", score1: 1, team2: "Argentina", flag2: "🇦🇷", score2: 2, winner: "Argentina", note: "Superclásico de las Américas" },
  { id: 103, round: "Third Place Playoff", date: "Jul 18, 2026", venue: "Hard Rock Stadium, Miami",
    team1: "Spain", flag1: "🇪🇸", score1: 2, team2: "Brazil", flag2: "🇧🇷", score2: 1, winner: "Spain" },
  { id: 104, round: "Final", date: "Jul 19, 2026", venue: "MetLife Stadium, New York/New Jersey",
    team1: "France", flag1: "🇫🇷", score1: 2, team2: "Argentina", flag2: "🇦🇷", score2: 2, winner: "Argentina",
    extraTime: true, penalties: "4-2", note: "Cinematic rematch of the 2022 final — Argentina win back-to-back titles!" },
];

const roundOrder = ["Round of 32", "Round of 16", "Quarterfinals", "Semifinals", "Third Place Playoff", "Final"];

// ---------- NEWS DATA ----------
// heat: 1=warm, 2=heating up, 3=hot, 4=very hot, 5=ON FIRE
const newsData = [
  {
    id: 1, heat: 5, category: "BREAKING",
    title: "Argentina Wins Back-to-Back! Messi Lifts the Trophy Again 🏆",
    summary: "In a stunning repeat of 2022, Argentina beat France on penalties in the MetLife Final. Messi, 39, becomes the first player ever to win three World Cups.",
    flag: "🇦🇷", team: "Argentina", date: "Jul 19, 2026", tag: "Final"
  },
  {
    id: 2, heat: 5, category: "DRAMA",
    title: "Superclásico Goes to Extra Time — Argentina Edge Brazil in Epic Semi",
    summary: "The most anticipated semifinal in years lived up to every expectation. Brazil pushed hard in the second half before Argentina's late winner sealed the derby.",
    flag: "🇧🇷🇦🇷", team: "Argentina vs Brazil", date: "Jul 15, 2026", tag: "Semifinal"
  },
  {
    id: 3, heat: 4, category: "UPSET",
    title: "USMNT Historic Run Ends Against Spain — But What a Ride! 🇺🇸",
    summary: "Spain's clinical 1-0 win ended the host nation's dream run. The USMNT reached the quarterfinals for the first time ever, drawing record crowds across the country.",
    flag: "🇺🇸", team: "United States", date: "Jul 9, 2026", tag: "Quarterfinal"
  },
  {
    id: 4, heat: 4, category: "RIVALRY",
    title: "France vs Spain — European Giants Collide Again in the Semis",
    summary: "A rematch of the Euro final brought back all the drama. France edged Spain 2-1 in a tactical masterclass to book their spot in the World Cup Final.",
    flag: "🇫🇷", team: "France", date: "Jul 14, 2026", tag: "Semifinal"
  },
  {
    id: 5, heat: 3, category: "STORY",
    title: "Germany Knocked Out by France — Tactical Battle of the Tournament",
    summary: "The Round of 16 clash between two European heavyweights was decided by a single moment of brilliance. France's 2-1 win was one of the best matches of the tournament.",
    flag: "🇩🇪", team: "Germany", date: "Jul 4, 2026", tag: "Round of 16"
  },
  {
    id: 6, heat: 3, category: "MILESTONE",
    title: "England Beat Mexico at the Azteca — A Historic Night in Mexico City",
    summary: "England ended Mexico's home advantage at Estadio Azteca for the first time in World Cup history, winning 2-1 in front of a stunned 87,000-strong crowd.",
    flag: "🇬🇧", team: "England", date: "Jul 5, 2026", tag: "Round of 16"
  },
  {
    id: 7, heat: 2, category: "GROUP STAGE",
    title: "Brazil Top Group C With a Perfect Nine Points",
    summary: "The Seleção looked unstoppable in the group stage, scoring 6 goals and conceding none. All eyes are now on how far they can go in the knockout rounds.",
    flag: "🇧🇷", team: "Brazil", date: "Jun 27, 2026", tag: "Group Stage"
  },
  {
    id: 8, heat: 2, category: "WILDCARDS",
    title: "Best 8 Third-Place Teams Confirmed — Surprise Inclusions!",
    summary: "Australia, Japan, Iran, Saudi Arabia, Senegal, Algeria, Ghana and Uzbekistan made the cut as the best third-place finishers, setting up some spicy Round of 32 matchups.",
    flag: "🌍", team: "Multiple", date: "Jun 27, 2026", tag: "Group Stage"
  },
  {
    id: 9, heat: 1, category: "VENUE",
    title: "MetLife Stadium Ready to Host the World Cup Final on July 19 🏟️",
    summary: "The iconic New York/New Jersey venue, with a capacity of 82,500, is set to stage the biggest match in football. Tickets are the most sought-after in sporting history.",
    flag: "🇺🇸", team: "Host", date: "Jun 11, 2026", tag: "Event Info"
  },
  {
    id: 10, heat: 1, category: "PREVIEW",
    title: "48 Teams, 16 Groups, One Dream — WC 2026 Is Officially Underway ⚽",
    summary: "For the first time in history, 48 nations compete for football's greatest prize across three host nations — USA, Canada, and Mexico. The biggest World Cup ever has begun.",
    flag: "🏆", team: "World Cup", date: "Jun 11, 2026", tag: "Event Info"
  }
];

// ---------- FAVORITES DATA ----------
const defaultFavorites = [
  { id: "arg", name: "Argentina", flag: "🇦🇷", status: "Predicted Champion", pts: 9, group: "J", heat: 5 },
  { id: "fra", name: "France",    flag: "🇫🇷", status: "Runner-up",          pts: 9, group: "I", heat: 4 },
  { id: "bra", name: "Brazil",    flag: "🇧🇷", status: "3rd Place",           pts: 9, group: "C", heat: 4 },
  { id: "esp", name: "Spain",     flag: "🇪🇸", status: "Semifinalist",        pts: 9, group: "H", heat: 3 },
  { id: "ger", name: "Germany",   flag: "🇩🇪", status: "Quarterfinalist",     pts: 9, group: "E", heat: 3 },
];

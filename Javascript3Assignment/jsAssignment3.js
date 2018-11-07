function GameConstructor(h, v) {
  this.home = h;
  this.visitor = v;
  this.homeScore = Math.round(Math.random() * 20 + 70);
  this.visitorScore = Math.round(Math.random() * 20 + 70);
  this.getSummary = function() {
    return [this.home, this.homeScore, this.visitor, this.visitorScore];
  }
}

var games = new Array();
games[0] = new GameConstructor("Rockets", "Heat");
games[1] = new GameConstructor("Lakers", "Timberwolves");
games[2] = new GameConstructor("Spurs","Warriors");
games[3] = new GameConstructor("Celtics", "Raptors");
games[4] = new GameConstructor("Cavaliers", "Knicks");
games[5] = new GameConstructor("Bulls", "Bucks");

var el1 = document.getElementById("game1");
el1.textContent = games[0].getSummary();

var el2 = document.getElementById("game2");
el2.textContent = games[1].getSummary();

var el3 = document.getElementById("game3");
el3.textContent = games[2].getSummary();

var el4 = document.getElementById("game4");
el4.textContent = games[3].getSummary();

var el5 = document.getElementById("game5");
el5.textContent = games[4].getSummary();

var el6 = document.getElementById("game6");
el6.textContent = games[5].getSummary();

const team = {
  _players: [ {firstName: 'Pablo',lastName: 'Sanchez', age: 11},
  {firstName: 'Williams', lastName: 'Smith',age: 20},
  {firstName: 'Pablo',lastName: 'Sanchez',age: 11} ],

  _games: [ { opponent: 'Broncos', teamPoints: 42, opponentPoints: 27 },
  {opponent: 'Wolves', teamPoints: 23, opponentPoints: 20},
  {opponent: 'Lions', teamPoints: 15, opponentPoints: 18} ],

get players(){
  return this._players;
},

get games(){
  return this._games;
},

addPlayer(firstName, lastName, age){
  let player = {
    firstName: firstName,
    lastName: lastName,
    age: age
  };
  this.players.push(player);
  },

addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
    };
    this.games.push(game);
  }

};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 46);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);
team.addGame('Dragon', 66, 97);
team.addGame('Beast', 88, 70);

console.log(team.players);
console.log(team.games);

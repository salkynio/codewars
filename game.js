const game = {
    team1: 'REAL MADRID',
    team2: 'BARCELONA',
    players: [
      [
        'Courtois',
        'Vazquez',
        'Militao',
        'Nacho',
        'Mendy',
        'Casemiro',
        'Valverde',
        'Modrich',
        'Kroos',
        'Vinicius',
        'Benzema',
      ],
      [
        'Stegen',
        'Mingueza',
        'Araujo',
        'Lenglet',
        'Dest',
        'Busquets',
        'Jong',
        'Alba',
        'Messi',
        'Pedri',
        'Dembele',
      ],
    ],
    score: '2:1',
    scored: ['Kroos', 'Benzema', 'Mingueza'],
    date: 'Apr 10th, 2021',
    odds: {
      team1: 1.48,
      draw: 2.53,
      team2: 4.25,
    },
   };

// 1 create a separate arrays with players for each team 
     const [players1,players2] = game.players

// 2 for team1 create one variable - first player (goalkeeper) with the name of goalkeeper and one array(fieldPlayers)
// with the all remaining 10 field players
   const [goalkeeper,...fieldPlayers] = players1;

// 3create an array allPlayers containing all players from both teams(22 players)
const allPlayers = [...players1,...players2];
// console.log(allPlayers);

// 4 REAL MADRID (team1) used 5 substitute players during the game. Create a new array (players1Total) containing all original players of team1 as well as ‘Marcelo’, 'Isco', 'Asensio', ‘Diaz' and 'Odriozola'
const players1Total = [...players1,'Marcelo','Isco','Asensio','Diaz','Odriozola'] 
console.log(players1Total);

// 5 Based on the game.odds object, create one variable for each odd (called team1, draw and team2).
// const team1 = game.odds.team1;

// const draw = game.odds.draw;
// console.log(draw);
// const team2 = game.odds.team2
// console.log(team2);
const {odds:{team1,team2,draw}} = game;
console.log(team1,team2,draw);

// 6 A write function printGoals that takes an arbitrary number of player names (NOT an array) and prints each one to the console along with the total number of goals scored (the number of player names passed to the function).

//напишите функцию printGoals, которая принимает произвольное количество имен игроков (НЕ массив) и выводит каждое из них на консоль вместе с общим количеством забитых голов (количество имен игроков, переданных в функцию).
const printGoals = function (...players){
    for (let i = 0; i <players.length; i++){
        console.log(players[i])
    }
    console.log(`${players.length} scored goals`);
}
 printGoals(...game.scored);

 // 7 The team with the lower odds will win more likely. Print to the console which team is more likely to win, WITHOUT using an if / else or ternary operator

 team1 > team2 && console.log(`${game.team1} is more likely to win`);
 team1 < team2 && console.log(`${game.team2} is more likely to win`);
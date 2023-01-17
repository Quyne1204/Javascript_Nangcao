
//Coding Challenge #1
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Davies', 'Muller', 'Lewandowski', 'Kimmich'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

  console.log(`Bai tap 1`);
//1. Tạo ra 1 mảng cầu thủ cho mỗi đội (variables 'players1' and 'players2')
const [players1, players2] = game.players;

//2. Phần tử đầu tiên trong mảng là Thủ môn, các phần tử còn lại sẽ là các cầu thủ ở
// các vị trí khác. Ví dụ, Bayern Munich (team 1) bạn sẽ tạo 1 biến ('gk') với tên của
// thủ môn, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;

//3. Tạo 1 mảng 'allPlayers' bao gồm toàn bộ 22 cầu thủ trên sân
const allPlayers = [...players1,...players2];

//4. Trong trận đấu, Bayern Munich (team 1) sử dụng 3 quyền thay người. Hãy tạo 1
// mảng mới ('players1Final') gôm các cầu thủ ban đầu của Bayern rồi thêm vào
// 'Thiago', 'Coutinho' và 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];


//5. Dựa vào object game.odds, tạo một biến thể hiện tỉ lệ kết quả trận đấu (gọi là
// 'team1', 'draw' và 'team2')
const {odds: {team1, x: draw, team2}} = game;

//6. Viết 1 hàm ('printGoals') nhận vào 1 số tên cầu thủ đã ghi bàn (sử dụng toán tử
// spread) và in ra console tên những cầu thủ đó cùng với số cầu thủ đã ghi bàn
const printGoals = function(...players){
  console.log(players);
  console.log(`${players.length} bàn thắng đã được ghi.`);
  console.log(`${players} là các cầu thủ đã ghi bàn.`);
};

// printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
// printGoals('Lewandowski', 'Gnarby');
printGoals(...game.scored);

//7. Đội có tỷ lệ chấp thấp hơn sẽ dành chiến thắng . In ra đội chiến thắng đó mà
// không sử dụng if/else hoặc toán tử 3 ngôi.
team1 < team2 && console.log('Team 1 giành chiến thắng ');
team1 > team2 && console.log('Team 2 giành chiến thắng');


console.log(`Bai tap 2`);
//1. Lặp mảng game.scored array và in ra cầu thủ cùng với số bàn thắng đã ghi (Ví
// dụ: "Goal 1: Lewandowski")
for(const [i, player] of game.scored.entries()){
  console.log(`Goal ${i + 1}: ${player}`);
};

//2. Sử dụng vòng lặp để tính tỉ lệ kết quả trận đấu và in ra console (Chúng ta đã
// học cách tính trung bình tổng ở phần trước, các bạn có thể xem lại nếu không
// nhớ)
const odds = Object.values(game.odds);
let average = 0;
for(const odd of odds){
  average += odd;
}
average /= odds.length;
console.log(average);

//3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// Tỉ lệ thắng của Bayern Munich: 1.33
// Tỉ lệ hòa of draw: 3.25
// Tỉ lệ thắng của Borrussia Dortmund: 6.5
// Lấy ra tên đội bóng trực tiếp từ object 'game', bạn không nên "hardcode" tỉ lệ
// thắng của mỗi đội (ngoại trừ trường hợp 2 đội hòa nhau)
for(const [team, odd] of Object.entries(game.odds)){
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
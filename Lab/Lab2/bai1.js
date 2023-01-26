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
    scored: ['Gnarby', 'Lewandowski', 'Hummels', 'Lewandowski'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
])

console.log(`Bai tap 1`);
// 1. Hãy tạo ra 1 mảng các sự kiện khác nhau xảy ra trong suốt trận đấu(lưu ý là không trùng nhau)
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. Sau khi trò chơi kết thúc, phát hiện ra rằng thẻ vàng phút 64 là không đúng.Hãy xóa nó khỏi danh sách sự kiện trong trận đấu.
gameEvents.delete(64);

// 3. In ra console theo định dang như sau: "1 sự kiện xảy ra, trung bình mỗi 9 phút".Lưu ý răng mỗi trận đấu có 90 phút.

const time = [...gameEvents.keys()].pop();
console.log(`1 Sự kiện xảy ra, trung bình mỗi ${time / gameEvents.size} phút.`);
// 4. Lặp toàn bộ mảng sự kiện và in ra màn hình, đánh dấu đối với mỗi sự kiện trong trận đấu diễn ra trong hiệp 1 hay hiệp 2,

for (const [min, events] of gameEvents) {
    const half = min <= 45 ? 'First' : 'Second';
    console.log(`[${half} HALF] ${min}: ${events}`)
}






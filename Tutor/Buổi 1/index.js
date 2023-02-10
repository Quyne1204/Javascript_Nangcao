// Chúng ta cần có một kiểu dữ liệu để lưu trữ nhiều giá trị
const doi1 = "Arsenal";
const doi2 = "Man City";
const doi3 = "Newcastle";
const doi4 = "Man United";

// Mạng (Array)
// Array constructor
// const premierLeague = new Array("Arsenal", "Man City", "Newcastle", "Newcastle")
// Array Literal
const premierLeague = ["Arsenal", "Man City", "Newcastle", "Man United"];
// console.log(premierLeague);

// 1. Duyệt
// for (let item of premierLeague) {
//   console.log(item);
// }
// for (let index in premierLeague) {
//   console.log(index);
// }
// ForEach
// premierLeague.forEach(function(team, index) {
//   console.log(team + "-" + index);

// })
// 2. Thêm
// push
premierLeague.push("Tottenham");
// console.log(premierLeague);

// splice
const length = premierLeague.length;
premierLeague.splice(length, 1, "Liverpool");

// 3. Xoá
// Bước 1: Tìm index
// Bước 2: dùng hàm xoá
// const index = premierLeague.indexOf("Liverpool");
// Splice
// premierLeague.splice(index, 1);
// 4. Sửa
// const index = premierLeague.indexOf("Man United");
// premierLeague[index] = "MU";

// Map
// const newArray = premierLeague.map(function(team, index) {
//   if(team == "Man United") {
//     return "MU"
//   }
//   return team
// })
// console.log(newArray);
// 5. Tìm kiềm
// Find
// const team = premierLeague.find(function (team) {
//   return team.toLowerCase() == "Man city".toLowerCase();
// });
// console.log(team);
// BTVN: Tìm kiếm đội bóng sao cho chỉ cần nhập 3 chữ cái đầu
const team = premierLeague.find(function (team) {
  return team.padStart() == "Man".padStart();
});
console.log(team);
// 6. Lọc
// Filter
// const filtered = premierLeague.filter(function (team) {
//   return team == "Man City";
// });
// console.log(filtered);
// BTVN: Lọc các đội bóng sao cho chỉ cần nhập 3 chữ cái đầu

// ES5
// 1. Global scope
// var global = 10
// // 2. Local scope
// function localFn() {
//   var local = 20
//   console.log(global + local);
// }

// localFn()
// console.log(global + local);

// // ES6
// // 1. Global
// // 2. Block scope {}
// // 3. Local
// const global = 10;
// // global = 20
// let local = 20;
// {
//   let local = 50;
// }

// console.log(global + local);

// Biến: Nơi lưu trữ giá trị, biến có phạm vui hoạt động

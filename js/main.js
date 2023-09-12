// let friends = ["Nurik", "Asan", "Suyun", "Jack", "Toha"];

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);

//! Обычный for
// for (let i = 0; i < friends.length; i++) {
//   if (friends[i] === "Suyun") break;
//   console.log(friends[i]);
//   if (friends[i] === "Asan") continue;
// }

//! for of - применяется ТОЛЬКО для МАССИВОВ
//? работает С ИНДЕКСАМИ

// for (let element of friends) {
//   console.log(element);
// }

//! for in - работатет и для ОБЪЕКТОВ и для МАССИВОВ
//? работает С КЛЮЧАМИ

// let obj = {
//   name: "Igor",
//   age: 25,
//   job: "driver",
// };
// // console.log(obj.name);

// for (let key in obj) {
//   console.log(key, obj[key]);
// }

//! цикл while
// let i = 1;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

//! цикл do...while

// do {
//   console.log("Сработатет 1 раз по-любому");
// } while (i < 0);

let word = "makers";
let counter = 0;
let ugadal = false;
while (counter <= 3) {
  let answer = prompt("Угадайте слово");
  if (answer.toLowerCase() === word) {
    ugadal = true;
    alert("molodets!!!");
    break;
  }
  alert(`У тебя осталось ${3 - counter} попыток`);
  counter++;
}
if (!ugadal) {
  alert("ne molodets");
}

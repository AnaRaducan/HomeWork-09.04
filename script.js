// 1
let greutateMark = 78;
let înălțimeMark = 1.69;
let greutateJohn = 92;
let înălțimeJohn = 1.95;


let BMIMark = greutateMark / (înălțimeMark ** 2);
console.log("Mark's BIM:", BMIMark);
let BMIJohn = greutateJohn / (înălțimeJohn ** 2);
console.log("John's BIM:", BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log("Mark higher BMI", markHigherBMI);

let description = "IMC-ul lui Mark " + BMIMark + " este mai mare decât al lui John " + BMIJohn;
console.log(description);

greutateMark = 95;
înălțimeMark = 1.88;
greutateJohn = 85;
înălțimeJohn = 1.76;

BMIMark = greutateMark / (înălțimeMark ** 2);
console.log("Mark's BIM1:", BMIMark);
BMIJohn = greutateJohn / (înălțimeJohn ** 2);
console.log("John's BIM1:", BMIJohn);

markHigherBMI = BMIMark > BMIJohn;
console.log("Mark higher BMI1", markHigherBMI);

description = "IMC-ul lui John " + BMIJohn + " este mai mare decât al lui Mark " + BMIMark;
console.log(description);

// 2
let Delfini = [96, 108, 89];
let Koala = [88, 91, 110];

let scoreDolphins = (Delfini[0] + Delfini[1] + Delfini[2]) / 3;
console.log("scorul mediu Dolphins", scoreDolphins);
let scoreKoalas = (Koala[0] + Koala[1] + Koala[2] / 3);
console.log("scorul mediu Koals", scoreKoalas);

let ScorMediu = scoreDolphins < scoreKoalas;
// console.log("Echipa Koals este cistigatoare " + ScorMediu);
ScorMediu = scoreDolphins > scoreKoalas;
// console.log("Echipa Dolphins nu este cistigatoare " + ScorMediu);
console.log("Echipa Koals citiga trofeul cu scorul " + scoreKoalas + " iar echipa Delphins pierde adversarilor cu scorul " + scoreDolphins);
// 3
const bill = 430;
const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill + 0.20;
const total = bill + tip;
console.log(`nota de plata a fost ${bill}, bacsisul a fost ${tip}, iar valoarea totala ${total}`);


// 4

const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins1 = calcAverage(44, 23, 71);
const scoreKoalas1 = calcAverage(65, 54, 49);

const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Delfinii câștigă (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koala câștigă (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("Nicio echipă nu câștigă");
  }
}

checkWinner(scoreDolphins1, scoreKoalas1); 
checkWinner(scoreDolphins2, scoreKoalas2); 


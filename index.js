// Программа выводит в консоль "Привет мир"
console.log("Hello World");

//  Программа которая складывает два числа и
//   выводит в консоль результат
const plus = (a, b) => {
  console.log(a + b);
};
plus(4, 5);

// Программа которая находит максимальное число
const max = (a, b) => {
  console.log(Math.max(a, b));
};
max(10, -1);

// Программа которая определят четное число
const even = (a) => {
  console.log(a % 2 == 0);
};
even(3);

// Программа которая выводит числа от 0 до 10
const cycle = () => {
  for (i = 0; i <= 10; i++) {
    console.log(i);
  }
};
cycle();

// Программа которая выводит таблицу уножений на 5
const multi = () => {
  for (i = 0; i <= 10; i++) {
    console.log(5 * i);
  }
};
multi();

// Программа которая находит сумму чисел от 1 до 100
const sumHundred = () => {
  let count = 0;
  for (i = 0; i <= 100; i++) {
    count += i;
  }
  console.log(count);
};
sumHundred();

//Программа которая считает ФАКТОРИАЛ заданного числа
const factorial = (num) => {
  let factor = 1;
  for (i = 1; i <= num; i++) {
    factor *= i;
  }
  console.log(factor);
};
factorial(5);

//Программа которая выводит содержимое массива
//Первый вариант
let arr = [1, 2, 3, 5, { firstname: "Maks" }];
const newArr = () => {
  arr.forEach((el) => console.log(el));
};
newArr();
//Второй вариант
for (const el of arr) {
  console.log(el);
}

// Программа которая находит сумму чисел массива
//Первый вариант
let arra = [2, 3, 4, 5];
const newArra = () => {
  let count = 0;
  for (i = 0; i < arra.length; i++) {
    count += arra[i];
  }
  console.log(count);
};
newArra();
//Второй вариант
let sum = 0;
for (const el of arra) {
  sum += el;
}
console.log(sum);

//Программа которая находит кол-во положительных,
//отрицательных и нулевых чисел в массиве
const pzn = [10, 0, 14, 0, 0, -1, 1];
const whoAreYou = () => {
  let positive = 0;
  let zeros = 0;
  let negative = 0;
  for (const i of pzn) {
    if (i > 0) {
      positive++;
    } else if (i < 0) {
      negative++;
    } else zeros++;
  }
  console.log(`Положительных: ${positive}`);
  console.log(`Отрицательных: ${negative}`);
  console.log(`Нулей: ${zeros}`);
};
whoAreYou();

//Программа которая высчитывает среднее арифметическое
const sumMidl = () => {
  let count = 0;
  for (const el of arra) {
    count += el;
  }
  let midl = count / arra.length;
  console.log(midl);
};
sumMidl();

//Программа которая преобразовывает сумму чисел в бинарный код
const addBinary = (a, b) => {
  let sum = a + b;
  console.log(sum.toString(2));
};

addBinary(1, 1, 1, 1);

//Программа которая находит наименьшее и наибольшее число в массиве
const minMax = () => {
  console.log(Math.max(...arra));
  console.log(Math.min(...arra));
};

minMax();

// Программа которая удаляет все нулевые элементы
const offZero = () => {
  let result = pzn.filter((el) => el !== 0);
  console.log(result);
};

offZero();

// Программа которая проверяет есть ли заданное число в массиве
const trueNumber = () => {
  let targetNumber = 10;
  let containsNumber = pzn.includes(targetNumber);
  console.log(containsNumber);
};

trueNumber();

//Программа которая объеденяет два массива в один
const twoInOne = () => {
  console.log(arra.concat(pzn));
};

twoInOne();

//Праграмма которая находит сумму элементов на четных позициях
const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sumEven = () => {
  let count = 0;
  for(i = 0; i < arr1.length; i +=2) {
    count += arr1[i];
  }
  console.log(count);
};

sumEven();

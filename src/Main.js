console.log("Функции")
console.log("Задание 1")

// Способ 1: функция выводит сообщение с результатом
function subtractAndDisplay(a, b) {
    const result = a - b;
    console.log(`Результат : ${result}`);
}

subtractAndDisplay(10, 3);

// Способ 2: в функции выполняется разность, а сообщение с результатом выводится в основной программе
function subtractNumbers(a, b) {
    return a - b;
}

const difference = subtractNumbers(15, 4);
console.log(`Результат : ${difference}`);

console.log("")
console.log("Задание 2")
console.log("")

function greetUser(age) {
    if (age < 18) {
        console.log('Привет, малыш!');
    } else {
        console.log('Здравствуйте, юноша!');
    }
}

const userAge = 20;

greetUser(userAge);

console.log("")
console.log("Задание 3")
console.log("")

function getMax(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

const maxNumber = getMax(5, 10, 3);
console.log("Наибольшее число:", maxNumber);

console.log("")
console.log("Задание 4")
console.log("")

let variable = "Глобальная переменная";
function f() {
    let variable = "Локальная переменная";
    console.log(variable);
}
f();
console.log(variable);

//Внутри функции создаётся локальная переменная variable, которая скрывает глобальную. В console.log(variable); внутри f() выводится "Локальная переменная". После вызова f(), в console.log(variable); используется глобальная переменная "Глобальная переменная".

console.log("")
console.log("Задание 5")
console.log("")

function calculateU(x, y, z) {
    let numerator = Math.max(x, y) + Math.max(x + y, z);
    let denominator = Math.pow(Math.max(0.5, x + z), 2);
    return numerator / denominator;
}

console.log(calculateU(1, 2, 3)); // Замените числа на любые другие

console.log("")
console.log("Задание 6")
console.log("")

function polygonPerimeter(...coords) {
    if (coords.length < 6 || coords.length % 2 !== 0) {
        throw new Error("Нужно передать хотя бы 3 вершины (6 чисел), а общее количество координат должно быть чётным.");
    }

    let n = coords.length / 2;
    let perimeter = 0;

    for (let i = 0; i < n; i++) {
        let x1 = coords[2 * i],     y1 = coords[2 * i + 1];
        let x2 = coords[2 * ((i + 1) % n)], y2 = coords[2 * ((i + 1) % n) + 1];

        perimeter += Math.hypot(x2 - x1, y2 - y1);
    }

    return perimeter;
}

console.log(polygonPerimeter(0, 0, 1, 0, 1, 1));

console.log("")
console.log("Задание 7")
console.log("")

function nthTerm(n) {
    if (n === 1) {
        return 1;
    }

    let sum = 0;
    for (let i = 1; i < n; i++) {
        sum += nthTerm(i);
    }

    return Math.sin(sum);
}

console.log(nthTerm(1));
console.log(nthTerm(2));
console.log(nthTerm(3));
console.log(nthTerm(4));

console.log("")
console.log("Массивы")
console.log("Задание 1")

let arr = [];

arr[0] = "Первый";
arr[1] = "Второй";
arr[2] = "Третий";

console.log("Элемент с индексом 2:", arr[2]);
console.log("Длина массива:", arr.length);

arr.splice(1, 1);

console.log("Оставшиеся элементы массива:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("")
console.log("Задание 2")
console.log("")

let countries = ["Россия", "США", "Китай"];
let population = [146, 331, 1441];

function printWithFor(countries, population) {
    console.log("Вывод с помощью цикла for:");
    for (let i = 0; i < countries.length; i++) {
        console.log(countries[i] + ": " + population[i] + " млн");
    }
}

function printWithForIn(countries, population) {
    console.log("Вывод с помощью цикла for...in:");
    for (let index in countries) {
        console.log(countries[index] + ": " + population[index] + " млн");
    }
}

printWithFor(countries, population);
console.log("-------------------");
printWithForIn(countries, population);

console.log("")
console.log("Задание 3")
console.log("")

let arr = ["January", "February", "March", "April", "May", "June"];
let len = arr.pop();
console.log(arr.join(" "));
console.log(len);

console.log("")
console.log("Задание 4")
console.log("")


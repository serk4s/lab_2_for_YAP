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

console.log(calculateU(1, 2, 3));

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

let a = [1, 2, 3, 4, 5, 6, 7];
let d = a.slice(0, 3);
console.log(d);

console.log("")
console.log("Задание 6")
console.log("")

let arr = [1, 2, 3, 4, 5];

arr.reverse();

console.log(arr);

console.log("")
console.log("Задание 5")
console.log("")

let a = [1, 2, 3, 4, 5, 6, 7];

let d = a.splice(1, 3);

console.log(a);
console.log(d);

console.log("")
console.log("Задание 7")
console.log("")

let arr = ['c', 5, 2, 'b', 3, 1, 4, 'a'];

arr.sort();

console.log(arr);

console.log("")
console.log("Задание 8")
console.log("")

let arr = [1, 2, 3, 4, 5];

let result = arr.join("+");

console.log(result);

console.log("")
console.log("Задание 9")
console.log("")

function findMedian(arr1, arr2) {
    let mergedArr = arr1.concat(arr2);

    mergedArr.sort((a, b) => a - b);

    let length = mergedArr.length;
    let mid = Math.floor(length / 2);

    if (length % 2 !== 0) {
        return mergedArr[mid];
    } else {
        return (mergedArr[mid - 1] + mergedArr[mid]) / 2;
    }
}

let arr1 = [1, 2, 5, 4, 6];
let arr2 = [8, 2, 5, 9, 5];

console.log(findMedian(arr1, arr2));

console.log("")
console.log("Задание 10")
console.log("")

function generateRandomArray(size, min, max) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

let arr = generateRandomArray(10, 1, 100);

console.log("Исходный массив:", arr);

let minIndex = arr.indexOf(Math.min(...arr));
let maxIndex = arr.indexOf(Math.max(...arr));

[arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]];

console.log("Массив после замены:", arr);

console.log("")
console.log("Задание 11")
console.log("")

function checkAndProcessArray(arr) {
    let isDescending = true;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            console.log("Первый элемент, нарушающий убывающий порядок:", i + 1);
            return;
        }
    }

    console.log("Массив был убывающим, переворачиваем:");
    console.log(arr.reverse());
}

let arr1 = [9, 7, 5, 3, 2, 1];
let arr2 = [10, 8, 6, 7, 4, 2];

checkAndProcessArray(arr1);
checkAndProcessArray(arr2);

console.log("")
console.log("Задание 12")
console.log("")

function modifyArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && i % 2 !== 0) {
            arr[i] *= 3;
        } else if (arr[i] < 0 && i % 2 === 0) {
            arr[i] /= 5;
        }
    }
    return arr;
}

let arr = [4, 5, -10, 3, -15, 6, 7, -8, 9, -2];

console.log("Исходный массив:", arr);
console.log("Изменённый массив:", modifyArray(arr));

console.log("")
console.log("Задание 13")
console.log("")

function generateMatrix(rows, cols, min, max) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        matrix.push(row);
    }
    return matrix;
}

let matrix = generateMatrix(5, 5, -10, 10);

console.log("Матрица:");
matrix.forEach(row => console.log(row.join("\t")));

let filteredElements = [];
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (matrix[i][j] >= -5 && matrix[i][j] <= 7) {
            filteredElements.push(matrix[i][j]);
        }
    }
}

console.log("Элементы в интервале [-5; 7]:", filteredElements);

console.log("")
console.log("Задание 14")
console.log("")

function generateMatrix(m, n, min, max) {
    let matrix = [];
    for (let i = 0; i < m; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            row.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        matrix.push(row);
    }
    return matrix;
}

function sumMaxInRows(matrix) {
    return matrix.reduce((sum, row) => sum + Math.max(...row), 0);
}

function productMinInColumns(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let product = 1;

    for (let j = 0; j < n; j++) {
        let minVal = Infinity;
        for (let i = 0; i < m; i++) {
            if (matrix[i][j] < minVal) {
                minVal = matrix[i][j];
            }
        }
        product *= minVal;
    }

    return product;
}

let matrix = generateMatrix(4, 5, -10, 10);

console.log("Матрица:");
matrix.forEach(row => console.log(row.join("\t")));

let sumMax = sumMaxInRows(matrix);
console.log("Сумма наибольших элементов строк:", sumMax);

let productMin = productMinInColumns(matrix);
console.log("Произведение наименьших элементов столбцов:", productMin);

console.log("")
console.log("Задание 15")
console.log("")

let booksByAuthors = {
    "Пушкин": ["Евгений Онегин", "Капитанская дочка", "Руслан и Людмила"],
    "Есенин": ["Чёрный человек", "Исповедь хулигана", "Анна Снегина"],
    "Достоевский": ["Преступление и наказание", "Идиот", "Братья Карамазовы"],
    "Булгаков": ["Мастер и Маргарита", "Собачье сердце", "Белая гвардия"],
    "Донцова": ["Маникюр для покойника", "Фигаро здесь, Фигаро там"]
};

console.log("Книги по авторам:\n");
for (let author in booksByAuthors) {
    console.log(author + ": " + booksByAuthors[author].join(", "));
}

// function getExtremeElements(array) {
//     const lastIndex = array.length - 1;
//     const lastElement = array[lastIndex];
//     return [lastIndex, lastElement];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));


// let a = 5;
// let b = a;

// console.log(a);
// console.log(b);

// a = 10;
// console.log(a);
// console.log(b);


// function createArrayOfNumbers(min, max) {
//   const array = [];
//   for (let i = min; i <= max; i += 1) {
// 	array.push(i);
// }
//   return array;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers(5, 14));

// const tags = [];

// for(let i = 0; i < 3; i += 1) {
// 	tags.push(`tag-${i}`);
// }

// console.log(tags); // ["tag-0", "tag-1", "tag-2"]


function calculateTotalPrice(order) {
  let sum = 0;
  for (let i = 0; i < order.length; i += 1) {
    sum += order[i];
    }
  return sum;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


// Функція getEvenNumbers(start, end) має два параметри start та end,
// які є цілими числами.Доповни код функції так, щоб вона повертала
// масив усіх парних чисел від start до end.Якщо жодного парного числа
// немає, то масив має бути пустим.Парним вважається число, яке ділиться
// на 2 без остачі(10 % 2 === 0).Використовуй цикл for.
    
// 1 варіант:
    
function getEvenNumbers(start, end) {
    let evenNumbers = [];
    for (let i = start; i <= end; i += 1) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }
    return evenNumbers.length > 0 ? evenNumbers : [];
}

// 2 варіант:

function getEvenNumbers(start, end) {
    let evenNumbers = [];
    for (let i = start; i <= end; i += 1) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }

    if (evenNumbers.length > 0) {
        return evenNumbers;
    } else {
        return [];
    }
}

// 3 варіант:

function getEvenNumbers(start, end) {
    let evenNumbers = [];
    if (start % 2 !== 0) {
        start += 1; // Якщо start непарне, збільшуємо його на 1, щоб почати з парного числа
    }
    for (let i = start; i <= end; i += 2) {
        evenNumbers.push(i);
    }
    return evenNumbers;
}

console.log(getEvenNumbers(2, 5));
console.log(getEvenNumbers(3, 11));
console.log(getEvenNumbers(6, 12));
console.log(getEvenNumbers(8, 8));
console.log(getEvenNumbers(7, 7));


// Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній
// такий товар в масиві storage і повертала:

// + рядок "<item> is available to order!", де item - це назва товара,
//   якщо товар було знайдено
// + рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві

// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру,
// тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві["apple",
// "plum", "pear"].


function checkStorage(storage, item) {
  const itemLowercase = item.toLowerCase();
  if (storage.includes(itemLowercase)){
    return (`${itemLowercase} is available to order!`);
  }
  else {
    return (`Sorry! We are out of stock!`);
  }
}

console.log(checkStorage(["apple", "plum", "pear"], "plum"));
console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
console.log(checkStorage(["apple", "plum", "pear"], "pear"));
console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));
console.log(checkStorage(["apple", "plum", "pear"], "orange"));
console.log(checkStorage(["apple", "plum", "pear"], "carrot"));



// Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи.
// Спільними елементами масивів називають ті елементи, які присутні у всіх
// масивах.

// Наприклад, у двох масивах[1, 3, 5] і[0, 8, 5, 3] спільними будуть числа
// 3 і 5, оскільки вони присутні в обох вхідних масивах.А числа 0, 1 і 8
// присутні тільки в одному з масивів.

// Функція getCommonElements(array1, array2), приймає два масиви(array1
// та array2) довільної довжини в якості параметрів.

// Доповни код функції:

// + Створи порожній масив для зберігання нового масиву.
// + Використай цикл for для ітерації кожного елемента у array1.
// + У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою
//   методу includes.
// + Якщо він існує, то додай елемент до нового масиву.
// + Поверни наповнений масив спільних елементів як результат роботи функції.


function getCommonElements(array1, array2) {
    let newArray = [];
    for (let i = 0; i < array1.length; i += 1) {
        if (array2.includes(array1[i])) {
            newArray.push(array1[i]);
        }
    }
    return newArray.length > 0 ? newArray : [];
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));


// Доповни код функції calculateTotalPrice(order) так, щоб вона повертала
// загальну суму чисел в масиві order.Використай цикл for...of для перебору
// масиву.


function calculateTotalPrice(order) {
    let totalPrice = 0;
    for (const item of order) {
        totalPrice += item;
    }
    return totalPrice;
}


console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice([]));



// Функція createReversedArray() може приймати довільну кількість
// аргументів.Доповни код функції так, щоб вона повертала масив
// усіх аргументів, але в масиві вони повинні йти у зворотному порядку.
// Тобто, при виклику createReversedArray(1, 2, 3), функція має
// повернути масив[3, 2, 1].Використовуй цикл або метод масиву
// toReversed(), який застосовується до масиву і результатом роботи
// повертає новий масив з елементами у зворотньому порядку.

// Якщо під час роботи з arguments потрібно використовувати методи масиву,
// тоді псевдомасив необхідно перетворити на масив, використовуючи метод
// Array.from(), який створить масив із псевдомасиву.


function createReversedArray() {
  const args = Array.from(arguments); //arguments створюється автоматично всередині функції і заповнюється переданими значеннями аргументів (тим, що в дужках після назви функції).
  return args.toReversed();
}

console.log(createReversedArray(12, 85, 37, 4));
console.log(createReversedArray(164, 48, 291));
console.log(createReversedArray(412, 371, 94, 63, 176));
console.log(createReversedArray());


// Домашка:

// Задача 3. Фільтрація масиву чисел
// Виконуй це завдання у файлі task-3.js

// Напиши функцію filterArray(numbers, value), яка приймає масив чисел
// (numbers) та значення(value) як параметри.Функція повинна повертати
// новий масив лише тих чисел із масиву numbers, які більші за значення
// value.

// Усередині функції:

// + Створи порожній масив, у який будеш додавати підходящі числа.
// + Використай цикл для ітерації кожного елемента масиву numbers.
// + Використовуй умовний оператор if усередині циклу для перевірки
//   кожного елемента и додавання до свого масиву.
// + Поверни свій новий масив з підходящими числами як результат.


function filterArray(numbers, value) {
    let newArray = [];
    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] > value) {
            newArray.push(numbers[i]);
        }
    }
    return newArray;
}

// Варіант Олександра Литвиненка:

function filterArray(numbers, value) {
  const NEW_array = [];
  for (const newnumber of numbers) {
    if (value < newnumber) {
      NEW_array.push(newnumber);
    }
  }
  return NEW_array;
}


console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]










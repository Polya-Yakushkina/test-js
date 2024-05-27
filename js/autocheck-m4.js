const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  console.log(key); // Ключ
  console.log(book[key]);  // Значення властивості з таким ключем
}


// Перебери об'єкт apartment, використовуючи цикл for...in, і запиши
// в масив keys всі його ключі, а в масив values всі значення його властивостей.


const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = [];
const values = [];

for (let key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}


// Виконай рефакторинг функції countProps(object), замінивши перебір
// ключів за допомогою циклу for…in на метод Object.keys() для отримання
// масиву властивостей.Функція має повернути кількість властивостей в
// об'єкті object.

function countProps(object) {
  let propCount = 0;

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  return propCount;
}

// Рішення (використовуємо метод Object.keys() для отримання масиву
// ключів об'єкта, а потім використовує властивість length цього масиву,
// щоб отримати кількість властивостей) ==>>

function countProps(object) {
  const propCount = Object.keys(object).length;
  return propCount;
}


// Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries)
// в якості параметра.Кожна властивість об'єкта salaries — це ключ, що
// містить ім'я співробітника, та значення - його відповідна зарплатня.

// Доповни код функції countTotalSalary(salaries) так, щоб вона повертала
// загальну суму зарплат всіх співробітників.

// Поради:
// + Ініціалізуй змінну totalSalary зі значенням 0, яка буде відповідати
//   за загальну суму зарплат усіх співробітників
// + Використай метод Object.values() для отримання значень (зарплат) з
//   об'єкта salaries
// + Пройдись по отриманих значеннях за допомогою циклу та додай кожне
//   значення до змінної totalSalary.
// + Поверни totalSalary як результат


function countTotalSalary(salaries) {
  let totalSalary = 0;
  const salariesValues = Object.values(salaries);
  for (const salary of salariesValues) {
    totalSalary += salary;
  }
  return totalSalary;
}


// Масив colors містить колекцію кольорів.Кожен колір представлений
// об'єктом і має властивості hex і rgb з відповідними для цього формату
// і кольору значеннями.

// Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у
// масив hexColors значення властивостей hex, а в масив rgbColors - значення
// властивостей rgb з усіх об'єктів масиву colors.


const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}


const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell" },
  { title: "Beside Still Waters", author: "Robert Sheckley" },
  { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
];

const authorToSearchFor = "Robert Sheckley";

for (const book of books) {
	if(book.author === authorToSearchFor) {
		console.log(book);
		console.log(book.title)
		console.log(book.rating)
	}
}

// У прикладі вище цикл for перебирає об'єкти в масиві, доки не знайде той,
// у якого порівняння значення властивості author і authorToSearchFor
// поверне true.Щойно об'єкт з необхідним автором знайдено, виконається
// тіло if, де ми вже можемо працювати зі знайденим об'єктом.


// Функція getProductPrice(productName) приймає один параметр productName -
// назва продукту.Функція містить масив об'єктів products з такими
// властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям
// (властивість name) в масиві products і повертала його ціну(властивість
// price).Якщо продукт з такою назвою не знайдений, функція повинна повертати
// null.


function getProductPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  for (const product of products) {
    if (product.name === productName) {
      return product.price;
    }
  }
  return null;
}

// Типова задача під час роботи з колекцією об'єктів — це отримання масиву всіх
// значень певної властивості об'єктів. Наприклад, взяти з масиву об'єктів, які
// описують книги, усі назви або рейтинг.

// Для цього необхідно:
// + Створити новий порожній масив для зберігання значень властивостей
// + Перебрати масив об'єктів у циклі
// + На кожній ітерації додати в новий масив значення необхідної властивості

// Наприклад, отримаємо список назв усіх книг у колекції books:

const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
  { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
  { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
];

const titles = [];

for (const book of books) {
	titles.push(book.title)
}

console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]

// Дізнаємося середній рейтинг усієї нашої колекції.
// Для цього треба скласти всі рейтинги й розділити отримане значення
// на кількість книг.

const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
  { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
  { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
];

let totalRating = 0;

for (const book of books) {
  totalRating += book.rating;
}

const averageRating = totalRating / books.length;
console.log(averageRating);



// Напиши функцію getAllPropValues(propName), яка приймає один параметр
// propName - ім'я (ключ) властивості. Функція повинна повернути масив
// усіх значень властивості з таким ім'ям з кожного об'єкта в масиві
// products.Якщо в об'єктах відсутні властивості з таким ім'ям, функція
// повинна повернути порожній масив.

// Варіант 1 (простий цикл for...of і метод Object.keys()):

function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  const propValues = [];
  for (const product of products) {
    const keys = Object.keys(product);
    if (keys.includes(propName)) {
      propValues.push(product[propName]);
    }
  }
  return propValues;
}

// Варіант 2 (цикл for...of і оператор in):

function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  const propValues = [];
  for (const product of products) {
    if (propName in product) {
      propValues.push(product[propName]);
    }
  }
  return propValues;
}

// Варіант 3 (цикл for...of і метод hasOwnProperty()):

function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  const propValues = [];
  for (const product of products) {
    if (product.hasOwnProperty(propName)) {
      propValues.push(product[propName]);
    }
  }
  return propValues;
}


// Функція calculateTotalPrice(productName) приймає один параметр
// productName - назва товару.Функція містить масив об'єктів products з
// такими властивостями, як name — ім'я товару, price — ціна і quantity —
// кількість.

// Доповни код функції так, щоб вона повертала загальну вартість (ціна *
// кількість) товару з таким ім'ям з масиву products.

// Якщо продукту з такою назвою немає, то функція повинна повертати рядок
// "Product <productName> not found!", де < productName > — це ім'я товару.


function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  for (const product of products) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
  return `Product ${productName} not found!`
}


// До нас звернулася власниця крамниці зілля «У старої жаби» і замовила
// програму для ведення інвентарю.Програма має додавати, видаляти, шукати
// та оновлювати зілля.

// Оголоси об'єкт atTheOldToad з наступними властивостями:
// + potions — масив, де будуть зберігатися зілля. Нехай зараз він буде
//   порожнім
// + getPotions() — метод, який повертає рядок "List of all available
//   potions"
// + addPotion(potionName) — метод, який повертає рядок "Adding
//   <potionName>", де potionName — це значення параметра potionName


const atTheOldToad = {
  potions: [],
  getPotions() {
    return "List of all available potions";
  },
  addPotion(potionName) {
    return `Adding ${potionName}`
  },
};


// Об'єкт atTheOldToad має наступні властивості:
// + potions — масив рядків, з назвами зілль
// + getPotions() — метод, який повертає рядок "List of all available
//   potions"
// Зміни код метода об'єкта getPotions() так, щоб він повертав значення
// властивості potions


const atTheOldToad = {
  potions: ["Speed potion", "Stone skin"],
  getPotions() {
    return this.potions; //було return "List of all available potions"
  },
};


// Об'єкт atTheOldToad має наступні властивості:
// + potions — масив рядків, з назвами зілль
// + getPotions() — метод, який повертає значення властивості potions
// + addPotion() — метод, який приймає параметр рядок з назвою зілля
//   potionName
// Зміни код методу addPotion(potionName) так, щоб він додавав зілля
// potionName в кінець масиву у властивості potions.

const atTheOldToad = {
  potions: ["Speed potion", "Stone skin"],
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    this.potions.push(potionName);
  },
};


// При переборі масиву у властивості books треба пам'ятати, що це масив
// об'єктів.

// Наприклад, додамо метод getAverageRating(), який повертатиме середній
// рейтинг книг. Для цього:
// + Оголосимо новий метод getAvarageRating в об'єкті
// + Оголосимо змінну totalRating для зберігання загального рейтингу
// + Переберемо масив книг за посиланням this.books у циклі for...of
// + На кожній ітерації додамо до загального рейтнгу рейтинг книги
// + Після завершення циклу повернемо результат ділення загального
//   рейтингу на кількість книг


const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
  getAvarageRating() {
    let totalRating = 0;
    for (const book of this.books) {
      totalRating += book.rating;
    }
    return totalRating / this.books.length;
  },
};
bookShelf.getAvarageRating(); // 7


// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям,
// але й ціною. Тому зараз у властивості potions буде зберігатися масив
// об'єктів з властивостями name та price.

// Об'єкт atTheOldToad має наступні властивості:
// + potions — масив об'єктів, з назвами зілль та ціною
// + getPotions() — метод, який повертає значення властивості potions
// + addPotion() — метод, який приймає параметр об'єкт нового зілля
//   newPotion і додає його в кінець масиву у властивості potions.
// Додай метод getTotalPrice(), який має повертати загальну вартість
// усіх зілль з властивості potions.

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  getTotalPrice() {
    let totalPrice = 0;
    for (const potion of this.potions) {
      totalPrice += potion.price;
    }
    return totalPrice;
  },
};


// Об'єкт atTheOldToad має наступні властивості:
// + potions — масив об'єктів зілль
// + getPotions() — метод, який повертає значення властивості potions
// + updatePotionName() — метод, який приймає два параметра рядків
//   oldName і newName
// Доповни метод updatePotionName(oldName, newName) таким чином, щоб
// він оновлював назву зілля з oldName на newName в масиві зілля у
// властивості potions.

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
      }
    }
  },
};


// Використовуючи синтаксис залишкових параметрів, доповни код функції
// add() так, щоб вона приймала будь - яку кількість аргументів у
// параметр args і повертала їхню суму.

function add(...args) {
  let total = 0;
  for (let arg of args) {
    total += arg;
  }
  return total;
}


// Операція(...rest) також дозволяє зібрати в масив тільки ту частину
// аргументів, яка необхідна.Для цього потрібно оголосити параметри до
// «збирання». Можна покласти перші кілька параметрів у змінні, а
// решту — зібрати в масив.

function multiply(first, second, ...args) {
  console.log(first, second, args);
}

multiply(1, 2); // 1 2
multiply(1, 2, 3); // 1 2 [3] 
multiply(1, 2, 3, 4); // 1 2 [3, 4]


// Функція addOverNum() приймає довільну кількість аргументів чисел.

// Доповни код функції таким чином, щоб вона обчислювала суму тільки
// тих аргументів, які більші за задане число.Це число завжди буде
// передано першим аргументом.

// Для вирішення цього завдання тобі потрібно зробити наступне:
// + Перший параметр value повинен представляти задане число, а решта
//   аргументів повинні бути зібрані за допомогою синтаксису(...args)
// + Усередині функції ініціалізуй змінну для зберігання загальної суми
// + Потім пройдись по кожному аргументу за допомогою циклу
// + Перевір, чи кожен аргумент більший за вказане число, і якщо так,
//   додай його до загальної суми
// + На завершення поверни загальну суму.

function addOverNum(value, ...args) {
  let sum = 0;
  for (let arg of args) {
    if (arg > value) {
      sum += arg;
    }
  }
  return sum;
}


// Функція getExtremeScores(scores) приймає масив оцінок(чисел) у параметрі
// scores.
// Доповни код функції так, щоб вона повертала об'єкт із двома властивостями:
// + Властивість best має містити найбільше число з масиву scores
// + Властивість worst має містити найменше число з масиву scores.

// Використовуй оператор(...spread) і методи Math.max() і Math.min().

function getExtremeScores(scores) {
  return {
    best: Math.max(...scores),
    worst: Math.min(...scores),
  }
}

console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])); // { best: 93, worst: 17 }
console.log(getExtremeScores([19, 7, 4, 17, 81, 24])); // { best: 81, worst: 4 }


// У змінних firstGroupScores, secondGroupScores і thirdGroupScores
// зберігаються результати тестування окремих груп.Використовуючи розпилення
// (...spread), доповни код таким чином, щоб:
// + У змінній allScores зберігався масив всіх результатів від першої до
//   третьої групи включно.
// + У змінній bestScore був найвищий загальний бал.
// + У змінній worstScore був найнижчий загальний бал.

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);


// В конструкторі можна створювати нові тести, для яких є налаштування за
// замовчуванням, які зберігаються у змінній defaultSettings.Під час створення
// тесту, усі або частину налаштувань можна перевизначити, користувацькі
// налаштування зберігаються у змінній overrideSettings.

// Для того щоб отримати фінальні налаштування тесту, необхідно взяти
// налаштування за замовчуванням і поверх них застосувати перевизначені
// користувацькі налаштування.Доповни код таким чином, щоб у змінній
// finalSettings утворився об'єкт фінальних налаштувань тесту.

const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = {...defaultSettings, ...overrideSettings};






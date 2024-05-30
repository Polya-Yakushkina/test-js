// const objA = {
//     name: "Alice",
//     hello: () => {
//         console.log(this.name);
//     },
// };

// const objB = {
//     name: "Kate",
//     hello() {
//         objA.hello();
//     },
// };

// objB.hello();


//*********************************************************************** */
// const hello = function () {
//     console.log(this.name);
// };

// const objA = {
//     name: "Alice",
//     myName: function () {
//         console.log(this.name);
//     }
// };
// objA(myName);


//************************************************************************** */
// class User {
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }


//******************************************************************** */
class User {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
  }

  getEmail() {
    return this.email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

const mango = new User({ 
	name: "Mango", 
	email: "mango@mail.com" 
});

console.log(mango.getEmail()); // "mango@mail.com"

mango.changeEmail("new@mail.com");

console.log(mango.getEmail()); // "new@mail.com"


// explique oque e funcoes contrutoras e para que servem em js

// Em JavaScript, uma função construtora é uma função que é utilizada para criar e inicializar um objeto. Ela é chamada com a palavra-chave "new" e retorna um novo objeto com o "this" apontando para ele.

// Aqui está um exemplo de uma função construtora:

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person('John', 30);
console.log(person1.name); // Output: 'John'
console.log(person1.age); // Output: 30

Em JavaScript, uma função construtora é uma função que é utilizada para criar e inicializar um objeto. Ela é chamada com a palavra-chave "new" e retorna um novo objeto com o "this" apontando para ele.

Aqui está um exemplo de uma função construtora:

Copy code
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person('John', 30);
console.log(person1.name); // Output: 'John'
console.log(person1.age); // Output: 30


// As funções construtoras são úteis quando você quer criar vários objetos com o mesmo tipo ou modelo. Elas permitem que você defina um conjunto de propriedades e métodos que serão compartilhados por todos os objetos criados a partir dela.

// Além disso, as funções construtoras permitem que você passe parâmetros para a criação do objeto, o que permite que você crie objetos personalizados. No exemplo acima, a função construtora "Person" recebe dois parâmetros, "name" e "age", que são usados para inicializar as propriedades do objeto.

// Em resumo, as funções construtoras são uma forma de criar objetos em JavaScript de maneira organizada e padronizada.

// eu posso usar POO em javascript utilizando funcoes construtoras ? Se sim, de exemplos

// Sim, é possível utilizar Programação Orientada a Objetos (POO) em JavaScript usando funções construtoras. A POO é uma técnica de programação que visa modelar a realidade de maneira mais próxima possível, criando objetos que representam entidades do mundo real e definindo relações entre eles.

// Aqui estão alguns exemplos de como você pode utilizar funções construtoras para implementar a POO em JavaScript:

// Criando uma função construtora para representar uma pessoa
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adicionando um método ao prototype da função construtora
Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
};

// Criando dois objetos a partir da função construtora
const person1 = new Person('John', 30);
const person2 = new Person('Alice', 25);

// Chamando o método sayHello de cada objeto
person1.sayHello(); // Output: "Hello, my name is John and I am 30 years old"
person2.sayHello(); // Output: "Hello, my name is Alice and I am 25 years old"

/* ----------------------------------- */
// Criando uma função construtora para representar uma conta bancária
function BankAccount(balance) {
  this.balance = balance;
}

// Adicionando métodos para depositar e retirar dinheiro da conta
BankAccount.prototype.deposit = function(amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function(amount) {
  this.balance -= amount;
};

// Criando um objeto a partir da função construtora
const account = new BankAccount(1000);

// Realizando operações na conta
account.deposit(500);
console.log(account.balance); // Output: 1500
account.withdraw(200);
console.log(account.balance); // Output: 1300

/* --------------------------------------- */ 

// Criando uma função construtora para representar um animal
function Animal(type, name, age) {
  this.type = type;
  this.name = name;
  this.age = age;
}

// Adicionando um método para emitir um som
Animal.prototype.makeSound = function() {
  console.log(`The ${this.type} makes a sound`);
};

// Criando uma função construtora para representar um cão, que herda de Animal
function Dog(name, age) {
  Animal.call(this, 'dog', name, age);
}

// Fazendo com que a função construtora Dog herde os métodos de Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Sobrescrevendo o método makeSound para os cães
Dog.prototype.makeSound = function() {
console.log(The ${this.type} barks);
};

// Criando um objeto a partir da função construtora Dog
const dog = new Dog('Buddy', 5);

// Chamando o método makeSound do cão
dog.makeSound(); // Output: "The dog barks"



// Nesses exemplos, as funções construtoras são usadas para criar objetos que representam entidades do mundo real, como pessoas, contas bancárias e animais. Além disso, elas permitem a criação de relações de herança entre esses objetos, através do uso do prototype e da função Object.create(). Isso permite que você crie hierarquias de objetos e reutilize código de maneira eficiente.

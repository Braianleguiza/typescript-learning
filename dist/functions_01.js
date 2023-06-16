"use strict";
// Funciones en TypeScript
const persona = { name: "braian", age: 25 };
function saludar(name, age) {
    console.log(`v1: Hola ${name}, tienes ${age}`);
}
saludar(persona.name, persona.age);
// Funciones de objetos
function saludar2(persona) {
    const { name, age } = persona;
    console.log(`v2: Hola ${name}, tienes ${age}`);
    return name;
}
let userName = saludar2(persona);
// Exemplos com arrow functions
const sayHiFromFunction = (fn) => {
    return fn('Miguel');
};
sayHiFromFunction((name) => {
    console.log(`sayHiFromFunction: Hola ${name}`);
});
const sumar = (a, b) => {
    return a + b;
};
const restar = (a, b) => {
    return a - b;
};
// Uso de las funciones
console.log('sumar: ' + sumar(1, 2));
console.log('restar: ' + restar(1, 2));
// Never
function throwError(message) {
    throw new Error(message);
}

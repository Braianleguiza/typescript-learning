"use strict";
// Introducción a ejemplos de objetos.
let hero = {
    name: "Batman",
    age: 30,
    power: "Money"
};
hero.age = 35;
// hero.name = 6546 <- Error
function createHero(hero) {
    const { name, age, power } = hero;
    return { name, age, power };
}
let Ironman = createHero({
    name: "Ironman",
    age: 45,
    power: "Money"
});
console.log(Ironman);

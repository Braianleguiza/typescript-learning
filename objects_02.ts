// Introducción a ejemplos de objetos.

type Hero = {
    name: string,
    age: number,
    power: string

}

let hero: Hero = {
    name: "Batman",
    age: 30,
    power: "Money"
}

hero.age = 35

function createHero(hero: Hero): Hero {
    const { name, age, power } = hero
    return { name, age, power }
}

let Ironman = createHero({
    name: "Ironman",
    age: 45,
    power: "Money"
})

console.log(Ironman);


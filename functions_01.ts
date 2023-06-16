// Funciones en TypeScript
const persona = { name: "braian", age: 25 }

function saludar(name: any, age: number): void {
    console.log(`v1: Hola ${name}, tienes ${age}`)
}

saludar(persona.name, persona.age)

// Funciones de objetos
function saludar2(persona: { name: string, age: number }): string {
    const { name, age } = persona
    console.log(`v2: Hola ${name}, tienes ${age}`)

    return name
}

let userName: string = saludar2(persona)


// Exemplos com arrow functions
const sayHiFromFunction = (fn: (name: string) => void) => {
    return fn('Miguel')
}

sayHiFromFunction((name: string) => {
    console.log(`sayHiFromFunction: Hola ${name}`)
})

const sumar = (a: number, b: number): number => {
    return a + b
}

const restar = (a: number, b: number): number => {
    return a - b
}

// Uso de las funciones
console.log('sumar: ' + sumar(1, 2))
console.log('restar: ' + restar(1, 2))

// Never
function throwError(message: string): never {
    throw new Error(message)
}

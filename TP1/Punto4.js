// EJERCICIOS SOBRE OPERACIONES CON ARRAYS

// PUNTO 1: Agregar y Eliminar Elementos

const frutas = ["manzana", "banana", "pera"];

frutas.push("naranja");
console.log(frutas);

frutas.pop();
console.log(frutas);

// PUNTO 2: Array Bidimensional

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz[1][1]);

// PUNTO 3: Iterar sobre un Array
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// PUNTO 4: Uso de map
function elevarAlCuadrado(numeros) {

    return numeros.map(function(numero) {
        return numero * numero;
    });
}

const numerosCuadrado = [1, 2, 3, 4, 5];

console.log(elevarAlCuadrado(numerosCuadrado));

// PUNTO 5: Uso de filter
function filtrarMayoresDe(numeros, referencia) {

    return numeros.filter(function(numero) {
        return numero > referencia;
    });
}

const numerosMayores = [5, 10, 15, 20, 25];

console.log(filtrarMayoresDe(numerosMayores, 15));

// PUNTO 6: Uso de reduce
function sumarElementos(numeros) {

    return numeros.reduce(function(total, numero) {
        return total + numero;
    }, 0);
}

const numerosSuma = [10, 20, 30, 40];

console.log(sumarElementos(numerosSuma));

// PUNTO 7: Uso de some
const numeros = [5, 8, 12, 3];

const hayMayorDe10 = numeros.some(function(numero) {
    return numero > 10;
});

console.log(hayMayorDe10);

// PUNTO 8: Uso de every
const numerosPositivos = [1, 5, 10, 20];

const todosPositivos = numerosPositivos.every(function(numero) {
    return numero > 0;
});

console.log(todosPositivos);

// PUNTO 9: Uso de find
const personas = [
    {
        nombre: "Juan",
        edad: 25
    },
    {
        nombre: "Maria",
        edad: 32
    },
    {
        nombre: "Pedro",
        edad: 40
    }
];

const personaMayorDe30 = personas.find(function(persona) {
    return persona.edad > 30;
});

console.log(personaMayorDe30);

// PUNTO 10: Uso de sort
const palabras = ["pera", "manzana", "banana", "naranja"];

palabras.sort();

console.log(palabras);

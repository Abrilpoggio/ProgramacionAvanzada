//EJERCICIOS SOBRE FUNCIONES

// PUNTO 1: Función Suma
function sumar(numero1, numero2) {
    return numero1 + numero2;
}
console.log(sumar(5, 3));
console.log(sumar(10, 20));
console.log(sumar(100, 50));


// PUNTO 2: Función que Multiplica
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}
console.log(multiplicar(5, 3));
console.log(multiplicar(10, 2));
console.log(multiplicar(7, 4));

// PUNTO 3: Función con Parámetro por Defecto
function saludar(nombre = "Invitado") {
    return "Hola, " + nombre;
}
console.log(saludar("Juan"));
console.log(saludar("Maria"));
console.log(saludar());

// PUNTO 4: Función que Devuelve un Objeto
function crearPersona(nombre, edad) {
    return {
        nombre: nombre,
        edad: edad
    };
}
const persona1 = crearPersona("Juan", 25);
const persona2 = crearPersona("Maria", 30);

console.log(persona1);
console.log(persona2);

// PUNTO 5: Función que Modifica un Objeto
function actualizarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad;
}

actualizarEdad(persona1, 26);
console.log(persona1);

// PUNTO 6: Función Recursiva
function factorial(numero) {

    if (numero === 0 || numero === 1) {
        return 1;
    }
    return numero * factorial(numero - 1);
}
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(6));

// PUNTO 7: Función con Función Interna
function despedir() {

    function adios() {
        return "Adios";
    }
    return adios();
}
console.log(despedir());

// PUNTO 8: Función que Usa Otra Función
function procesarArray(array, funcion) {
    for (let i = 0; i < array.length; i++) {
        array[i] = funcion(array[i]);
    }
    return array;
}

function multiplicarPorDos(numero) {
    return numero * 2;
}

const numeros = [1, 2, 3, 4, 5];
const resultado = procesarArray(numeros, multiplicarPorDos);

console.log(resultado);

// PUNTO 9: Función que Devuelve Otra Función
function crearMultiplicador(x) {

    return function(numero) {
        return numero * x;
    };
}

const multiplicarPor3 = crearMultiplicador(3);

console.log(multiplicarPor3(5));
console.log(multiplicarPor3(10));

// PUNTO 10: Función Anónima
const sumarAnonima = function(numero1, numero2) {
    return numero1 + numero2;
};

console.log(sumarAnonima(5, 3));
console.log(sumarAnonima(10, 20));

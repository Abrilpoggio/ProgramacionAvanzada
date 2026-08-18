// Ejercicios sobre Objetos

// PUNTO 1: Creación de un Objeto Básico
const libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    añoDePublicacion: 1943
};
console.log(libro.titulo);
console.log(libro.autor);
console.log(libro.añoDePublicacion);

// PUNTO 2: Anidación de Objetos
const estudiante = {
    nombre: "Abril",
    edad: 22,
    direccion: {
        calle: "Ejemplo 123",
        ciudad: "Cdelu",
        pais: "Argentina"
    }
};
console.log(estudiante.direccion.calle);
console.log(estudiante.direccion.ciudad);
console.log(estudiante.direccion.pais);

// PUNTO 3: Métodos en Objetos
libro.descripcion = function() {
    return "El libro " + this.titulo + " fue escrito por " + this.autor;
};
console.log(libro.descripcion());

// PUNTO 4: Iteración sobre Propiedades de un Objeto
const producto = {
    nombre: "Notebook",
    precio: 500000,
    disponible: true
};
for (let propiedad in producto) {
    console.log(propiedad + ": " + producto[propiedad]);
}

// PUNTO 5: Actualización de Propiedades
producto.precio = 600000;

console.log(producto);

// PUNTO 6: Comprobación de Propiedades
function tienePropiedad(objeto, propiedad) {
    return propiedad in objeto;
}

console.log(tienePropiedad(producto, "precio"));
console.log(tienePropiedad(producto, "marca"));

// PUNTO 7: Eliminación de Propiedades
console.log("Antes de eliminar disponible:");
console.log(producto);

delete producto.disponible;

console.log("Después de eliminar disponible:");
console.log(producto);

// PUNTO 8: Combinar Objetos
const persona1 = {
    nombre: "Juan",
    edad: 25
};
const persona2 = {
    ciudad: "Paraná",
    pais: "Argentina"
};

const personaCombinada = Object.assign({}, persona1, persona2);
console.log(personaCombinada);

// PUNTO 9: Copiar Objetos
const estudianteCopia = JSON.parse(JSON.stringify(estudiante));

estudianteCopia.nombre = "Pedro";
estudianteCopia.direccion.ciudad = "Santa Fe";

console.log("Estudiante original:");
console.log(estudiante);

console.log("Copia del estudiante:");
console.log(estudianteCopia);

// PUNTO 10: Métodos Getters y Setters
Object.defineProperty(libro, "añoDePublicacion", {

    get: function() {
        return this._añoDePublicacion;
    },

    set: function(nuevoAño) {
        this._añoDePublicacion = nuevoAño;
    }

});

libro.añoDePublicacion = 1950;
console.log(libro.añoDePublicacion);

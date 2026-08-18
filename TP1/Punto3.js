// EJERCICIOS SOBRE FUNCIONES

// PUNTO 1: Consumo de Datos desde una API
async function obtenerUsuarios() {

    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

    const usuarios = await respuesta.json();

    console.log(usuarios);

    return usuarios;
}
obtenerUsuarios();


// PUNTO 2: Procesamiento de Datos de una API
async function imprimirNombresDeUsuarios() {

    const usuarios = await obtenerUsuarios();

    const nombres = usuarios.map(function(usuario) {
        return usuario.name;
    });

    console.log(nombres);
}

imprimirNombresDeUsuarios();


// PUNTO 3: Autenticación Simulada
function autenticarUsuario(credenciales) {

    const usuarioPredefinido = {
        usuario: "admin",
        contraseña: "1234"
    };

    if (
        credenciales.usuario === usuarioPredefinido.usuario &&
        credenciales.contraseña === usuarioPredefinido.contraseña
    ) {
        return true;
    }

    return false;
}

const credenciales = {
    usuario: "admin",
    contraseña: "1234"
};

console.log(autenticarUsuario(credenciales));


// PUNTO 4: Transformación de Datos
function mapearUsuarios(usuarios) {

    const usuariosMapeados = usuarios.map(function(usuario) {
        return {
            nombre: usuario.name,
            email: usuario.email
        };
    });

    return usuariosMapeados;
}


// PUNTO 5: Validación de Formularios
function validarFormulario(formulario) {

    if (
        formulario.nombre &&
        formulario.email &&
        formulario.password
    ) {
        return true;
    }

    return false;
}

const formulario = {
    nombre: "Abril",
    email: "abril@gmail.com",
    password: "123456"
};

console.log(validarFormulario(formulario));


// PUNTO 6: Paginación de Datos
function obtenerPagina(datos, numeroPagina) {

    const elementosPorPagina = 5;

    const inicio = (numeroPagina - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;

    return datos.slice(inicio, fin);
}

const datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(obtenerPagina(datos, 1));
console.log(obtenerPagina(datos, 2));


// PUNTO 7: Envío de Datos a una API
async function enviarDatos(data) {

    const respuesta = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );

    const resultado = await respuesta.json();

    console.log(resultado);

    return resultado;
}

const nuevoPost = {
    title: "Mi publicación",
    body: "Contenido de la publicación",
    userId: 1
};

enviarDatos(nuevoPost);


// PUNTO 8: Búsqueda de Usuarios
function buscarUsuarioPorEmail(usuarios, email) {

    return usuarios.find(function(usuario) {
        return usuario.email === email;
    });
}


// PUNTO 9: Generación de Token de Autenticación
function generarToken(usuario) {

    const datosUsuario = usuario.usuario + ":" + usuario.email;

    const token = btoa(datosUsuario);

    return token;
}

const usuario = {
    usuario: "Abril",
    email: "abril@gmail.com"
};

console.log(generarToken(usuario));


// PUNTO 10: Actualización de Información del Usuario
function actualizarUsuario(usuario, cambios) {

    for (let propiedad in cambios) {
        usuario[propiedad] = cambios[propiedad];
    }

    return usuario;
}

const usuarioActualizado = {
    nombre: "Abril",
    email: "abril@gmail.com",
    edad: 22
};

const cambios = {
    email: "nuevo@gmail.com",
    edad: 23
};

console.log(actualizarUsuario(usuarioActualizado, cambios));

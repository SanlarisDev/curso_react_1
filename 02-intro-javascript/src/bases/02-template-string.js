

const nombre = 'Cynthia';
const apellido = 'Sanchez';

// const nombreCompleto = nombre + '' + apellido; 
const nombreCompleto = `
${nombre}
${apellido}
${ 1 + 1 }
`; 

console.log( nombreCompleto );

function getSaludo() {
    return 'Hola ' + nombre;
}

console.log( `Este es un texto: ${ getSaludo() } `);
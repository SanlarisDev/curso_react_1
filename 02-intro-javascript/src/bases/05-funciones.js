

/* const saludar = function saludar( nombre ) {
    return `Hola, ${ nombre }`;
} */

const saludar2 = (nombre) => {
    return `Hola, ${ nombre }`;
};

const saludar3 = (nombre) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola, mundo`;

//console.log(saludar);
//console.log(saludar('Goku'));

console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

// Cuando queremos retornar un objeto en
// la función de flecha, poner paréntesis antes
const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});
console.log(getUser());

const user = getUser();
console.log(user);

// TAREA
// 1. Transformen a una función de Flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas
function getUsuarioActivo( nombre ) {
    return {
        uid: 'ABC567',
        username: nombre
    }
} 

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );

//-------------------------------------------------------------

const getUserActive = (user) => ({
        uid: 'ABC567',
        username: user
})

const userActive = getUserActive('Cynthia');
console.log(userActive);

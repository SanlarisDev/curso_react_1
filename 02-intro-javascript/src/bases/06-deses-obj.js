

// Desectructuración
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const usarContext = ( { nombre, edad, clave, rango = 'capitán' } ) => {
    //console.log( nombre, edad, rango );

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.256,
            lng: -12.323
        }
    }
}

const avenger = usarContext( persona );
const {nombreClave, anios, latlng: {lat, lng}} = avenger;

//o

//const {latlng} = avenger;
//const {lat, lng} = latlng;


console.log({nombreClave, anios});

console.log(lat, lng);
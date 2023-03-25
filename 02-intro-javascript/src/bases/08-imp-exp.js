// import { heroes } from './data/heroes';
 import heroes, { owners } from "../data/heroes";

//console.log(owners)

export const getHeroeById = ( id ) =>heroes.find( heroe  => id === heroe.id);

//console.log( getHeroeById(2) );

export const getHeroesByOwner = ( owner ) => heroes.filter( heroe => heroe.owner = owner);

//console.log( getHeroesByOwner('DC') );
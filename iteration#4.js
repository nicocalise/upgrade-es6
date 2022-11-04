//4.1 Dado el siguiente array, devuelve un array con sus nombres 
//utilizando .map().
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];


//                      los argumentos del map // lo que devuelve el map 
const userName = users.map( (person,index) => ({k:person.id, n:person.name}));


//4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
//de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
//empiece por 'A'.
const users1 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];



const users1Map = users1.map( (person) => {

    if (person.name.charAt(0) ==="A"){
        person.name = 'Anacleto'; 
    }
    return person.name;    
} );


//4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
//de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
//cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const citiesVisited = cities.map( (city) => {
    debugger
    if(city.isVisited == true){

        city.name = city.name + ' Visitado';
    }
    return city;

});
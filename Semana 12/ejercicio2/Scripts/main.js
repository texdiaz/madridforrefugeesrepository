const kingGrandson = 'Felipe Juan Froilán de Todos los Santos de Marichalar y Borbón'; //String
const kingGrandsonAge = 20; //Number
const hasTitle = true; //Boolean
const titleName = 'Caballero Divisero Hijodalgo del Ilustre Solar de Tejada'; //String


console.log(kingGrandson + 'has ' + kingGrandsonAge + 'years');
console.log(kingGrandson + 'has a title of' + titleName);*/

/*const pregunta= (" cual es el nombre del rey de españa ");
const respuesta = prompt(pregunta);

if ( respuesta === "felipe"){
    alert( "viva el rey!!!")
} else{
    alert(" a la horca por traidor")
}



/*let pregunta = ( "cual es nombre del rey de españa")
let respuesta = prompt(pregunta);


let pregunta2 = ( " cual es la edad del rey de españa?")
const respuesta2 = prompt(pregunta2);

if (respuesta === "felipe" && respuesta2 >= 46) {
  alert('¡viva el rey!!!');
} else {
  // run some other code instead
  alert (" traidor a la horca!!!! ");
  alert (" traidor a la horca!!!! ");
  alert (" traidor a la horca!!!! ");
  alert (" traidor a la horca!!!! ");
  alert (" traidor a la horca!!!! ");

}*/

const product1 = 'Toilet paper';
const product2 = 'Scissors';
const product3 = 'Tomatos';
const product4 = 'Towels';
const product5 = 'Shoes';

const productList = ['Toilet paper', 'Scissors', 'Tomatos', 'Towels', 'Shoes'];
 

productList.forEach((product, index) => {
  console.log(index, product); // index
});
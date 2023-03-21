let array1=["Nicks", "Morales",18]
document.write(array1[0]);

const fruits = [];
fruits.push("banana", "apple", "peach");
alert("Tamaño del array" +fruits.length); // 3

const cars = ["Saab", "Volvo", "BMW"];
const cars2 = [];
cars2[0]= "Saab";
cars2[1]= "Volvo";
cars2[2]= "BMW";

for (let index = 0; index < cars.length; index++) {
    alert(cars[index]);
    
}
cars.length   // Returns the number of elements
cars.sort()   // Sorts the array
alert("sort "+cars.sort());

//Arrays como objetos
const person = {firstName:"John", lastName:"Doe", age:46};
document.write("La edad de la persona en el array es: "+person.age)

//Accessing the Last Array Element

let fruit = fruits[fruits.length - 1];

//Elementos de matriz en bucle
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";


document.write(text);
//El operador instanceof devuelve verdadero si un objeto es creado por un 
//constructor dado:

alert(fruits instanceof Array);

//Conversión de matrices en cadenas
//document.getElementById("demo").innerHTML = fruits.toString();

//El método join() también une todos los elementos de la matriz en una cadena.
document.getElementById("demo").innerHTML = fruits.join(" * ");

//El método pop() elimina el último elemento de una matriz:
fruits.pop();
document.getElementById("fruits").innerHTML=fruits;


//El método push() agrega un nuevo elemento a una matriz (al final):
fruits.push("Kiwi");
document.write("<br></br> nuevo dato agregado: "+fruits);

//El método shift() elimina el primer elemento de la matriz y "cambia" todos los demás elementos a un índice más bajo.
fruits.shift();
document.write("<br></br> se elino el primer elemento: "+fruits);

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
fruits.unshift("Lemon");
document.write("<br></br> nuevo elemento agregado al inicio: "+fruits);
//Eliminar datos del array
delete fruits[0];
document.write("<br></br> Se elimino el primer valor del array: "+fruits);
//cocatenar
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
document.write("<br></br>"+myChildren);
//El método splice() se puede usar para agregar nuevos elementos a una matriz:
fruits.splice(2, 0, "Lemon", "Kiwi");
document.write("<br></br> Splice: "+fruits);


//Usando splice() para eliminar elementos
fruits.splice(0, 1);
document.write("<br></br> Splice: "+fruits);


//El método slice() divide una parte de una matriz en una nueva matriz.
const citrus = fruits.slice(1);
document.write("<br></br> Slice: "+citrus);

//El método sort() ordena una matriz alfabéticamente:
fruits.sort();
document.write("<br></br> Sort: "+fruits);

//reversa
fruits.reverse();
document.write("<br></br> Reverse: "+fruits);


const persons = [{firstName:"John", lastName:"Doe", age:46},{firstName:"Nicks", lastName:"Do", age:26}];
document.getElementById("demo").innerHTML=persons[1].firstName.toString();

for (let index = 0; index < persons.length; index++) {
  console.log(persons[index]);  
}




//imports
//import "bootstrap";
//import "./style.css";


//window.onload = function(){}

//crear uuna etiquta dentro otra etiqueta en el dom
var elem = document.createElement("H1");
    elem.innerHTML = persons[1].firstName.toString()
document.querySelector("#prueba").appendChild(elem);
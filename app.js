const express =require('express');
const app =express();

app.listen(3000,function (){
    console.log("Servidor en Vivo Congratulations!");
})


























/* tipos de datos
"Hello world!" //string
'Hello world!' //string
10000 //numeros
-3.2  //numeros  
true    //boolean
false   //boolean
// array (lista)
["joe" ,"martha", "juan"]
[1,2,3]
[true,false,true,false]
/* object
{
"username":"ruan",
"score":40.2,
"hours":13,
"profesional":true,
"friends":[pedro,liena]
}
*/
// console.log(valor) --> escribir valor en consola
// document write("text") -->escribir valor en pagina
//const (no se puede cambiar el valor)
/*ESCRIBIR EN LAS VARIABLES QUE TIPO DE DATO SE ALMACENA 
var name="john";
let lastname="carter"
const PI =3.1415;
let nombrepersona="Claudia"
console.log(PI)

/*camelcase
let userName="Jefry"
*/
//let result =Numerox < Numeroy; --> Comparacion booleana
//let result =Numerox != Numeroy; --> Diferente a object 2
/*let Numerox= 10;
let Numeroy= 20;
let result =Numerox != Numeroy;
console.log(result)

let name = "Jhony";
let lastname="Bravo";
let completeName=name+" "+ lastname;
console.log(completeName);

let passwordDB = "pepe123";
let input="pepe123";
result2=input == passwordDB;

if (result2==true){
    console.log("Login Correcto")
}
else {
    console.log("Login Incorrecto")
}

let score=600;
if (score<50){
    console.log("Necesitas practicar mas")
}
else if(score >51){
console.log("Estas mejorando chavo!")
}
    else {
        console.log("Excelente eres pro chavo!")
}
let TypeCard="";
switch(TypeCard) {
    case "Debit Card" :
    console.log("You use a Debit Card");
    break;
    case "Credit Card":
    console.log("You use a Credit Card");
    break;
    default:
    console.log("You dont have a Card");
    break;
}
let count= 0;
while(count <= 50){
console.log(count);
count = count + 1;
}
let names= ["juan","jose","pedro"];
for(let i = names.length - 1;i >= 0;i-- )
{
    console.log(names[i]);
}
//console.log(names.length);
function Saludo(namePerson){
    console.log("Hello" +" " + namePerson +" " + "nice to meet you")
}
Saludo("Markus");
Saludo("pedro");
Saludo("tomy");

function sumar(n1, n2) {
    console.log(n1 + n2);
}
sumar(3,3);
sumar(20,43); */



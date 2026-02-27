// JS code here
// line comment
/*
    Multi line comment
*/ 
let i = 0;
var message = "Hello";
var str = 'another string';
var str2 = `asasa
    asasas
    asasas ${i}`;
const pi = 3.141562;

let b1 = true;
let b2 = false;

var number = 1 + 5 + "7"; // 67
var num2 = "7" + 1 + 5; // 715

const obj = {name:'Student', major:'CS', enrolled:true,
    semester: 6
};

obj.name = "Jane Doe";

const arr = [1,2,3];
arr[0] = 10;

var myVar = function(){ return 1; }

if( i == 0 ){
    // Do something here
}

for(let j=0; j<10; j++){
    //standard for increment loop   
}

const prof = {id:1,name:'Henrique',last:'Rocha'}; //object
let out = "";
for(let k in prof){// for-in creates an index.
    out += "("+ prof[k] +") ";
}

const primes = [2,3,5,7,11,13]; // array
let text = "";
for(let p of primes){ // try sub of/in to see the difference 
    text += p +"; "; // for-of = for each element in array
} 
console.log(out+"\n"+text); // display on console.

//window.alert("Welcome to my page.");
//let opt = window.confirm("Do you want to proceeed?");
//window.alert( opt );

//let typedname = window.prompt("What is your name?");

function sayHello(){
    window.alert("Hello World");
    //return "Hello World!";
}

const helloAgain = function(){
    return "Hello Again!";
}
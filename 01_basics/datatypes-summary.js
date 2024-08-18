// Primitive 
// 7 types : string(string),Number(number),Boolean(boolean),null(Object),undefined(undefined),symbol(symbol),BigInt(bigin)

const score = 100
const scoreValue =100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
const bigNumber = 7654324356654325434323n







// Reference types(Non primitive)

// Array,Objects, Functions

//Array   datatype- object
const heros =["shaktiman","naagraj","doga"];

//object   datatype-object
let myObj ={
    name:"shivangi",
    age: 22,
}


//function
//syntax--- function(){}, datatype- object function

const myFunction = function(){
    console.log("Hellow World");
    
}

// console.log(typeof isLoggedIn);




// Stack(Primitive) , Heap(Non-Primitive)



let myYoutubename ="hiteshchoudharydotcom"
let anothername = myYoutubename
anothername="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);


let userOne ={
    email: "shivangi@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

useTwo.email="user@google.com"
console.log(useTwo);
console.log(userOne);


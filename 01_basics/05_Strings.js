const name ="Shivangi"
const repoCount =50

// console.log(name+repoCount+"Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // string intercollation


const gameName = new String('hitesh-hc')  //this method of taking string is more preferable

console.log(gameName[0]);
console.log(gameName.length)

console.log(gameName.toUpperCase());

const newString =gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));

console.log(gameName.split("-"));




/*
it store collection of value
where as
object store collection of value with information
*/
// let info = ["anusha",,21,false]

let info = {
  name: "anusha", //here name is key, "anusha" is value and whole name:"anusha is property"
  age: 21,
  isMarried: false,
};
console.log(info);
console.log(info.age);
console.log(info.isMarried);
info.age = 27;
console.log(info);
console.log(`My name is ${info.name} and i am ${info.age}`);

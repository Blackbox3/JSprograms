//make a arrow function named isGreaterThan18 , pass a value , the function must return true if the given age is greater or equals to 18 otherwise return false

const isGreaterThan18=(age)=>{
  if(age>=18){
    return true;
  }
  else{
    return false;
  }
}
let result=isGreaterThan18(15) //false
let result1=isGreaterThan18(20) //true
console.log(result)
console.log(result1)
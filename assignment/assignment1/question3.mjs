//make a arrow function that take a number and return you can enter room only if the enter number is less than 18 else you can not enter

const enterRoom=(number)=>{
  if(number < 18){
    return `You can enter room`
  }
  else{
    return `You cannot enter room`
  }
}
let result = enterRoom(12) // You can enter room
console.log(result)
// ["my","name","is","anusha"]= reverse 
const makeReverse=(input)=>{
  return input.split("").reverse().join("")
  
}
let realInput = ["my", "name", "is", "anusha"];
let realOutput = realInput.map((value,i)=>{
      return makeReverse(value)
})
console.log(realOutput)
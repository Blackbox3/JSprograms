// ["my","name","is"] = ["My","Name","Is"]
const firstLetterCapital = (input)=>{
   return input.split("").reverse().join("");
};
let realInput = ["my", "name", "is"]; 
const realOutput = realInput.map((value, i)=>{
  return firstLetterCapital(value)

})
console.log(realOutput)
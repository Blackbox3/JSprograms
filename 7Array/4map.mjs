// ar1.map(()=>{}) must have return value

let ar1= [20,21,22]
let ar2= ar1.map((value,i)=>{
 return value *2
})
console.log(ar2);
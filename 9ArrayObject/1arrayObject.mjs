let product = [
  {
    name: "laptop",
    price: 100000,
  },
  {
    name: "mobile",
    price: 30000,
  },
  {
    name: "Tv",
    price: 200000,
  },
];
// let output = product.map((value,i)=>{

//   return value.name
// })
// console.log(output)
// let output1 = product.map((value,i)=>{
// return value.price

// })
// console.log(output1)
//  let output3 = product.map((value,i)=> {

//   return (`${value.name} costs Nrs${value.price}`)
//  }
// )
// console.log(output3)
// let output4 = product.filter((value,i)=>{
//   if(value.price>50000)
//     {
//       return true
//     }
//     else
//     {
//       return false
//     }

// })
// console.log(output)
let output5= product.filter((value,i)=>{
  if(value.price >50000)
    {
      return true;
    }
    else {
      return ;
    }
})
let output6 = output5.map((value,i)=>{
   return value.name
})
console.log(output6)
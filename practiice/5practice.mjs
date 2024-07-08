// let list = ["a", "abcd", "bc"];
// let list1 = list.sort((a,b)=>{
//   return a.length - b.length
// })
// console.log(list1)
let products = [
  { name: "earphone", price: 1000 },
  { name: "buds", price: 200 },
  { name: " phone", price: 30000 },
];
let productPrice = products.map((value,i)=>{
   return value.price;
})
let ascendingOrderPrice = productPrice.sort((a,b)=>{
  return a-b;
})
console.log(ascendingOrderPrice)
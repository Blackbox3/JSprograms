let products = [
  {name: "earphone",price: 1000},
  {name: "buds", price: 200},
  {name: " phone",price: 30000}
];
let productPrice = products.map((value, i) => {
  return value.price;
});
let totalPrice = productPrice.reduce((pre,curr)=>{
  return pre +curr
},0)
console.log(totalPrice)
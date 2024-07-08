//[1,,2,3]= [1,2] we can use this
// [1,2.3]=[1] we can use this
//[1,3,10]=[1,9] we cannot use this

let input = ["a" ,1, "b" ,3, "nitan"];
let output = input.filter((value, i) => {
  if (typeof(value)==="string") {
    return true;
  } else {
    return false;
  }
});
console.log(output);

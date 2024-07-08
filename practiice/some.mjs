// it either return true or false
// if the first elements is true and all will be true
// but for the false it will check all

let name =["anusha","rita","niany"]
let output = name.some((value,i)=>{
  if(value=="rrr"){
    return true;
  }
  else{
    return false;
  }
})
console.log(output)
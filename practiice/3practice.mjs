let list = [ 2, 4, 9 ,6]
let output =list.every((value,i)=>{
  if(value % 2===0)
     {
      return true
     }
    else {
     return  false  
    }
})
console.log(output)
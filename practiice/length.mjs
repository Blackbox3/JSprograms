let name = ["anusha","anita","sissfsfsta"]
let output = name.reduce((pre,curr)=>{
   if(pre.length > curr.length){
      return pre
   }
   else{
      return curr
   }
},"")
console.log(output)
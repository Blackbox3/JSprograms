//sum of the array = [ 1 ,2 , 3, 4,5, 6]

let list = [1,2,4,6]
let list1 = list.filter((value,i)=>{
  if(value % 2 ===0)
    {
      return true
    }
    else{
      return false
    }
})
let list2 =list1.reduce((pre,curr)=>{
  return pre + curr;
},0)
console.log(list2)
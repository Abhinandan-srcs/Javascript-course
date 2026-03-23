/*const nums=[10,20,30]
const swap=[10,20,30]

function lastValue(nums){
  const last = nums.length -1 ;
  console.log(nums[last]);
}

lastValue(nums);

function swapValues(){
  [swap[0] , swap[swap.length-1]] =[swap[swap.length-1] , swap[0]];
  console.log(swap);
  

}
swapValues(swap);
function loop(){
  for (let i =0 ; i<6;i++){
    console.log(i);

  }
}
loop(10);
function addOne(nums){
  for (let i=0; i<nums.length-1; i++){
    nums[i]=nums[i]+1;
  console.log(nums);
  }
  
}
addOne(nums);

let nums1=[1,2,3];
let swap2=[1,2,3];

function addArrays(nums1,swap2){
  for (let i=0; i<nums1.length;i++){
    nums1[i]+=swap2[i];
  }
  return nums1;
}
const result=addArrays(nums1,swap2);
console.log(result);
*/
let names=['green','red','blue'];
function findElement(key){
  for (let i=0;i<names.length;i++){
    if (names[i]===key){
      return i;
    }
  }
  return -1;
}
console.log(findElement("red"));

let food=["egg","ham","egg","ham","egg"];
let arr =[];
function removeDuplicates(){
  let count=0;
  
  for (let i=0;i<food.length;i++){
    if(arr.includes(food[i])){
      continue;
    }
    else{
      arr.push(food[i]);
    }
    }
    return arr;
  }



console.log(removeDuplicates());
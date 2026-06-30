/*Practice_Task
-------------*/
//Find largest number in the given array method1
const number = [15,10,20,7,5,35]; 
  var largest=number[0];
for(let i=0;i<number.length;i++)
{
   
if(number[i]>largest)
{
    largest=number[i];
}
}
console.log(largest);


//Find largest number in the given array method2
function largest_Number(arr){
  var largest=arr[0];
for(let i=0;i<arr.length;i++)
{
   
if(arr[i]>largest)
{
    largest=arr[i];
}

}
return largest;
}
const arr=[15,10,20,7,5,35];
console.log(largest_Number(arr));



 //Find largest number in the given array(Sort) Method 3
const arr2 = [10, 45, 67, 23, 89];
arr2.sort((a, b) => b - a);
console.log(arr2[0]);


//===================================================

//Reverse array number method1
function reverse_Array(no){
    const reverse=[];
for(let i=no.length-1;i>=0;i--)
{
reverse.push(no[i]);
}
return reverse;
}
console.log(reverse_Array(no=[1,2,4,7,9]));


//Reverse array number method2(Direct)
const arr1 = [1,2,3,4,5];
console.log(arr1.reverse());


//Reverse array number(Without modifying original) Method 3 
const arr3 = [1,2,3,4,5];
const reversed = [...arr3].reverse();
console.log(reversed);

//============================================================

//Remove duplicates method1
function removeDuplicate(ar){
var res = [];
for(let i=0;i<ar.length;i++)
{
if(!res.includes(ar[i]))
{
    res.push(ar[i]);
}
}
return res;
}
console.log(removeDuplicate(ar = [1,2,3,2,5]));


//Remove duplicates method2
const arx = [1,2,2,3,4,4,5];
const unique = arx.filter((item,index)=>
    arx.indexOf(item)===index
);
console.log(unique);


//Remove duplicates method3
const ard = [1,2,2,3,4,4,5,6,6];
const uniq = [...new Set(ard)];
console.log(uniq);
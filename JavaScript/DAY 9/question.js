//4.reverse the value of array using increment\
function reverseArray(arr){
    let newArray=[];
        for(let i=0;i<arr.length;i++){
newArray.unshift(arr[i]);
        }
        return newArray
    
}
console.log(reverseArray([1,2,3,4,5]));
//4.reverse the value of array using decrement
function reverseArray(arr){
    let reversedArr = [];
    for(let i = arr.length - 1; i >= 0; i--){
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}
const numbers =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
//linear search
/*function linearSearch(mylist,number){
    if(!mylist.includes(number)) return `this number is not in your list.`;
    for (let i = 0; i < mylist.length; i++){
        if (mylist[i]==number) return `the index of your number is : ${i}.`;
}};

console.log(linearSearch(numbers,10))
console.log(linearSearch(numbers,73))
*/
//binary search(should be sorted already)
/*function binarySearch(mylist,number){
    if(!mylist.includes(number)) return `this number is not in your list.`;
    let startIndex=0;
    let stopIndex=mylist.length;
    while (startIndex !== stopIndex){
        let midIndex= parseInt((startIndex+stopIndex)/2);
        if (mylist[midIndex]===number) return `the index of your number is : ${midIndex}.`
        else if (mylist[midIndex]>number){
            stopIndex=midIndex;
        }
        else if (mylist[midIndex]<number){
            startIndex=midIndex;
        }
    }
}
console.log(binarySearch(numbers,8))
console.log(binarySearch(numbers,9))
console.log(binarySearch(numbers,88))*/
//binary search recursively
function binarySearchRecursive(mylist,number,startIndex,stopIndex){
    if(!mylist.includes(number)) return `this number is not in your list.`;
    let midIndex= parseInt((startIndex+stopIndex)/2);
    if (mylist[midIndex]===number) return midIndex
    else if(mylist[midIndex]<number) return binarySearchRecursive(mylist,number,midIndex,stopIndex)
    else if(mylist[midIndex]>number)return binarySearchRecursive(mylist,number,startIndex,midIndex)

}
console.log(binarySearchRecursive(numbers,8,0,numbers.length))
console.log(binarySearchRecursive(numbers,5,0,numbers.length))
console.log(binarySearchRecursive(numbers,16,0,numbers.length))
console.log(binarySearchRecursive(numbers,78,0,numbers.length))

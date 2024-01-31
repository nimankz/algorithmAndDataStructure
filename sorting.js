const numbers =[1,4,5,8,2,9,7,6,3,10];
//bubble sort
/*function bubbleSort(mylist){
    let temp
    for(var i=0; i<mylist.length; i++){
        for(let j=i;j>0;j--){
            if (mylist[j]>mylist[j+1]){
                temp = mylist[j]
                mylist[j] = mylist[j+1]
                mylist[j+1] = temp
            }
        }
    }
}
console.log(numbers)
bubbleSort(numbers)
console.log(numbers)*/
//recursive sort
function sortRecursive(mylist){
    if([1,0].includes(mylist.length)) return mylist

    else {
        const firstNumber=mylist[0];
        const arr1=[];
        const arr2=[];
        for(let i=1; i<mylist.length; i++){
            if(mylist[i]>firstNumber) arr2.push(mylist[i])
            else if(mylist[i]<firstNumber) arr1.push(mylist[i])
        }
        return sortRecursive(arr1).concat([firstNumber]).concat(sortRecursive(arr2))
    }
}

console.log(sortRecursive(numbers))

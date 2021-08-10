// task1
// Write a function which receives an array and a number as arguments and returns a new array
// from the elements of the given array which are larger than the given number.

// let array = [10, 25, 16, -5, 30, 15, 24];
// let number = 16
let array = [1, 1, 2, -3, 0, 8, 4, 0];
let number = 9

function comparing (arr, num){
    let result = arr.filter(arrayItem => arrayItem  > num );
    let i = 0;
    if( result.indexOf(result[i]) === -1 ){
        return 'Such values do not exist.'
    }
    return result
}
comparing (array,number)

// task2
// Write a function, which receives two numbers as arguments and finds all numbers between
// them such that each digit of the number is even. The numbers obtained should be printed in a
// comma-separated sequence on a single line.

// let num1 = 19;
// let num2 = 42;

// let num1 = 99;
// let num2 = 199;

let num1 =+prompt("Enter a number")
let num2 =+prompt("Enter a number")

function getEvenNumbers (a,b){
    let arr = [];
    let result = [];
    for(let i = a; i <= b; i++){
        arr.push(i);
    }  
    arr = arr.filter(m => m % 2 === 0) 
    for(let i = 0; i < arr.length; i++){
        arr[i] = '' + arr[i];
        arr[i] = arr[i].split('');
        if(arr[i].every(e => e % 2 === 0)){
            result.push(arr[i].join(''));
        } 
    }
    if(result.length === 0){
       return 'Such numbers does not exist.'
    }else{
      return result.join(',')
    }
}
getEvenNumbers(num1,num2)

// task3
// Write a recursive function to determine whether all digits of the number are odd or not.

function numberOddOrNot (number){
    let odd = true;
    number = '' + number;
    let lastDigit = number % 10;
    if(lastDigit % 2 === 0 ){
        odd = false;
        return odd;
    }
    if(number.length > 1){
        number = (number-lastDigit) / 10;
        odd = numberOddOrNot (number);
    }
    return odd
}

// task4
// Given an array of numbers. Write a recursive function to find its minimal positive element. (if such
// element does not exist, return -1)․


function getMinNumber(arr, j = 0){
    let result;
    if (arr[j] >= 0){
        result = arr[j];
    } else {
        result = arr[j+1]; 
    }
    if (arr.length === 0 ){
        return result
    }
    if(result === undefined){
        return -1
    }
    for(let i = j+1; i < arr.length; i++){
        if( result > arr[i] && arr[i] >= 0 ){
            result = arr[i]
        }
    }
    arr.shift()
    if( result > getMinNumber(arr, j)){
        result = getMinNumber(arr, j)
    }
    return  result
}

// task5
// Given an array of numbers which is almost sorted in ascending order.  Find the index where sorting
// order is violated.

//let arr = [2, 12, 15, 48, 64];
let arr = [-9, -4, -4, 3, 12, 4, 5];

function findIndexOfViolatedEl (arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i+1]){
            return i+1;
        }
    }
    return -1;
}
findIndexOfViolatedEl (arr)

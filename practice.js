//Create a function that takes two numbers as arguments and returns their sum.
//Q.A.1
function add(a,b){   //Manju
    return a+b;
}
console.log(add(2,3));

//QA-Second method
function sum(c,d){            //manju
    for(let i=1;i<=d;i++){
        c++;
    }
    return c;
};
console.log(sum(2,3));

//QA-Third method
function sumofTwo(c,d){          //manju
    for(let i=1;i<=d;i++){
        c--;
    }
    return c;
};
console.log(sumofTwo(6,3));

//QA.2  
//Write a function that takes an integer minutes and converts it to seconds.
function MintoSec(a){           //manju
    return a*60;
}
console.log(MintoSec(3))

//QA.2 
const MinSec = a => a * 60;
console.log(MintoSec(3));

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
//QA.3
function Increment(a){          //manju
    return ++a;
}
console.log(Increment(2));

//Create a function that takes the age in years and returns the age in days.
//QA.4
function AgeInDays(age){           //manju
    if((age%100===0 || age%400===0) && age%4===0){
        result=age*366;
    }else{
        result=age*365;
    }
    return result;
}
console.log(AgeInDays(20));

//Create a function that takes voltage and current and returns the calculated power.
//QA.5
function CalculatePower(v,I){          //manju
    return power=v*I;
}
console.log(CalculatePower(4,5));

//Write a function that returns the string "something" joined with a space " " and the given argument a.
//QA.6
function Something(a){               //manju
    return "Something"+" "+a;
}
console.log(Something("a"));

//Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
//QA.7
function SumTen(a,b){                //manju
    if(a===10 || b===10 || a+b===10){
        return true;
    }else{
        return false;
    }
}
console.log(SumTen(6,4));

//Create a function that takes two strings as arguments and returns either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
//QA.8
function TotalLength(a,b){            //manju
    if(a.length===b.length){
        return true;
    }else{
        return false;
    }
}
console.log(TotalLength("manju","mohith"));

//Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.
//QA.9
const greet=(greeting)=>{             //manju
    return "good morning "+greeting;
}
console.log(greet("manju"));

//Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).
//QA.10
function PhoneNumber(phone){          //manju
    p="(";
    for(let i=0;i<phone.length;i++){
        p+=phone[i];
        if(i===2){
            p+=") "
        }else if(i===5){
            p+="-";
        }
    }
    return p;
    
}
console.log(PhoneNumber([0,1,2,3,4,5,6,7,8,9])); //(012) 345 6789

//Create a function that returns an array of strings sorted by length in ascending order. sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
//QA.11
function sortByLength(array1){
    for(let i=0;i<array1.length;i++){
        for(var j=i+1;j<array1.length;j++){
            if(array1[i].length>array1[j].length){
                [array1[i],array1[j]]=[array1[j],array1[i]]
            }
        }
    }
    return array1;
}
console.log(sortByLength(["a", "ccc", "dddd", "bb"]));

//QA.11 SECOND METHOD
let s=["a", "ccc", "dddd", "bb"]
console.log(s.sort());

//Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
//findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
//QA.12
function findLargestNums(array2){
    const maxArray=[]
    for(let i=0;i<array2.length;i++){
        maxArray.push(Math.max(...array2[i]));
    }
    return maxArray;
}
console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));

//Create a function that takes an array of numbers and returns the second largest number.
//QA.13
let arr=[10,40,30,50,60,49,55]; //manju
let a=arr.sort();
console.log(a[a.length-2]);

//13.SECOND METHOD
var a1=[10,40,50,30,20,60];  //manju
let largest=a1[0];
let second_largest=0;
for(var i=1;i<a1.length;i++){
    if(a1[i]>largest){
        second_largest=largest;
        largest=a1[i];
    }
}
console.log(second_largest);

//Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates)
//QA.14 
let arra=[1, 0, 1, 0]             //manju
let empty=[];
for (var i of arra){
    if(empty.indexOf(i)==-1){
        empty.push(i)
    }
}
console.log(empty); //index -1 means that value not present in empty so it adds

//QA.14 SECOND METHOD
c=[1,0,1,0];               //manju
let b=new Set(c);
console.log(Array.from(b));

//Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.
//QA.15
let d=[2, 2, 2, 3, 4, 4, 4];       //manju
let emp=[];
for(let i=0;i<d.length;i++){
    flag=true;
    for(let j=0;j<d.length;j++){
        if(d[i]===d[j] && (i !== j)){
            flag=false;
            break;
        }
    }
    if(flag){
        emp.push(d[i]);
    }
}
console.log(emp);
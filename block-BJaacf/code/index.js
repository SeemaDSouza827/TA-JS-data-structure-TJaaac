// 1. Create an array named numbers and store 5 number values in it
let numbers=[67, 87, 97, 47, 27];

// 2. Calculate the sum of array items and print it to the console using console.log()
let sum=0;
for(let i=0; i<numbers.length; i++){
    sum +=[i];
}
console.log(sum);

// 3. Calculate the average of array items and print it to the console using console.log()
let avg=0;
let sum1=0;
for(let i=0; i<numbers.length; i++){
    sum +=[i];
    avg=sum/numbers.length;
}
console.log(avg);

// 4. Find the highest number in the array and print it to the console using console.log()
let highest=0;
for(let i=0; i<=numbers.length;i++){
    if(highest<numbers[i]){
        highest=numbers[i];
    }
    console.log(highest);
}
// 5. Find the lowest number in the array and print it to the console using console.log()
let lowest=numbers[0];
for(let i=0; i<numbers.length;i++){
    if(lowest>numbers[i]){
        lowest=numbers[i];
    }
    console.log(lowest);
}
//      let numbers=["akash","adarsh","rahul","rohit","asim","CHICHODIYA"];
//  	let highStr = "";
//  	for(let i=0; i<numbers.length;i++){
// 	    if(highStr.length < numbers[i].length){
// 	        highStr=numbers[i];
// 	    }
// 	    console.log(highStr);
// 	}
// 6. Find the even numbers in the array and print them to the console using console.log()
for(let i=0; i<numbers.length;i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
// 7. Find the odd numbers in the array and print them to the console using console.log()
for(let i=0; i<numbers.length;i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
for(let i=0; i<numbers.length;i++){
    if(i % 5 === 0){
        console.log(i);
    }
}
// 9. Log all the element of the array one by one
for(let i=0; i<numbers.length;i++){
        console.log(i);
}
// 10. Find all the number in the array that is divisible by 3
for(let i=0; i<numbers.length; i++){
    if (i%3===0){
        console.log(i);
    }
}
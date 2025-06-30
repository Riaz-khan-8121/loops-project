// loops projects


// 1. Create an array of fruits like ["apple", "banana", "cherry"] and use a loop to log each fruit
// in the console.


// let fruits= ["apple" , "banana" , "chery"];
// for(let i=0; i<fruits.length; i++) {
//     console.log(fruits[i]);
// }




// 3. Use a for loop to print numbers from 1 to 10 in the browser console.

// for(let i=0; i<=10; i++) {
//     console.log(i);
// }



// 4. Use a while loop to print numbers from 5 to 1 in the console.

// let num=5;
// while(num >= 1) {
//     console.log(num);
//     num--;
// }



// 6. Change the text of a paragraph with ID status to "Loading..." using
// document.querySelector.


// let status=document.querySelector("#status")

// status.innerHTML="Loading..."






// 7. Use a loop to calculate the sum of numbers in an array [5, 10, 15] and display the total in
// a paragraph with ID sum.


// let para=document.querySelector("#sum");
// let arr=[5,10,15];

// let sum=0;
// for(let i=0; i<arr.length; i++) {
//     sum +=arr[i];
// }
// para.innerHTML=sum;




// 8. Loop through an array of cities ["Karachi", "Lahore", "Quetta"] and display them as a
// single string in a div with ID cities.


// cities=document.querySelector("#cities");
// city=["karachi" , "lahore" , "Quetta"];

// for(let i=0; i<city.length ; i++) {
//     cities.innerHTML += city[i] + " ";
// }





// 9. Write a loop that counts from 1 to 20 and logs only the even numbers in the console.


// for(let i=0; i<=20; i++) {
//     if(i%2==0) {
//         console.log(i);
//     } else {
//         continue;
//     }
// }



// 10. Create an array of numbers [45, 22, 89, 100], and use a loop to find and display the
// largest number in a paragraph with ID max


// let arr=[45 , 22 , 89 , 100];

// for(let i=0; i<arr.length; i++) {
//     if(arr[i] > arr[i+1]) {
//             max=arr[i];
//             }
//             console.log(max)
// }






// 11. Use document.querySelector to select a div with ID result and change its text to "Task
// Complete".

// let result=document.querySelector("#result");
// result.textContent='task complete';





// 12. Given an array of temperatures [30, 35, 32, 40], use a loop to calculate the average and
// display it inside an element with ID averageTemp.


// arr=[30,35,32,40];

// let avg=0;
// for(let i=0; i<arr.length; i++) {
//     avg+=arr[i];
// }

// avg=avg/arr.length;

// console.log(avg);



// 13. Create a loop that adds all the numbers from 1 to 100 and shows the total inside a
// paragraph with ID totalSum.


// let sum=0;
// for(let i=0; i<=100; i++) {
//     sum +=i;
// }
// console.log(sum)





// 14. Use a loop to print all values of the array ["dog", "cat", "bird"] into a single paragraph with
// ID animals.



// let animals=["dog" , "cat" , "bird"];

// for(let i=0; i<animals.length; i++) {
//     document.write(animals[i] + " ");
// }




// 15. Use document.querySelector to select a heading with ID title and change its text to
// "Welcome to JavaScript!".



// let title=document.querySelector("#title");

// title.textContent='welcome to javascript';





// 16. Create a loop that prints all numbers between 1 and 50 that are divisible by 5, and log
// them to the console.



// for(let i=0; i<50; i++) {
//     if(i%5==0) {
//         console.log(i);
//     }
// }





// 17. Given an array of scores [80, 60, 90, 70], calculate how many scores are above 75 and
// display the count in a div with ID highScores.


// let score=[80 , 60 , 90 , 70];
// let highScores = document.getElementById("highScores");
// let count = 0;
// for (let i = 0; i<score.length; i++) {
//     if (score[i] > 75) {
//             count++;
//             }
// }
// highScores.textContent = count;




// 18. Select an element with ID message and change its text to "Updated successfully" using
// document.querySelector.


// let message = document.querySelector("#message");
// message.textContent = "Updated successfully";




// 22. Use a loop to count how many numbers in an array [3, 8, 6, 1, 9, 2] are even.

// let arr=[3,8,6,1,9,2];
// let count=0;
// for(let i=0; i<arr.length; i++) {
//     if(arr[i]%2==0) {
//         count++;
//     } 
// }
// console.log(count)





// 27. Write a loop that checks if a number 25 exists in the array [10, 20, 30, 40, 25].

// let arr=[10,20,30,40,25];

// for(let i=0; i<arr.length; i++) {
//     if(arr[i]=="25") {
//         console.log("Number 25 exists in the array");
//     }
// }






// 30. Given an array [1, 2, 3, 4, 5], reverse the array manually using a loop (don’t use
//     .reverse()).


// let arr=[1,2,3,4,5];
// arr.reverse();
// console.log(arr);


// 32. Create a loop that finds the difference between the largest and smallest numbers in an

// let arr=[11,4,99,2,47];
// let max=arr[0];
// let min=arr[0];
// for(let i=0; i<arr.length; i++ ) {
//     if(arr[i] >  max) {
//             max=arr[i];
//             }
//             if(arr[i] < min) {
//                     min=arr[i];
//                     }   
// }
// console.log(min);




// 33. Given an array [0, -1, -5, 6, 8, -3], count how many negative numbers are in the array.

// let arr=[0,-1,-5,6,8,-3];

// let count=0;
// for(let i=0; i<arr.length; i++) {
//     if(arr[i] < 0) {
//         count++;
//     }
// }
// console.log(count)







// 35. Use a loop to remove all zeroes from an array [0, 1, 0, 3, 0, 5] and store the non-zero
// elements in a new array.
// let arr=[0,1,0,3,0,5];
// let newArr=[];
// for(let i=0; i<arr.length; i++) {
//     if(arr[i] !== 0) {
//         newArr.push(arr[i]);
//     }

// }
// console.log(newArr)



// 39. Given an array [2, 2, 2, 2, 2], use a loop to check whether all elements are equal.
// let arr=[2,2,2,2,2];
// let count=0;
// for(let i=0; i<arr.length; i++) {
//     if(arr[i] === arr[0]) {
//         count++;
//     }
// }
// if(count === arr.length) {
//     console.log("All elements are equal");
// }
// else {
//     console.log("Not all elements are equal");
// }
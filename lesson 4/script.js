// //             Index Numbers:    0      1      2      3      4
// const stockDailyClosePrices = [75.62, 74.14, 78.52, 80.21, 79.66];

// // Create a result container to store the aggregation results
// let sumOfStockDailyClosePrice = 0;

// // Loop through stock daily close prices
// for(let i = 0; i < stockDailyClosePrices.length; i++) {
// 	// Add each value of stock daily close price into result container
// 	sumOfStockDailyClosePrice += stockDailyClosePrices[i];
// }

// console.log(sumOfStockDailyClosePrice);


// // exercise 1
// const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];

// // Write your code below
// let totalSumMSFT = 0;

// for (let i = 0; i < MSFTStockClosingPrices.length; i++) {
//     totalSumMSFT += MSFTStockClosingPrices[i];
// }

// console.log("The total sum of closing prices of MSFT is " + totalSumMSFT);

// exercise 2
// const MSFTStockClosingPrices = [
//     {
//         Monday: 254.12,
//         Tuesday: 253.12,
//         Wednesday: 256.97,
//         Thursday: 257.52,
//         Friday: 258.93
//     },
//     {
//         Monday: 292.20,
//         Tuesday: 289.73,
//         Wednesday: 291.04,
//         Thursday: 294.55,
//         Friday: 296.29
//     }]

// // // Write your code below (Cerdic)
// // let totalArray = 0;
// // for (let i = 0; i < MSFTStockClosingPrices.length; i++) {
// //     totalArray += MSFTStockClosingPrices[i]['Monday'] + MSFTStockClosingPrices[i]['Tuesday'] + MSFTStockClosingPrices[i]['Wednesday'] + MSFTStockClosingPrices[i]['Thursday'] + MSFTStockClosingPrices[i]['Friday'];
// // }

// // console.log(totalArray.toFixed(2));

// // Write your code below (Yusiang)
// let result = 0;
// for (i = 0; i < MSFTStockClosingPrices.length; i++) {
//     result += MSFTStockClosingPrices[i]['Monday'];
//     result += MSFTStockClosingPrices[i]['Tuesday'];
//     result += MSFTStockClosingPrices[i]['Wednesday'];
//     result += MSFTStockClosingPrices[i]['Thursday'];
//     result += MSFTStockClosingPrices[i]['Friday'];
// }

// console.log(result.toFixed(2));

// for-of loop is running the indexes 
// const data = [1, 2, 3, 4];

// for (let value of data) {
// 	console.log(value);
// }

// Expected Output:
// 1
// 2
// 3
// 4

// for-in loop is grabbing only the key
// const data = {
// 	name: "Tommy",
// 	contactNo: "12345678"
// }

// for (let key in data) {
// 	console.log(key);
// 	console.log(data[key]);
// }

// Expected Output:
// name
// Tommy
// contactNo
// 12345678


// exercise 3
// const MSFTStockClosingPrices = [
//     {
//         Monday: 254.12,
//         Tuesday: 253.12,
//         Wednesday: 256.97,
//         Thursday: 257.52,
//         Friday: 258.93
//     },
//     {
//         Monday: 292.20,
//         Tuesday: 289.73,
//         Wednesday: 291.04,
//         Thursday: 294.55,
//         Friday: 296.29
//     }]

// Write your code below (Cerdic)
// let sumofMSFT = 0;
// for (let value in MSFTStockClosingPrices) {
//     sumofMSFT += MSFTStockClosingPrices[value]['Monday'] + MSFTStockClosingPrices[value]['Tuesday'] + MSFTStockClosingPrices[value]['Wednesday'] + MSFTStockClosingPrices[value]['Thursday'] + MSFTStockClosingPrices[value]['Friday'];
// }

// console.log("The total sum of closing prices of MSFT is " + sumofMSFT.toFixed(2));

// let result = 0;
// for (let obj of MSFTStockClosingPrices) {
//     result += obj['Monday'];
//     result += obj['Tuesday'];
//     result += obj['Wednesday'];
//     result += obj['Thursday'];
//     result += obj['Friday'];
// }

// console.log(result);


// const MSFTStockClosingPrices2 = [
//     [254.12, 253.12, 256.97, 257.52, 258.93],
//     [292.20, 289.73, 291.04, 294.55, 296.29]
// ]

// let sumofMSFT2 = 0;

// for (let arr of MSFTStockClosingPrices2) {
//     for (let item of arr) {
//         sumofMSFT2 += item;
//     }
// }

// console.log(sumofMSFT2.toFixed(2));


// exercise 4
// const MSFTStockClosingPrices3 = [
//     {
//         Monday: 254.12,
//         Tuesday: 253.12,
//         Wednesday: 256.97,
//         Thursday: 257.52,
//         Friday: 258.93
//     },
//     {
//         Monday: 292.20,
//         Tuesday: 289.73,
//         Wednesday: 291.04,
//         Thursday: 294.55,
//         Friday: 296.29
//     }]

// Write your code below
// let i = 0;

// let result3 = 0;

// while (i < 2) {
//     result3 += MSFTStockClosingPrices3[i]['Monday'];
//     result3 += MSFTStockClosingPrices3[i]['Tuesday'];
//     result3 += MSFTStockClosingPrices3[i]['Wednesday'];
//     result3 += MSFTStockClosingPrices3[i]['Thursday'];
//     result3 += MSFTStockClosingPrices3[i]['Friday'];
//     i++;
// }

// console.log(result3);


// function
// function sayHelloThrice() {
//     console.log("Hello");
//     console.log("Hello");
//     console.log("Hello");
// }

// sayHelloThrice();


// Defining a function
// function findMax() {
// 	let creditRating = [5, 1, 3, 2, 1, 4];
// 	let maxRating = creditRating[0];

// 	for (let rating of creditRating) {
// 		if (rating > maxRating) {
// 			maxRating = rating;
// 		}
// 	}
// 	console.log(maxRating);
// }

// findMax();

// exercise 5
// function getBetween() {
// 	const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
// 	let i = 0;
// 	// Write your code below (grab each number and put inside closing variable, then run i++ and the variable changes inside the array)
// 	for (let closing of MSFTStockClosingPrices) {
//         if (closing > 254 && closing < 257) {
//             i++;
//         }
//     }
//     console.log("Number of closing prices between 254 and 257: " + i);
// }

// getBetween();

// creditRatingCompanyA = [5, 1, 3, 2, 1, 4];
// creditRatingCompanyB = [7, 8, 5, 3, 9, 6];
// creditRatingCompanyC = [6, 4, 3, 6, 3, 5];

// // creditRating is a param that when calling findMax(here must input something so that it can be passed to function findMax(creditRating))
// function findMax(creditRating) {
	
// 	maxRating = creditRating[0];

// 	for (let rating of creditRating) {
// 		if (rating > maxRating) {
// 			maxRating = rating;
// 		}
// 	}
// 	console.log(maxRating);
// }

// findMax(creditRatingCompanyA);
// findMax(creditRatingCompanyB);
// findMax(creditRatingCompanyC);


// exercise 6
// const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
// const AAPLStockClosingPrices = [256.45, 255.25, 259.10, 260.75, 261.88];


// // Write your code below
// function calValue(stockClosingPrices) {
//     let i = 0;
// 	// Write your code below (grab each number and put inside closing variable, then run i++ and the variable changes inside the array)
// 	for (let closing of stockClosingPrices) {
//         if (closing > 254 && closing < 257) {
//             i++;
//         }
//     }
//     console.log("Number of closing prices between 254 and 257: " + i);
//     return 'Hello';
//     return(i);
// }

// // return i's value into the MSFTStockClosingPrices param = i value stored into count or if return xxx, it will console.log whatever returned
// let count = calValue(MSFTStockClosingPrices);
// console.log(count);

// function makeGreeting() {
//     return "Hello World";
// }

// does not take any inputs because () is empty, and returns "hello world" same as line 268-269
// const makeGreeting = () => "Hello World"

// let data = makeGreeting();
// console.log(data);

// function addTwoNumbers(num_1, num_2) {
// 	return num_1 + num_2;
// }

// const addTwoNumbers = (num_1, num_2) => num_1 + num_2;

// extra practice

const data = [[1, 2, 3, 4]. [2, 3, 4, 5]];

let result = 0
for (let num of data) {
    result += num[0];
    result += num[1];
    result += num[2];
    result += num[3];
}
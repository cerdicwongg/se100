



// exercise 5 
const companyName = "Metaa"

// Write your code below
console.log(companyName.substring(0, 4));
console.log(companyName.substring(0, 4).toUpperCase());



// exercise 6
const DayOneClosingPrice = "87.14";
const DayTwoClosingPrice = "84.22";

// Do not modify anything above
// Write your code below

let DayOneClosingPriceNew = parseFloat(DayOneClosingPrice);
let DayTwoClosingPriceNew = parseFloat(DayTwoClosingPrice);

let totalSum = DayOneClosingPriceNew + DayTwoClosingPriceNew;
let totalCount = 2;
let avg = totalSum / totalCount;

console.log(avg);


// exercise 7
const TSLAClosingPrices = [230.12, 221.45, 225.61, 219.48, 227.52]

// Write your code below

const totalSumforTSLA = TSLAClosingPrices[0] + TSLAClosingPrices[1] + TSLAClosingPrices[2] + TSLAClosingPrices[3] + TSLAClosingPrices[4];
const totalCountforTSLA = TSLAClosingPrices.length;

const avgPriceforTSLA = totalSumforTSLA / totalCountforTSLA;

console.log(avgPriceforTSLA);


// exercise 8
const AAPLCurrentBar = {
	open: 81.12,
	high: 82.59,
	low: 80.09,
	close: 84.71
}

const AAPLPrevBar = {
	open: 81.02,
	high: 82.49,
	low: 79.09,
	close: 83.71
}

// Write your code below
let totalAAPLOpen = AAPLPrevBar['open'] + AAPLPrevBar['close'];
let avgtotalAAPLOpen = totalAAPLOpen / 2;
console.log(avgtotalAAPLOpen);

let totalAAPLClose = AAPLCurrentBar['open'] + AAPLCurrentBar['close'] + AAPLCurrentBar['high'] + AAPLCurrentBar['low'];
let avgAAPLClose = totalAAPLClose / 4;
console.log(avgAAPLClose);

let max = Math.max(AAPLCurrentBar['high', 'open', 'close']);
console.log(max);
// console.log(Math.max(AAPLCurrentBar['high'], AAPLCurrentBar['open'], AAPLCurrentBar['close']));

let low = Math.min(AAPLCurrentBar['low'], AAPLCurrentBar['open'], AAPLCurrentBar['close']);
console.log(low);



// exercise 1
function getNumberPromise() {
    // Write your code here
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 2000)
    }) 

}

// Test the function - Do not modify
getNumberPromise().then((value) => {
    console.log(value); // Should log 10 after 2 seconds
});

// exercise 2
function fetchData() {
    // Write your code here
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data retrieved')
        }, 1000);
    })
}

function processData(data) {
    // Write your code here
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data + ' and processed')
        }, 2000);
    })
    
}

function displayData(data) {
    // Write your code here
    console.log(data);
}

// Chaining the functions
fetchData()
    .then((data) => processData(data))
    .then((processedData) => displayData(processedData));


// bonus
function waitAndLog(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}

// Your code here to execute the tasks in sequence



// exercise 3

// Simulates fetching data from a server with a delay - Do not modify
async function fetchData(serverName) {
    console.log(`Fetching from ${serverName}...`);
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 3000 + 1000)); // Simulate delay
    return `Data from ${serverName}`;
}

// Write your code here to fetch data from Server A, B, and C one by one


// Call the main function - Do not modify
getAllData();


// AF1MCG8XA4ZGER08


// exercise 6
https://www.alphavantage.co/query?function=EARNINGS&symbol=MSFT&apikey=AF1MCG8XA4ZGER08


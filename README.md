# node-client

The purpose of this project is to query an Azure Function that will accept a JSON array of random integers as the input and output the integer(s) with the highest number of
occurrences and the number of occurrences.

This client will generate a random array of 100 integers, between 0 and 9, call the Azure Function and log to the output to the console.

To run this project:
1) clone the repo
2) run `npm install`
3) run `node index.js`

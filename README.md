# fibonacci_api
A REST API for the Fibonacci sequence

For this exercise I am using node and an express API.

# fibonacci.js

In this document the logic to get the number in the sequence given an index is made, basically if the index is 0 or 1 the function returns the same number, if its 2, the function returns 1. If its a bigger index then we can calculate the number just adding the both previous numbers, we do this in a for loop starting on index 3 that is the one we are starting to calculate until we reach our desired index, we add the two previous numbers (index1 and index 2 in this example) and we go on from there, when we reach our desire index we return our calculated number

# index.js

In this document we have the express API, I just have 2 endpoints, the entry one "/" it will just return a hello world to validate a running API, and we have our /fibonacci endpoint, this endpoint will receive a parameter as a get protocol that is going to be the index, it will send that parameter to our fibonacci function, and return the calculated number in the sequence, I am returning this result in a JSON format, I am returning the index and the number.

Example to use the endpoint:

URL
http://localhost:3000/fibonacci?index=10

RESULT
{ index: '10', number: 55 }
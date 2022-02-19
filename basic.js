/* variables */
var deposit = 400;

/* conditions */
if (deposit > 500) { }
else if (deposit < 500) { }
else if (deposit >= 500) { }
else if (deposit <= 500) { }
else if (deposit == 500) { }
else if (deposit != 500) { }
else { }

/* array */
const numbers = [45, 90, 34, 43, 41];
//know how many elements... will return 5 here as there are 5 elements.
const numbersCount = numbers.length
//add element, 111 will be added to the last position in the array
numbers.push(211)
//minus element, the element in last position will be removed
numbers.pop()
//change the element in the position of third bracket
numbers[1] = 25
//check whether an element is included in the array:
if (numbers.indexOf(222) != -1) {

}
else if (numbers.includes(222)) {
    //will return true if 222 is an element of the array, false if not.
}

/* loop */
//while, for(we will use for of when working with array)
for (const number of numbers) {

}

/* functions */
function fullName(first, second) {
    const name = first + " " + second;
}

/* object */
const bottle = { color: 'yellow', contain: 'water', price: 1221 }
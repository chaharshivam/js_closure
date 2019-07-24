// Challenge 1
function addTwo(num) {
	return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
	return word + 's';
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
	array.forEach( (elm, i, arr) => {
		arr[i] = callback(elm);
	});
	return array;
}

console.log(map([1, 2, 3], addTwo));

// Challenge 4
let res = '';
var array = ['a', 'b', 'c', 'd'];
function forEach(array, callback) {
	for (var i = 0; i < array.length; i++) {
		concat(array[i]);
	}
}

function concat(word) {
	res += word;
	return word;
}

console.log( forEach(array, concat) );
console.log(res);
// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
	let arr = [...array];

	arr.forEach( (elm, i, arr) => {
		arr[i] = callback(elm);
	});

	return arr;
}

//Extension 2
function reduce(array, callback, initialValue) {
	let acc = initialValue;

	array.forEach( (elm, i, arr) => {
		acc = callback(acc, elm);
	});

	return acc;
}

var nums = [4, 1, 3];
var add = function(a, b) { return a + b; }
reduce(nums, add, 0);

//Extension 3
function intersection(...arrays) {
	return arrays.reduce( (acc, curr) => {
		return acc.filter( (elm) => curr.includes(elm));
	});
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {
	return arrays.reduce( (acc, curr) => {
		curr.forEach( (elm) => {
			if (!acc.includes(elm)) {
				acc.push(elm);
			}
		});
		return acc;
	});
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
	return array1.reduce( (acc, curr, i, arr) => {
		if ( array2.includes(callback(curr)) ) {
			acc[curr] = callback(curr);
		}
		return acc;
	}, {});
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
	let res = {}, temp = {}, it = arrCallbacks.length;

	while(it--) {
		temp = arrVals.reduce( (acc, curr, i, arr) => {
			temp[curr] = (temp[curr] || []);
			temp[curr].push(arrCallbacks[it](curr));

			return temp;
		}, {});
		res = {...temp};
	}
	return res;
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arr) {
	let res = [];
	
	arr.forEach( (elm, i, arr) => {
		res = [...res, ...elm];
	});

	console.log(res);
}

flatten(arrays);
// → [1, 2, 3, 4, 5, 6]

// Challenge 2. Your own loop
// Your code here.

function loop(currentValue, test, update, body) {
	if (test(currentValue)) {
		body(currentValue);
		loop( update(currentValue), test, update, body );
	} else return;
}


loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// Challenge 3. Everything
function every(array, test) {
  let flag = true;

  array.forEach( (elm) => {
  	if (flag) {
  		flag = test(elm);
  	}
  });
  return flag;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// Challenge 4. Dominant writing direction
function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");
  
  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";
  
  return scripts.reduce( (acc, curr) => { 
    return acc.count < curr.count ? curr : acc;
  }, {dir: '', count: 0}).name;

}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl

// 1
let nonsense = (string = '') => {
	let blab = () => alert(string);

	blab();
}

console.log( nonsense('hello') );

// 2
let nonsense = (string = '') => {
	let blab = () => alert(string);

	setTimeout(blab, 2000);
}

console.log( nonsense('hello') );

// 3
let nonsense = (string = '') => {
	let blab = () => alert(string);

	return blab;
}

let blabLater = nonsense('WoW!!');
let blabAgainLater = nonsense('WoHoo!!');

console.log( nonsense('hello') );

// 4
let fullName = (firstName = '') => {
	return name = (lastName = '') => `${firstName} ${lastName}`;
}

fullName('Shivam')('Chahar');

// 5
function storyWriter () {
	let res = '';
	return {
		addWords: function (string = '') {
			res += string;
			console.log(res);
		},
		erase: function () {
			res = '';
			this.addWords();
		}
	}
}

let myStory = storyWriter();

myStory.addWords('Hello');
myStory.addWords('There');
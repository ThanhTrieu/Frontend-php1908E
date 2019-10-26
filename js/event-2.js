// dom JS
// 1 - dom element

// tim phan tu thong qua id
let title = document.getElementById('title');
console.log(title);

// tim theo class
let title2 = document.getElementsByClassName('title');
console.log(title2[1]);

// tim theo ten the
let title3 = document.getElementsByTagName('h1');
console.log(title3[0]);

// tim theo selector css
let title4 = document.querySelectorAll('h1.title');
console.log(title4[1]);


// 2 - Dom Event
// can tim - truy cap vao phan tu html
let button = document.getElementById('clickMe');
let button2 = document.getElementsByClassName('btn');



// gan cho no 1 su kien
// button2[0].onclick = function(){
// 	alert('hello U');
// }

// lang nghe 1 su kien
button2[0].addEventListener('click', function(){
	//alert('Hello U');
	let text = title.innerHTML = 'Hoc lai HTML va CSS';


	//chuyen input ve button
	let input = document.getElementsByTagName('input');
	//input[0].type = 'button';
	input[0].setAttribute('type', 'button');

	let box = document.getElementsByClassName('box');
	box[0].style.width = '300px';
	box[0].style.height= '300px';
	box[0].style.border= '1px solid red';
	box[0].style.backgroundColor = 'yellow';
});

let myImg = document.getElementsByTagName('img');
myImg[0].addEventListener('mouseover', function(){
	//console.log(this);
	this.width = 500;
	this.height = 500;
});

myImg[0].addEventListener('mouseout', function(){
	//console.log(this);
	this.width = 20;
	this.height = 20;
});

/*
window.onbeforeunload = function(){
	return 'thoat';
}
*/

document.getElementById('clk3').addEventListener('click', function(){
	// lay ra kich thuoc trinh duyet
	let wBrowser = window.innerWidth;
	let hBrowser = window.innerHeight;

	console.log(wBrowser, hBrowser);

	// mo ra 1tab moi
	// window.open('https://vnexpress.net', 'VnExpress','width=100px,height=100px');
	
	// tai lai trang web
	// window.location.reload(true);

	// di sang trang web moi
	// window.location.href = 'https://vnexpress.net';
	
	// lay ra kich thuoc man hinh
	let wScreen = screen.width;
	let hScreen = screen.height;

	console.log('width screen = ' + wScreen + ' - height = ' + hScreen);
});

function nextPage(){
	window.location.href = 'ev-js-1.html';
}

function forwardPage(){
	window.history.forward();
}













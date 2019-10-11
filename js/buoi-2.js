// cac bieu thuc dieu kien trong lap trinh
// dieu kien if

let number = 10;
if(number - 5 > 1){
	console.log('Yes');
	// muon thuc thi lenh ben trong bieu thuc dieu kien if()thi dieu kien truyen vao bieu thuc phai co gia tri la true - nguoc lai co gia tri la false ko thuc thi
}

if(number / 2 > 9){
	console.log('A');
} else {
	console.log('B');
}


if(number == 8){
 	console.log('A1');
} else if(number == 7){
	console.log('A2');
} else if(number == 6){
	console.log('A3');
} else if(number == 10){
	console.log('A4');
} else if(number == 10){
	console.log('A5');
} else {
	console.log('A5 ');
}

switch (number) {
	case 8:
		console.log('A1');
		break;
	case 7:
		console.log('A2');
		break;
	case 6:
		console.log('A3');
		break;
	case 10:
		console.log('A4');
		break;
	case 11:
		console.log('A6');
		break;
	default:
		console.log('A5 ');
		break;
}

console.log('BBB');

// cac vong lap
// vong lap for
 for(let i = 1; i <= 1000; i++ ) {
 	//console.log(i);
 	if(i % 2 != 0){
 		console.log(i);
 	}
 }

 // vong lap while
 let money = 100;
 while (money < 150) {
 	money++;
 	console.log(money);
 }

 let j = 1;
 while (j <= 1000) {
 	if(j%2 == 0){
 		console.log(j);
 	}
 	j++;
 }

 // vong lap do while
 let  k = 100;
 do {
 	console.log(k);
 	k++;
 } while( k > 200 );

 // tim tat ca boi so chung cua 2 va 3 tu 1-500;
 

 let flag = false;
 if(flag === ''){
 	console.log('A');
 } else {
 	console.log('B');
 }

let u = 10;
let v = 9;
let t = (u-v < u+v) ? v : u;
console.log(t); 

if(u-v < u+v){
	t = v;
}  else {
	t = u;
}

let g = (u/v < v/u) ? (u+v > u-v ? u : v) : (u+v < u-v ? v : u); 
console.log(g); 
if(u/v < v/u){
	if(u+v > u-v)
	{
		g = u;
	} else {
		g = v;
	}
} else {
	if(u+v < u-v)
	{
		g = v;
	} else {
		g = u;
	}
}

// ++ va  --
let x = 10;
let y = 9;
let z = (y--) + (x--) + (x++) + (y++);
//        9   +   10  +   9   +   8
 //(--y) + (--x) + (++x) + (++y); 
//        8   +   9   +  10   + 9
//(x++) - (++y) + (++x) - (y++) + (--x) + (--y);
//       10   -   10  +  12   -   10  + 11    + 10
console.log(z);
// cho anh biet tu 1 toi 100 co bao nhieu so nguyen to 

// viet 1 ham bo tro kiem tra so nguyen
function kiemTraSoNguyenTo(myNumber)
{
	let flag = true;
	for(let i = 2; i <= Math.sqrt(myNumber); i++){
		if(myNumber % i == 0){
			flag = false;
			break;
		}
	}
	return flag;
}

let count = 0;
for(let i = 2; i <= 100 ; i++){
	// kiem tra so nguyen to
	if(kiemTraSoNguyenTo(i)){
		//count++;
		console.log(i);
	}
}
//console.log(count);




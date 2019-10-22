function helloword(){
	alert('hello word');
}

function demo() {
	alert('hanh dong thu 2');
}

function myFocus(){
	console.log('su kien focus vua xay ra');
}

function myBlur(){
	console.log('su kien blur vua xay ra');
}

function selectGender(obj){
	//console.log(obj);
	let gender = obj.value;
	//console.log(gender);
	if(gender == 1) {
		console.log('ban vua chon gioi tinh nam');
	} else if(gender == 0){
		console.log('ban vua chon gioi tinh nu')
	} else {
		console.log('gioi tinh ko xac dinh');
	}
}

function myChangeData(obj){
	let text = obj.value;
	console.log(text);
}

function myError(){
	alert('server bi loi!');
}

function myKeydown(){
	console.log('nhan tay xuong ban phim');
}

function myKeypress(){
	console.log('tay vua giu ban phim');
}

function myKeyup(){
	console.log('tay vua buong ban phim');
}












$(document).ready(function() {
	// ham khoi tao 
	// cho doi DOM HTML duoc dung xong (tai xong) va cac style css load xong thi cac ma lenh js viet theo thu vien JQ moi duoc thuc thi
	// $ = jQuery
	
	// truy cap vao phan tu
	let myBtn = $('button.btn');
	console.log(myBtn);
	// click : ten su kien
	
	myBtn.click(function(){
		// function : callback function - hanh dong de thuc thi cho su kien 1 nhiem vu nao do
		//alert('hello you !');
		let dataId = $('#title').prop('id');
		console.log(dataId);
		$('#mybtn').attr('disabled', true);
		//$('img').attr('src', '');
		// xoa ca thuoc tinh
		$('img').removeAttr('src');
	});
	


	/*
	let btn = document.getElementsByClassName('btn');
	btn[0].addEventListener('click', function(){
		alert('Hello You');
	});
	*/

	// sau nay tat cac cac ma lenh viet theo code JQ thi nen dat trong ham ready nay
	
	/*
	let myInput = document.getElementsByClassName('form-control');
	myInput[0].onkeyup = function(){
		let data = this.value;
		console.log(data);
	}
	*/
	$('input[class="form-control"]').keyup(function() {
		let data = $(this).val();
		console.log(data);
	});

	// su kien cho button click me 2
	$('#mybtn').click(function(){
		/*
		if($('#mybox').hasClass('box')){
			$('#mybox').removeClass('box');
		} else {
			$('#mybox').addClass('box');
		}
		*/
		// $('#mybox').toggleClass('box');
		let dt = $('input[type="text"]').val().trim();
		console.log(dt);
		// .val() : lay gia tri trong otext
		// .trim() : xoa khoang trang 2 dau
		
		// css lai mau nen cho phan tu
		// single css
		$('#mybox').css('background-color', 'green');
		// multi css
		$('#mybox').css({
			border: '2px solid blue',
			padding: '10px 20px 30px 40px',
			marginTop: '20px'
		});
		// lay ra kich thuoc ban dau cua phan tu
		let wBox = $('#mybox').width();
		let hBox = $('#mybox').height();

		console.log(wBox, hBox);

		// set lai kich thuoc cho phan tu
		$('#mybox').width(500);
		$('#mybox').height(500);

		// lay ra kich thuoc vua dc set lai
		let wBox2 = $('#mybox').width();
		let hBox2 = $('#mybox').height();
		console.log(wBox2, hBox2);

		// lay ra kich thuoc cua phan tu + phan padding nhung ko lay phan border
		let wBox3 = $('#mybox').innerWidth();
		let hBox3 = $('#mybox').innerHeight();
		console.log(wBox3, hBox3);
	});

	$('#clk-3').click(function(){
		$('ul.menu li').eq(2).css('color', 'blue');
		if($('input[type=checkbox]').is(':checked')){
			console.log('ban da tich chon')
		} else {
			console.log('ban chua tich chon')
		}

		//#clk-3 = this
		if($(this).is(':hover')){
			console.log('OK');
		}

		// tim kiem phan tu - tim ra nhung phan tu nam ben trong
		$('section.container').find('footer h4').css('color', 'red');

		$('section.container').find('nav').next().next().find('h2').css('color', 'yellow');

		$('section.container').find('footer').prev().prev().find('h2').css('color', 'pink');

		$('footer h4').parent().parent().css({
			width: '500px',
			height: '500px',
			backgroundColor: 'violet'
		});
	});
});


















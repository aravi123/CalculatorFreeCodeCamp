$(document).ready(function(){
	var values = "";
	var output = 0;
	var operator=[];
	$('.op').html("");
	$(".values").click(function(){
		//console.log($(this).html());
		values = values+$(this).html();
		$('.op').append($(this).html());
		//console.log(values);
	});
	$('.operators').click(function(){
		console.log($(this).html());
		var currentoperator = $(this).html();
		//operator.push(currentoperator);
		$('.op').append($(this).html());
		var valuesnos = Number(values);
		values = "";
		if (output!=0) {
			console.log(typeof operator);
			if (operator[0]=="+") {
				output = output+valuesnos;
			}
			else if (operator[0]=="-") {
				output = output - valuesnos;
			}
			else if (operator[0]== 'X') {
				output = output*valuesnos;
			}
			else if (operator[0]=="÷") {
				output =  output/valuesnos;
			}
			else{
				output = output*100;
				console.log("obj");
			}
		}
		else{
			output = valuesnos;
		}
		//console.log(currentoperator);
		operator[0]=currentoperator;
		console.log(typeof operator);
		$('.interimoutput').html(output);	
		
		console.log(output);
	});
	$(".equals").click(function(){
		var valuesnos = Number(values);
		values = "";
		//console.log("obj");
		$('.interimoutput').html("");
		if (operator.length!=0) {
			if (operator[0]=='+') {
				output = output+valuesnos;
			}
			else if (operator[0]=='-') {
				output = output - valuesnos;
			}
			else if (operator[0]=='X') {
				output = output*valuesnos;
			}
			else if (operator[0]=='÷') {
				output = output/valuesnos;
			}
			else{
				output = output;
			}
		}
		else{
			output = output;
		}
		$('.op').html(output);
		operator =[];
		values = "";
		output =0;
	});
	$('.clear').click(function(){
		$('.interimoutput').html("");
		$('.op').html("");
		output = 0;
		operator = "";
		values = "";
	});

});

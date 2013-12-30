var conversion_rates = [[1, 0.7311, 0.611, 62.21, 1.12, 1.07],
						[1.36, 1, 0.83, 85.07, 1.54, 1.46],
						[1.63, 1.19, 1, 101.74, 1.84, 1.75]];

function convert_amount() {
	var select1 = document.getElementById('select1');
	var select2 = document.getElementById('select2');
	var amount_input = document.getElementById('amount');
	var result_input = document.getElementById('result');
	
	result_input.value = convert(select1.selectedIndex, select2.selectedIndex, amount_input.value);
	//alert("result is "+result);
}

function convert(index1, index2, amount) {
	return conversion_rates[index1][index2] * amount;
}
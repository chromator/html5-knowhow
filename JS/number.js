
	function isPrimeNo() {
		var input_field = document.getElementById('number_input');
		var n = input_field.value;
		var is_prime = true;
		for(i=2;i<=n/2;i++)
		{
			res=n%i;
			if(res == 0)
			{
				console.log('It is divisible by '+i);
				is_prime = false;
				break;
			}
		}
		var test = document.getElementById('test');
		is_prime ? test.value = 'test' : test.value = 'best';
		is_prime ? alert('Number is prime') : alert('Number is not prime');
		
		return is_prime;
	}
		
	function evenOdd() {
		var number = document.getElementById('number_input').value;
		if(number % 2 == 0) {
			alert('Number is even');
		} 
		else {
			alert('Number is odd');
		}
	}
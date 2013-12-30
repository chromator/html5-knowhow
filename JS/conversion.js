	function num_2_bin(number) {
		console.log("Number is "+number);
		var result = "";
		for (var i=7; i>=0; i--) {
			
		  if (number & (1<<i)) {
			// i-th bit is set
			//document.write("1");
			result += "1";
			console.log('what is left shift here '+(1<<i))
		  } else {
			// i-th bit is clear
			// document.write("0");
			result += "0";
		  }
		}
		return result;
	}
	
	function bin_2_oct(binary) {
		console.log("Binary number is "+binary);
		var octal=0, decimal=0, i=0;
		
		while(binary!=0) { 
			decimal+=(binary%10)*Math.pow(2,i); 
			++i; 
			binary = (binary - (binary % 10))/10; 
		} 
		/*At this point, the decimal variable contains corresponding decimal value of binary number. */ 
		i=1; 
		while (decimal!=0) 
		{ 
			octal+=(decimal%8)*i; 
			decimal/=8; 
			i*=10; 
		} 
		return octal;
	}
	
	function oct_2_hex(octal) {
		console.log("Octal number is "+octal);
		var dec = oct_2_dec(octal);
		return dec_2_hex(dec);
	}
	
	function oct_2_dec(octal) {
		var decimal=0, i=0, rem; 
		while (octal!=0) { 
			rem = octal%10; 
			octal/=10; 
			decimal += rem * Math.pow(i,8); 
			++i; 
		} 
		return decimal;
	}
	
	function dec_2_hex(decimal) {
		var i=0,rem; 
		var hex;
		while (decimal!=0) { 
			rem=n%16; 
			
			switch(rem) { 
			case 10: 
			hex += 'A'; 
			break; 
			
			case 11: 
			hex += 'B'; 
			break; 
			
			case 12: 
			hex += 'C'; 
			break; 
				
			case 13: 
			hex += 'D'; 
			break; 
			
			case 14: 
				hex += 'E'; 
			break; 
			
			case 15: 
				hex +='F'; 
			break; 
				
			default: 
				hex[i]=rem+'0'; 
			break; 
				
			} 
			++i; 
			decimal/=16; 
		}
		hex+='\0'; 
		//strrev(hex);
	}
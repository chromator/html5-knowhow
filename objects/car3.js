function get_payments() {
	var payment = 250;
	
	payment += (this.seats == "leather") ? 100 : 50;
	payment += (this.engine == "V-8") ? 150 : 75;
	payment += (this.theradio == "CD Player") ? 35 : 10;
	
	return payment;
}

function car(seats, engine, theradio) {
	this.seats = seats;
	this.engine = engine;
	this.theradio = theradio;
	this.payment = get_payments;
}

var work_car = new car("cloth", "v-6", "tape deck");
var fun_car = new car("leather", "v-8", "CD player");
var custom_car = new car(fun_car.seats, work_car.engine, fun_car.theradio);

var work_car_payments = work_car.payment();
var fun_car_payment = fun_car.payment();
var custom_car_payment = custom_car.payment();

document.write("<h2>The information on the cars you requested: <h2/>");
document.write("<strong>Work car: </strong>");
document.write(work_car.seats +", "+work_car.engine+", "+work_car.theradio);
document.write("<br/>");
document.write("<strong>Payments: </strong>"+work_car_payments);
document.write("<p>");

document.write("<strong>Fun car: </strong>");
document.write(fun_car.seats +", "+fun_car.engine+", "+fun_car.theradio);
document.write("<br/>");
document.write("<strong>Payments: </strong>"+fun_car_payment);
document.write("<p>");

document.write("<strong>Custom car: </strong>");
document.write(custom_car.seats +", "+custom_car.engine+", "+custom_car.theradio);
document.write("<br/>");
document.write("<strong>Payments: </strong>"+custom_car_payment);
document.write("<p>");
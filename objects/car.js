function car(seats, engine, theradio) {
	this.seats = seats;
	this.engine = engine;
	this.theradio = theradio
}

function jeep(s, e, r, n) {
	this.seats = s;
	this.engine = e;
	this.theradio = r;
	name = n;
}

var work_car = new car("cloth", "v-6", "tape deck");
var fun_car = new car("leather", "v-8", "CD player");

work_car.engine = "v-4";

var custom_car = new car(fun_car.seats, work_car.engine, fun_car.theradio);
document.write(typeof(work_car)+'<br/>');
document.write('I want car with '+custom_car.seats+' seats <br>');
document.write('It also needs a '+custom_car.engine +'engine <br>');
document.write('Oh I would like a '+custom_car.theradio+'radio <br>');

var bolero = new jeep('Maya leather', 'DI', 'Deck');
document.write('Bolero '+bolero.seats);
document.write('<br> Bolero '+bolero.theradio);
document.write('<br> Name is '+bolero.name);
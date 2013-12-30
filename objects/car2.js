work_car = {seats:"cloth", engine:"v-6", theradio: "tape deck"};
fun_car = {seats:"leather", engine:"v-8", theradio: "CD Player"};

document.write('I want car with '+fun_car.seats+' seats <br>');
document.write('It also needs a '+work_car.engine +'engine <br>');
document.write('Oh I would like a '+fun_car.theradio+'radio <br>');

work_car.seats = "rubber";

document.write('I want a car with '+work_car.seats+ ' seats. <br>');
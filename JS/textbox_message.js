var message_text = "Help I am in a box!";
var message_link = document.getElementById("msg_link");
var message_box = document.getElementById("msg_box");

var web_page1 = "http://www.google.com";
var b1 = document.getElementById("btn1");

function mouseOverFx() {
	message_box.value = message_text;
}

message_link.onmouseover = mouseOverFx;

message_link.onmouseout = function() {
	message_box.value = "test is a test";
}

b1.onclick = function() {
	window.location = web_page1;
}
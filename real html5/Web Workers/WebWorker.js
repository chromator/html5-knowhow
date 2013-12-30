setInterval(function () {
	alert('set interval function called');
  var d = new Date();
  if ((d.getSeconds() % 5) == 0) {
    postMessage('Exactly: ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());
  }
}, 10);
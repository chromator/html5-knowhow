onmessage = function (event) {
  // doesn't matter what the message is, just start the job
  run();
};

function run() {
  var curr = 1;
  var next = 2;
  
  postMessage(next);
  search: while (true) {
    n = curr + next;
	
    for (var i = 2; i <= Math.sqrt(n); i += 1) {
		if (n % i == 0) {
			curr = next;
			next = n;
			continue search;
		}
	}
	
	// found a prime!
    postMessage(n);
	curr = next;
	next = n;
  }
}
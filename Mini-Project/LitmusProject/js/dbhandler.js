	var db;
	initDb();
	function openDb() {
		db = openDatabase("QuizTable", "1.0", "Database for storing quiz data", 2 * 1024 * 1024);
		console.log('Database opened created successfully');
	}
    
	function initDb() {
		openDb();
		// create Quiz table, duration is stored in millis
		db.transaction(function(tx) {
			tx.executeSql("CREATE TABLE IF NOT EXISTS Quiz(quizId INTEGER PRIMARY KEY, name TEXT, nQuestions NUMBER, duration NUMBER)", [],
              function(tx) { console.log('Table Quiz created successfully'); },
              onError);
        });
		
		// creates Questions table, difficulty level is from values high, medium, low
		db.transaction(function(tx) {
			tx.executeSql("CREATE TABLE IF NOT EXISTS Questions(questionId INTEGER PRIMARY KEY, description TEXT, quizId INTEGER, diffLevel TEXT, FOREIGN KEY(quizId) REFERENCES Quiz(quizId))", [],
              function(tx) { console.log('Table Questions created successfully'); },
              onError);
        });
		
		// creates options table, field correct contains value either 0/1. 1 indicates correct answer
		db.transaction(function(tx) {
			tx.executeSql("CREATE TABLE IF NOT EXISTS Options(optionId INTEGER PRIMARY KEY, questionId INTEGER, option TEXT, correct NUMBER, FOREIGN KEY(questionId) REFERENCES Questions(questionId))", [],
              function(tx) { console.log('Table Options created successfully'); },
              onError);
        });
		
		// creates user table
		db.transaction(function(tx) {
			tx.executeSql("CREATE TABLE IF NOT EXISTS User(userId INTEGER PRIMARY KEY, username TEXT, password TEXT, email TEXT)", [],
              function(tx) { console.log('Table User created successfully'); },
              onError);
        });
	}
	
	function onError(tx, error) {
		console.log('Failed to execute SQL');
	}

	function addQuizEntry(quiz) {
		console.log('addQuizEntry ' + quiz.quizName + ', '+quiz.quizQuestions+ ', '+quiz.quizDuration);
		openDb();
		console.log('Database opened successfully');
		
		db.transaction(function(tx) {
			tx.executeSql("INSERT INTO Quiz (name, nQuestions, duration) VALUES (?, ?, ?)", [quiz.quizName, quiz.quizQuestions, quiz.quizDuration],
              function(tx, result) {
				console.log('Successfully entered data');
              }, 
              onError);
        });
	}

	function addQuestionEntry(question) {
		var questionId = -1;
		var isPrevInsertSuccess = false;
		console.log('addQuestionEntry ' + question.description + ', '+question.diffLevel+ ', '+question.options.option);
		openDb();
		console.log('Database opened successfully');
		
		db.transaction(function(tx) {
			tx.executeSql("INSERT INTO Questions (description, quizId, diffLevel) VALUES (?, ?, ?);", [question.description, question.quizId, question.diffLevel],
              function(tx, result) {
				questionId = result.insertId;
				console.log('Successfully entered data in Questions table '+questionId);
				addOptionsEntry(questionId, question.options);
              }, 
              onError);
        });
	}
	
	function addOptionsEntry(questionId, options) {
		var myOption = options; 
		if(questionId > -1) {
			var nOptions = options.length;
			for(var i = 0; i < nOptions; i++) {
				var option = myOption[i].option;
				var correct = myOption[i].correct;
				addOptionEntry(questionId, option, correct);
			}
		}
	}
	
	function addOptionEntry(questionId, option, correct) {
		var myOption = option;
		var myCorrect = correct;
		db.transaction(function(tx) {
		tx.executeSql("INSERT INTO Options (questionId, option, correct) VALUES (?, ?, ?);", [questionId, myOption, myCorrect],
		  function(tx, result) {
			console.log('Successfully entered data in Options table '+result.insertId);
		  }, 
		  onError);
		});
	}

	function readQuizzes(successCallback, failureCallback) {
		var quizzes = new Array();
		db.transaction(function(tx) {
		tx.executeSql("SELECT quizId, name, duration, nQuestions FROM Quiz;"
					, [], function(tx, result) {
			for (var i = 0, item = null; i < result.rows.length; i++) {
				var quiz = new Object();
				item = result.rows.item(i);
				quiz.quizId = item['quizId'];
				quiz.name = item['name'];
				quiz.duration = item['duration'];
				quiz.nQuestions = item['nQuestions'];
				quizzes[i] = quiz;
			}
			if(successCallback) {
				successCallback(quizzes);
			}
		})
		});
	}
	
	// Returns result as array of questions, with question structure as,
	// question { desc, option { desc, correct} }
	function readQuestions(diffLevel, quizId, successCallback) {
		var questions = new Array();
		console.log('Read questions called');
		db.transaction(function(tx) {
		tx.executeSql("SELECT Questions.description, Options.option, Options.correct FROM Questions INNER JOIN Options ON Options.questionId=Questions.questionId AND Questions.diffLevel=? AND Questions.quizId=?;"
					, [diffLevel, quizId], function(tx, result) {
			var question;
			var isOldQuestion = false;
			var oldQuestion;
			for (var i = 0, item = null; i < result.rows.length; i++) {
				item = result.rows.item(i);

				if(oldQuestion != item['description']) {
					question = new Object();
					question.options = new Array();
				}
				question.desc = item['description'];
				var option = new Object();
				option.desc = item['option'];
				option.correct = item['correct'];
				question.options.push(option);
				oldQuestion = item['description'];
				
				if(i == (result.rows.length - 1) || (i+1 < result.rows.length && result.rows.item(i+1)['description'] != oldQuestion)) {
					questions.push(question);
				}
			}
			if(successCallback) {
				successCallback(questions);
			}
		  });
		});
	}
	
	function saveUser(username, password, mail, successCallback, failureCallback) {
		console.log('Clicked on save user');
		openDb();
		
		db.transaction(function(tx) {
			tx.executeSql("INSERT INTO User (username, password, email) VALUES (?, ?, ?)", [username, password, mail],
              function(tx, result) {
				console.log('Successfully entered user data');
				if(successCallback)
					successCallback();
              },
              onError);
        });
	}
	
	function verifyUser(email, successCallback, failureCallback) {
		var password;
		db.transaction(function(tx) {
		tx.executeSql("SELECT password FROM User WHERE email=?;"
					, [email], function(tx, result) {
			if(result.rows.length > 0) {
				var item = result.rows.item(0);
				password = item['password'];
				if(successCallback)
					successCallback(password);
			} else {
				if(failureCallback) {
					failureCallback('User does not exist.');
				}
			}
		})
		});
		
	}

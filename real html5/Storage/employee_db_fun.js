    var db;
		
	function open_database() {
      db = openDatabase("employees", "1.0", "employee database", 200000);
	  createTable();
	}

	// select all records and display them
      function getRecords(emp_id) {
		var res;
		db.transaction(function(tx) {
			  tx.executeSql("SELECT * FROM Table1Test", [id=emp_id], function(tx, result) {
			  res = result;
          });
        });
		
		return res;
      }
      
      function createTable() {
        db.transaction(function(tx) {
          tx.executeSql("CREATE TABLE employee (emp_id REAL UNIQUE, emp_name TEXT, emp_dept TEXT, emp_sal NUMBER)", [],
              function(tx) {  
				console.log('Failed to create table');
			  },
              onError);
        });
      }
      
      // add record with random values
      function newRecord(id, name, dept, sal) {
        db.transaction(function(tx) {
          tx.executeSql("INSERT INTO Table1Test (emp_id, emp_name, emp_dept, emp_sal) VALUES (?, ?, ?, ?)", [id, name, dept, sal],
              function(tx, result) {
                log.innerHTML = 'record added';
                showRecords();
              }, 
              onError);
        });
      }
      
      function updateRecord(id, textEl) {
        db.transaction(function(tx) {
          tx.executeSql("UPDATE Table1Test SET text = ? WHERE id = ?", [textEl.innerHTML, id], null, onError);
        });
      }
      
      function deleteRecord(id) {
        db.transaction(function(tx) {
          tx.executeSql("DELETE FROM Table1Test WHERE id=?", [id],
              function(tx, result) { showRecords() }, 
              onError);
        });
      }
	  
	  function onError(tx, error) {
        log.innerHTML += '<p>' + error.message + '</p>';
      }
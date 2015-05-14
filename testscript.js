function UserIn(email,firstName,lastName,userType,password) {
  popup();
  Parse.initialize("ej29LXB9zHARKwcF5gHhkQ4SnJS7mGwWZ01qrZAa", "jTpvM9KVA9G9XteMyDD4nDcL6xNPVhg44zliTSrw");

  var TestObject = Parse.Object.extend("WorkflowUser");
  var testObject = new TestObject();
  testObject.save({
	Email: email,
    Name: firstName,
    LastName: lastName,
    UserType: userType,
    Password: password
  }, {
    success: function(object) {
      alert("yay");
    },
    error: function(model, error) {
      alert("nay");
    }
  });
}
function popup() {
  alert("don't push me");


}
function getUser(email,password) {
  popup();
  Parse.initialize("ej29LXB9zHARKwcF5gHhkQ4SnJS7mGwWZ01qrZAa", "jTpvM9KVA9G9XteMyDD4nDcL6xNPVhg44zliTSrw");
  var WorkflowUser = Parse.Object.extend("WorkflowUser");
  var query = new Parse.Query(WorkflowUser);

  
  query.equalTo("Email", "email");
  query.equalTo("Password", "password");
  query.find({
    success: function(results) {
    
	return results[0].id;
	
    },
    error:function(results) {
      alert("woop");
    }
  });
}
/*
function query(callback) {
  popup();
  Parse.initialize("ej29LXB9zHARKwcF5gHhkQ4SnJS7mGwWZ01qrZAa", "jTpvM9KVA9G9XteMyDD4nDcL6xNPVhg44zliTSrw");
  var WorkflowUser = Parse.Object.extend("WorkflowUser");
  var query = new Parse.Query(WorkflowUser);
  var test;
  query.equalTo("name","tomf");
  query.find({
    success: function(results) {
      var object = results[0];
      alert(object.get('LastName'));
      test=object.get('email');
      document.getElementById('result').innerHTML = object.get('email');
      callback(results);
    },
    error:function(results) {
      alert("woop");
    }
  });
}
*/

function UserIn(email,firstName,lastName,userType,password) {
  popup();
  Parse.initialize("ej29LXB9zHARKwcF5gHhkQ4SnJS7mGwWZ01qrZAa", "jTpvM9KVA9G9XteMyDD4nDcL6xNPVhg44zliTSrw");

  var TestObject = Parse.Object.extend("WorkflowUser");
  var testObject = new TestObject();
  testObject.save({
    email: email,
    name: firstName,
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
  return 'hello world'; 

}
function query() {
  popup();
  Parse.initialize("ej29LXB9zHARKwcF5gHhkQ4SnJS7mGwWZ01qrZAa", "jTpvM9KVA9G9XteMyDD4nDcL6xNPVhg44zliTSrw");
  return 'hello world';
  var WorkflowUser = Parse.Object.extend("WorkflowUser");
  var query = new Parse.Query(WorkflowUser);
  query.equalTo("name","tomf");
  query.find({
    success: function(results) {
      var object = results[0];
      alert(object.get('LastName'));
      document.getElementById('result').innerHTML = object.get('email');
      
    },
    error:function(results) {
      alert("woop");
    }
  });
 
}
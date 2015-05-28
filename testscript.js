var sample;

function UserIn(email,firstName,lastName,userType,password) {
  popup();
  Parse.initialize("ej29LXB9zHARKwcF5gHhkQ4SnJS7mGwWZ01qrZAa", "jTpvM9KVA9G9XteMyDD4nDcL6xNPVhg44zliTSrw");

  var TestObject = Parse.Object.extend("WorkflowUser");
  var testObject = new TestObject();
  var query = new Parse.Query(TestObject);
  query.equalTo("email", email);
    query.first({
      success: function(object) {
        if (object) {
          alert("User already exists");
        } else {
		  alert("User is unique");
		    testObject.save({
    email: email,
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
      },
      error: function(error) {
        alert("Could not validate uniqueness for this BusStop object.");
      }
    });
}
function popup() {
  alert("don't push me");


}
function getUserUtil(email,password,callback) {
  popup();
  Parse.initialize("ej29LXB9zHARKwcF5gHhkQ4SnJS7mGwWZ01qrZAa", "jTpvM9KVA9G9XteMyDD4nDcL6xNPVhg44zliTSrw");
  var WorkflowUser = Parse.Object.extend("WorkflowUser");
  var query = new Parse.Query(WorkflowUser);
  
  query.equalTo("Password", password);
  query.find({
    success: function(results) {
      console.log(results);
      callback(results);
    },
    error:function(results) {
      alert("woop");
    }
  });
}

var getUserCallback = function(results) {
  console.log(results);
  sample = results;
}

var getUser = function(email,password,callback) {
    getUserUtil(email,password,callback);
    console.log("sample is: ");
    console.log(sample);
}

var testcallback = function(email, callback) {
    return callback(email);
}
var testcallback2 = function(email) {
  alert(email);
  return email+" tom";
}

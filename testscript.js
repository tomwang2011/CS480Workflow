function UserIn(email,firstName,lastName,userType,password) {
  popup();
  Parse.initialize("ej29LXB9zHARKwcF5gHhkQ4SnJS7mGwWZ01qrZAa", "jTpvM9KVA9G9XteMyDD4nDcL6xNPVhg44zliTSrw");
    
   var TestObject = Parse.Object.extend("WorkflowUser");
    var testObject = new TestObject();
    testObject.save({email: email}),
      testObject.save({name: firstName},
      testObject.save({LastName: lastName}),
      testObject.save({UserType: userType}),
      testObject.save({Password: password}), {
      success: function(object) {
        $(".success").show();
      },
      error: function(model, error) {
        $(".error").show();
      }
    });
 }
function popup() {
  alert("don't push me")
}
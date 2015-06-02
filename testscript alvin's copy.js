var sample;
// Generic method of entry. Not needed anymore.
//function Combine(table, email,firstName,lastName,userType,password) {
//  Parse.initialize("ej29LXB9zHARKwcF5gHhkQ4SnJS7mGwWZ01qrZAa", "jTpvM9KVA9G9XteMyDD4nDcL6xNPVhg44zliTSrw");
//  alert(GenericCheckPrimary(table, "email", email)) // Returns undefined
//  if(GenericCheckPrimary(table,"email",email)){
//  		  parseObject.save({
//			email: email,
//			Name: firstName,
//			LastName: lastName,
//			UserType: userType,
//			Password: password
//			},
//		{
//			success: function(object) {
//			alert("yay");
//			},
//    error: function(model, error) {
//      alert("nay");
//    }
//  });
//  }
//}
//function GenericCheckPrimary(table, column, input) {
//  var parseTable = Parse.Object.extend(table);
//  var parseObject = new parseTable();
//  var query = new Parse.Query(parseTable);
//  query.equalTo(column, input);
//    query.first({
//      success: function(object) {
//        if (object) {
//          alert("Input already exists");
//        } else {
//		  alert("Input does not exist, save");
//
//        }
//      },
//      error: function(error) {
//        alert("Could not validate uniqueness for this BusStop object.");
//      }
//    });
//}
//
//function GenericUserIn(table, email,firstName,lastName,userType,password) {
//  Parse.initialize("ej29LXB9zHARKwcF5gHhkQ4SnJS7mGwWZ01qrZAa", "jTpvM9KVA9G9XteMyDD4nDcL6xNPVhg44zliTSrw");
//  var parseTable = Parse.Object.extend(table);
//  var parseObject = new parseTable();
//  var query = new Parse.Query(parseTable);
//  query.equalTo("email", email);
//    query.first({
//      success: function(object) {
//        if (object) {
//          alert("User already exists");
//        } else {
//		  alert("User is unique");
//		  parseObject.save({
//			email: email,
//			Name: firstName,
//			LastName: lastName,
//			UserType: userType,
//			Password: password
//			},
//		{
//			success: function(object) {
//			alert("yay");
//              //Will this work?
//              console.log(true);
//              callback(true);
//			},
//    error: function(model, error) {
//      alert("nay");
//    }
//  });
//        }
//      },
//      error: function(error) {
//        alert("Could not validate uniqueness for this BusStop object.");
//      }
//    });
//}
function WorkFlowCheckForeign(email,firstName,lastName,userType,password) {
  popup();
  Parse.initialize("ej29LXB9zHARKwcF5gHhkQ4SnJS7mGwWZ01qrZAa", "jTpvM9KVA9G9XteMyDD4nDcL6xNPVhg44zliTSrw");
  var User = Parse.Object.extend("WorkflowUser");
  var Workflow = Parse.Object.extend("TestObject");
  var UserObject = new User();
  var WorkflowObject = new Workflow();
  var query = new Parse.Query(User);
  query.equalTo("email", email);
    query.first({
      success: function(object) {
        if (object) {
          alert("Found User, Save to WorkflowObject here");
		  		    WorkflowObject.save({
    foo: email
  }, {
    success: function(object) {
      alert("yay");
    },
    error: function(model, error) {
      alert("nay");
    }
  });
        } else {
		  alert("User does not exist. FK not found");
        }
      },
      error: function(error) {
        alert("Could not validate uniqueness for this BusStop object.");
      }
    });
}


function insertUser(email,firstName,lastName,userType,password) {
  if(userType.toLowerCase() == "user" || userType.toLowerCase() == "designer"){   //Make sure userType is user or designer, proceed if so.
    popup();
    Parse.initialize("ej29LXB9zHARKwcF5gHhkQ4SnJS7mGwWZ01qrZAa", "jTpvM9KVA9G9XteMyDD4nDcL6xNPVhg44zliTSrw");
    var parseWorkflowUser = Parse.Object.extend("WorkflowUser");
    var query = new Parse.Query(parseWorkflowUser);
    query.equalTo("email", email);
    query.first({
      success: function(object) {
        if (object) {
          alert("Already exists");
        } else {
          alert("Is unique");
          var parseWorkflowUserObject = new parseWorkflowUser();
          parseWorkflowUserObject.save({
                email: email,
                Name: firstName,
                LastName: lastName,
                UserType: userType,
                Password: password
              },
              {
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
}
function insertWorkflowFormInstance(formInstanceID, formID, workflowInstanceID, formData, status, submittedBy){
  if(status.toLowerCase() == "user" || status.toLowerCase() == "designer"){ //Make sure status is either saved or submitted
    Parse.initialize("ej29LXB9zHARKwcF5gHhkQ4SnJS7mGwWZ01qrZAa", "jTpvM9KVA9G9XteMyDD4nDcL6xNPVhg44zliTSrw");
    var parseWorkflowFormInstance = Parse.Object.extend("WorkflowUser");
    var query = new Parse.Query(parseWorkflowFormInstance);
    // Check primary key
    query.equalTo("FormInstanceID", formInstanceID);
    query.first({
      success: function(object) {
        if (object) {
          alert("Already exists");
        } else {
          alert("Is unique");
          // Check Foreign key FormID
          var parseWorkflowForm = Parse.Object.extend("WorkflowForm");
          var queryWorkflowForm = new Parse.Quary(parseWorkflowForm);
          query.equalTo("FormID", formID);
          query.first({
            success: function(object) {
              if (object) {
                alert("FormID found");
                // Check ForeignKey WorkflowInstanceID
                var parseWorkflowInstance = Parse.Object.extend("WorkflowInstance");
                var queryWorkflowInstance = new Parse.Quary(parseWorkflowInstance);
                queryWorkflowInstance.equalTo("WorkflowInstanceID", workflowInstanceID);
                queryWorkflowInstance.first({
                  success: function(object) {
                    if (object) {
                      alert("WorkflowInstanceID exists");
                      // Check ForeignKey Submitted By
                      var parseUser = Parse.Object.extend("User");
                      var queryUser = Parse.Query(parseUser);
                      queryUser.equalTo("Email", submittedBy);
                      queryUser.first({
                        success: function(object) {
                          if (object) {
                            alert("User exists");
                            alert("All primary Keys and Foreign Keys confirmed. Saving");
                            var parseWorkflowFormInstanceObject = new parseWorkflowFormInstance();
                            parseWorkflowFormInstanceObject.save({
                                  FormInstanceID: formInstanceID,
                                  FormID: formID,
                                  WorkflowInstanceID: workflowInstanceID,
                                  FormData: formData,
                                  Status: status,
                                  SubmittedBy: submittedBy
                                },
                                {
                                  success: function(object) {
                                    alert("yay");
                                  },
                                  error: function(model, error) {
                                    alert("nay");
                                  }
                                });
                          } else {
                            alert("User does not exist");
                          }
                        },
                        error: function(error) {
                          alert("Could not validate uniqueness for this BusStop object.");
                        }
                      });
                    } else {
                      alert("WorkflowInstanceID does not exist");
                    }
                  },
                  error: function(error) {
                    alert("Could not validate uniqueness for this BusStop object.");
                  }
                });



              } else {
                alert("FormID does not exist");
              }
            },
            error: function(error) {
              alert("Could not validate uniqueness for this BusStop object.");
            }
          });
        }
      },
      error: function(error) {
        alert("Could not validate uniqueness for this BusStop object.");
      }
    });
  }
}
function insertWorkflowInstance(workflowInstanceID, workflowID, workflowData, status, submittedBy, submittedOn){
  // Check status
  if(status.toLowerCase() == "running" || status.toLowerCase() == "suspended" || status.toLowerCase() == "completed"){
    // check primary key
    var parseWorkflowInstance = Parse.Object.extend("WorkflowInstance");
    var queryWorkflowInstance = new Parse.Query(parseWorkflowInstance);
    queryWorkflowInstance.equalTo("WorkflowInstanceID", workflowInstanceID);
    queryWorkflowInstance.first({
      success: function(object) {
        if (object) {
          alert("WorkflowInstanceID already exists");
        } else {
          alert("WorkflowInstanceID is unique");
          var parseWorkflow = Parse.Object.extend("Workflow");
          var queryWorkflow = new Parse.Query(parseWorkflow);
          queryWorkflow.equalTo("WorkflowID", workflowID);
          queryWOrkflow.first({
            success: function(object) {
              if (object) {
                alert("WorkflowID found");
                var parseUser= Parse.Object.extend("User");
                var queryUser = new Parse.Query(parseUser);
                queryUser.equalTo("Email", submittedBy);
                queryUser.first({
                  success: function(object) {
                    if (object) {
                      alert("Found User");
                      alert("Saving");
                      var parseWorkflowInstanceObject = new parseWorkflowInstance();
                      parseWorkflowInstanceObject.save({
                            WorkflowInstanceID: workflowInstanceID,
                            WorkflowID: workflowID,
                            WorkflowData: workflowData,
                            Status: status,
                            SubmittedBy: submittedBy
                          },
                          {
                            success: function(object) {
                              alert("yay");
                            },
                            error: function(model, error) {
                              alert("nay");
                            }
                          });
                    } else {
                      alert("Is unique");
                    }
                  },
                  error: function(error) {
                    alert("Could not validate uniqueness for this BusStop object.");
                  }
                });
              } else {
                alert("Is unique");
              }
            },
            error: function(error) {
              alert("Could not validate uniqueness for this BusStop object.");
            }
          });
        }
      },
      error: function(error) {
        alert("Could not validate uniqueness for this BusStop object.");
      }
    });
  }
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
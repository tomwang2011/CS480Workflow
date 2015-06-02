function insertWorkflowInstanceLog(logID, workflowInstanceID, description, actionBy, actionOn){
  // Check status
  // check primary key
    Parse.initialize("ej29LXB9zHARKwcF5gHhkQ4SnJS7mGwWZ01qrZAa", "jTpvM9KVA9G9XteMyDD4nDcL6xNPVhg44zliTSrw");
    var parseWorkflowInstanceLog = Parse.Object.extend("WorkflowInstanceLog");
    var queryWorkflowInstance = new Parse.Query(parseWorkflowInstanceLog);
    queryWorkflowInstance.equalTo("logID", logID);
    queryWorkflowInstance.first({
      success: function(object) {
        if (object) {
          alert("WorkflowInstanceLogID already exists");
        } else {
          alert("WorkflowInstanceLogID is unique");
          var parseWorkflowInstance = Parse.Object.extend("WorkflowInstance");
          var queryWorkflow = new Parse.Query(parseWorkflowInstance);
          queryWorkflow.equalTo("WorkflowInstanceID", workflowInstanceID);
          queryWOrkflow.first({
            success: function(object) {
              if (object) {
                alert("WorkflowID found");
                var parseUser= Parse.Object.extend("User");
                var queryUser = new Parse.Query(parseUser);
                queryUser.equalTo("Email", actionBy);
                queryUser.first({
                  success: function(object) {
                    if (object) {
                      alert("Found User");
                      alert("Saving");
                      var parseWorkflowInstanceObject = new parseWorkflowInstance();
                      parseWorkflowInstanceObject.save({
                            WorkflowInstanceLogID: logID,
                            WorkflowInstanceID: workflowInstanceID,
                            Description: description,
                            ActionBy: actionBy,
                            ActionOn: actionOn
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
	
function insertWorkflow(workflowID,	name, description, content, createdBy, createdOn, modifiedBy, modifiedOn){
  // Check status
  // check primary key
    Parse.initialize("ej29LXB9zHARKwcF5gHhkQ4SnJS7mGwWZ01qrZAa", "jTpvM9KVA9G9XteMyDD4nDcL6xNPVhg44zliTSrw");
    var parseWorkflow = Parse.Object.extend("Workflow");
    var queryWorkflowInstance = new Parse.Query(parseWorkflow);
    queryWorkflowInstance.equalTo("WorkflowID", workflowID);
    queryWorkflowInstance.first({
      success: function(object) {
        if (object) {
          alert("WorkflowInstanceLogID already exists");
        } else {
          alert("WorkflowInstanceLogID is unique");
          var parseWorkflowUser = Parse.Object.extend("User");
          var queryWorkflowUser = new Parse.Query(parseWorkflowUser);
          queryWorkflow.equalTo("Email", workflowUser);
          queryWOrkflow.first({		
            success: function(object) {
              if (object) 
{
                alert("User found");
                queryUser = new Parse.Query(parseUser);
                queryUser.equalTo("Email", actionBy);
                queryUser.first({
                  success: function(object) {
                    if (object) {
                      alert("Found User");
                      alert("Saving");
                      var parseWorkflowInstanceObject = new parseWorkflowInstance();
                      parseWorkflowInstanceObject.save({
                            WorkflowID: workflowID,
                            Name: name
                            Description: description,
							Content: content,
                            CreatedBy: createdBy,
                            CreatedOn: createdOn,
							ModifiedBy: modifiedBy
							ModifiedOn: modifiedOn
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

function insertWorkflowForm(formID, description, content, createdBy, createdOn, modifiedBy, modifiedOn, isPublished)
{
	Parse.initialize("ej29LXB9zHARKwcF5gHhkQ4SnJS7mGwWZ01qrZAa", "jTpvM9KVA9G9XteMyDD4nDcL6xNPVhg44zliTSrw");
	var parseWorkflowForm = Parse.Object.Extend("WorkflowForm");
	var queryWorkflowForm = new Parse.Query(parseWorkflowForm);
	queryWorkflowForm.equalTo("FormID", formID);
	queryWorkflowForm.first
	({
		success: function(object)
		{
			if (object)
			{
				alert("form already exist");
			}
			else
			{
				alert("form is unique");
				var parseUser = Parse.Object.Extend("User");
				var queryUser = new Parse.Query(parseUser);
				if (createdBy != modifiedBy)
				{
					queryUser.equalTo("Email",createdBy);
					queryUser.first
					({
						success: function(object)
						{
							if(object)
							{
								alert("found created user");
								queryUser = new Parse.Query(parseUser);
								queryUser = equalTo("Email", modifiedBy)
								queryUser.first
								({
									success: function(object)
									{
										if (object)
										{
											alert("found modified user");
											alert("saving");
											var parseWorkflowInstanceObject = new parseWorkflowInstance();
											parseWorkflowInstanceObject.save
											(
											 {
												FormID: formID,
												Description: description,
												Content: content,
												CreatedBy: createdB0,
												CreatedOn: createdOn,
												ModifiedBy: modifiedBy,
												ModifiedOn modifiedOn,
												Published: isPublished
											  },
											  {
												success: function(object) {
												  alert("yay");
												},
												error: function(model, error) {
												  alert("nay");
												}
											  }
											);
										}
										else
										{
											alert("modified by wrong user");
										}
									},
									error: function(error) 
									{
										alert("Could not validate uniqueness for this BusStop object.")
									}
								});	
							}
							else
							{
								alert("created user not found");
							}
						}
					});
					
					
				}
				else 
				{
					queryUser.equalTo("Email",createdBy);
					queryUser.first
					({
						success: function(object)
						{
							if(object)
							{
								alert("found created user");
								alert("saving");
								var parseWorkflowInstanceObject = new parseWorkflowInstance();
								parseWorkflowInstanceObject.save
								(
								{
								    FormID: formID,
									Description: description,
									Content: content,
									CreatedBy: createdB0,
									CreatedOn: createdOn,
									ModifiedBy: modifiedBy,
									ModifiedOn modifiedOn,
									Published: isPublished
								},
								{
									success: function(object) 
									{
									    alert("yay");
									},
									error: function(model, error) 
									{
									    alert("nay");
									}
							    }
								);
							}
							else
							{
								alert("user not found");
							}
						},
						error: function(error) 
						{
							alert("Could not validate uniqueness for this BusStop object.")
						}
					});	
				}
			}
		}
	});
}
 <script>
  //itemid is the variable that is going to hold the result
  var callfunction = function(itemid) {
    //call the Promise function (all Parse queries are promise functions)
    getObjectUtil("WorkflowUser","email","Lion","Password","Password",function(result) {
        //below is an example of setting the variable itemid to the object.id of field-name of table name
        console.log(result[0]);
        console.log(result[0].id);
        document.getElementById(itemid).innerHTML=result[0].id;
    });
  }
  </script>

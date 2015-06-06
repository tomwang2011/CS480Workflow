 var callfunction = function(tableName,fieldA,valueA,fieldB,valueB,returnItemField,itemid) {
    //call the Promise function (all Parse queries are promise functions)
    getObjectUtil(tableName,fieldA,valueA,fieldB,valueB,function(result) {
        //below is an example of setting the variable itemid to the object.id of field-name of table name
        console.log(result[0]);
        console.log(result[0].id);
        document.getElementById(itemid).innerHTML=result[0].get(returnItemField);
    });
  }

var getObjectUtil = function(table,fieldA,valueA,fieldB,valueB,callback) {
    Parse.initialize("ej29LXB9zHARKwcF5gHhkQ4SnJS7mGwWZ01qrZAa", "jTpvM9KVA9G9XteMyDD4nDcL6xNPVhg44zliTSrw");

    var tableName = Parse.Object.extend(table);

    var query = new Parse.Query(tableName);

    query.equalTo(fieldA, valueA);

    query.equalTo(fieldB, valueB);

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

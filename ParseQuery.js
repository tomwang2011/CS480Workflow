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

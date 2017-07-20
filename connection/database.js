var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var config = require('../configuration')

// Create connection to database


exports.executeQuery = function(query, callback) {
    var connection = new Connection(config.database);
    connection.on('connect', function(err) {
        if (err) {
            console.log(err);
            connection.close();
        }

        else executeQuery(query, connection, callback);

    });
    connection.on('end', function(err) {
        if (err) {
            console.log(err);
        }
    });
}

exports.insertQuery = function(query, callback) {
    var connection = new Connection(config.database);
    connection.on('connect', function(err) {
        if (err) {
            console.log(err);
            connection.close();
        }
        else executeInsert(query, connection, callback);
    });

    connection.on('end', function(err) {
        if (err) {
            console.log(err);
        }
    });
}

exports.updateQuery = function(query, callback) {
  var connection = new Connection(config.database);
  connection.on('connect', function(err) {
    if (err) {
      console.log(err);
      connection.close();
    }
    else executeUpdate(query, connection, callback);
  });

  connection.on('end', function(err) {
    if (err) {
      console.log(err);
    }
  });
}

function executeQuery(query, connection, callback) {
    request = new Request(query, function(err) {
        if (err) console.log(err);
        else callback(results);
        // Close the connection after executing the SQL
        connection.close();
    });
    var results = [];
    request.on('row', function(columns) {
        var result = {};
        columns.forEach(function(column) {
            if (column.value !== null) {
                result[column.metadata.colName] = column.value;
            }
        });
        results.push(result);
    });
    request.on('done', function(rowCount, more) {
        //console.log(rowCount + ' rows returned');
    });
    connection.execSql(request);
}

function executeInsert(query, connection, callback) {
    console.log("Inserting into database...");
    var results = [];
    request = new Request(query,
        function(err, rowCount, rows) {
            console.log(rowCount + ' row(s) inserted');
            callback(results);

            connection.close();
        }

    );
    request.on('row', function(columns) {
        var result = {};
        columns.forEach(function(column) {
            if (column.value !== null) {
                result[column.metadata.colName] = column.value;
            }
        });
        results.push(result);
    });
    connection.execSql(request);
}

function executeUpdate(query, connection, callback){
    console.log("Updating element in database ... ");
    var results = [];
    request = new Request(query,
      function(err, rowCount, rows) {
        console.log(rowCount + 'rows updated');
        callback(results);

        connection.close();
      }

    );
    request.on('row', function(columns) {
      var result = {};
      columns.forEach(function(column) {
        if (column.value !== null) {
          result[column.metadata.colName] = column.value;
        }
      });
      results.push(result);
    });
    connection.execSql(request);
}

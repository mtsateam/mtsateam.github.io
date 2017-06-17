var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
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


// var sqlCommand = function(command, next){
//     // execute the sql command
//     request = new Request(
//         command,
//         function(err, rowCount, rows) {
//             if(err) console.log("error executing the command: " + command);
//             next(database);
//         }
//     );
//
//     request.on('doneInProc', function(rowsCount, more, rows) {
//         rows.forEach(function (columns) {
//             var data_entry = {};
//             columns.forEach(function (column) {
//                 data_entry[column.metadata.colName] = column.value;
//             });
//             database.push(data_entry);
//
//         });
//
//     });
//     connection.execSql(request);
// };



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

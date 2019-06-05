var mysql = require ("mysql")
var inquirer = require("inquirer")
require ("console.table")

function displayItems(){
    connection.query("SELECT * FROM products", function(err, res){
        if(err){
            console.log(err)
        }
        else{
            console.table(res)
        }
    })
}

// connections
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "bamazon"
  });
  connection.connect(function(error){
      console.log('in funvc');
      if(error){
          console.log(error)
      }
      displayItems()
  }) 

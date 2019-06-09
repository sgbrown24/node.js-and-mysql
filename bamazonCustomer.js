var mysql = require ("mysql")
var inquirer = require("inquirer")
require ("console.table")


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
    console.log('HERE ARE ALL THE ITEMS AVAIBLE FOR SALE');
    if(error){
        console.log(error)
    }
    displayItems()
})


   function displayItems(){
   connection.query("SELECT * FROM products", function(err, res){                                                 
   if(err){
  console.log(err)
   }
  else{
   console.table(res)
   itemToBuy(res)
      }

    })
   }
//use inquire to select an item by item_id//
function itemToBuy(res) {
    inquirer.prompt([{
        name: "itemId",
        type: "input",
        message:"please enter the product Id of the item you want to purchase."

   
    },
{
    name: "amount",
    type: "input",
    message:"please enter the amount you want to purchase."

}])
    //checking to see if the product exist or not 
.then(function(product) {

    console.log(product);
    var A = product.itemId
    var B = product.amount
  buyItem(A,B)  


});
// if product exists ask users how many they would like to buy
function buyItem(id, amount){
    connection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?", 
   [ amount, id],
    function(err,res){
        if (err){
            console.log(err)
        }else{
            console.log("purchase was successful")
            displayItems()
        }
    }
    )
}
}




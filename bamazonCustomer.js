var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');
var qty;
var id;
var total;

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
 
});


  showInventory();

function showInventory(){
// Connect to Bamazon
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

  connection.query('SELECT * FROM products', function(err, results){
    if (err)throw err;
   

  //Show Available Merchandise,
    var table = new Table({
        head: ['Id', 'Manufacturer','Product Name','Department','Price($US)']
      , colWidths: [5,25,30,25,15]
    });
     
    for (var i = 0; i < results.length; i++) {
      table.push([results[i].item_id, results[i].manufacturer_name, results[i].product_name, results[i].department_name, results[i].price] );     
}

    console.log(table.toString());
    purchase(results);
});

});

}

function purchase(results){
//Allows customer to make purchase.
inquirer.prompt([
  {
    name: "choice",
    type: "input",
    message: "Enter the Id number of the item that you would like to purchase?",
    validate: function(value){
      if(isNaN(value)===false){   //Must have real numbers
        return true;
      } else{
        return false;
      }
      }
  },
{
  name:"quantity",
  type:"input",
  message: "How many?:",
  validate: function(value){
    if(isNaN(value)===false){    //Must have real numbers
      return true;
    } else{
      return false;
    }
    }
}
  ]).then(function(answer){
    //Get order info from inquirer.
    qty = answer.quantity;
    id   = answer.choice;
    // console.log("qty:"+qty);
    // console.log("id:" + id);
    if(qty > results[id-1].stock_quantity) 
    //Made adjustment so that id from database would match array.  Array is one less
    {
    // If order exceed supply, tell what's available.
      console.log("Quantity not available");   
       console.log ("Quantity in stock: "+results[id-1].stock_quantity);
      
     }else{
       //If order can be fulfilled, place order.
       console.log("Your order has been placed.");
      total = qty*results[id-1].price;
 
    //Giive order summary.
      console.log("Order Summary:");
      var table = new Table({
        head:['QTY','Id','Brand','Product Name','Price($US)','Total Amount($US)']
      , colWidths: [10,10,25,25,15,20]
    });
   
      table.push([qty, results[id-1].item_id, results[id-1].manufacturer_name, results[id-1].product_name, results[id-1].price,total] );     

      console.log(table.toString());
    
  //Update  inventory after sale. 
       var query = "UPDATE products SET stock_quantity=stock_quantity-?, qty_sold=qty_sold+?, product_sales = qty_sold* price WHERE item_id = ?";
       connection.query(query, [answer.quantity,answer.quantity, id], function(err, res) {
         if (err)throw err;});
      
     }
     connection.end();
  })


}
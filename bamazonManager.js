var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');


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

// Connect to Bamazon
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.query('SELECT * FROM products', function (err, results) {
        if (err) throw err;

        mainMenu();
    });

});

//Shows store inventory
function showInventory() {
    connection.query('SELECT * FROM products', function (err, results) {
        if (err) throw err;
        //Show in table
        var table = new Table({
            head: ['Id', 'Manufacturer', 'Product Name', 'Department', 'Price($US)', 'Qty']
            , colWidths: [5, 25, 30, 25, 15, 15]
        });

        for (var i = 0; i < results.length; i++) {
            table.push([results[i].item_id, results[i].manufacturer_name, results[i].product_name, results[i].department_name, results[i].price, results[i].stock_quantity]);
        }
        console.log(table.toString());
        mainMenu();
    });
}

//Adds to current store inventory
function addInventory() {
    connection.query('SELECT * FROM products', function (err, results) {
        if (err) throw err;
        //Show in table
        var table = new Table({
            head: ['Id', 'Manufacturer', 'Product Name', 'Department', 'Price($US)', 'Qty']
            , colWidths: [5, 25, 30, 25, 15, 15]
        });

        for (var i = 0; i < results.length; i++) {
            table.push([results[i].item_id, results[i].manufacturer_name, results[i].product_name, results[i].department_name, results[i].price, results[i].stock_quantity]);
        }
        console.log(table.toString());

//Takes in infor require to update quantity.
        inquirer.prompt([
            {
                name: "productId",
                type: "input",
                message: "Enter the Id number:",   //Has to be a number.
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                name: "quantity",
                type: "input",
                message: "Enter quantity:",  //Has to be a number.
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        ]).then(function (answer) {  //Updates quantity of instore item selected by id.
            var query = "UPDATE products SET stock_quantity=stock_quantity+? WHERE item_id = ?";
            connection.query(query, [answer.quantity, answer.productId], function (err, results) {
                if (err) throw err;
                console.log("Inventory updated.");
                showInventory();
            });
        });
    });
}

//Shows any item in the store with a quantity less than 5.
function lowInventory() {

    connection.query('SELECT * FROM bamazon.products WHERE stock_quantity < 5', function (err, results) {
        if (err) throw err;
        //Show in table
        var table = new Table({
            head: ['Id', 'Manufacturer', 'Product Name', 'Department', 'Price($US)', 'Qty']
            , colWidths: [5, 25, 30, 25, 15, 15]
        });

        for (var i = 0; i < results.length; i++) {
            table.push([results[i].item_id, results[i].manufacturer_name, results[i].product_name, results[i].department_name, results[i].price, results[i].stock_quantity]);
        }
        console.log(table.toString());
        mainMenu();
    });
}

//Adds product not currently in inventory.
function addNewProduct() {

    inquirer.prompt([
        {
            name: "manufacturerName",
            type: "input",
            message: "Enter Manufacturer's name:",
        },
        {
            name: "productName",
            type: "input",
            message: "Enter Product's name:",
        },
        {
            name: "department",
            type: "input",
            message: "Enter Department:",
        },
        {
            name: "quantity",
            type: "input",
            message: "Enter Quantity:",  //Has to be a number.
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            name: "price",   //Has to be a number.
            type: "input",
            message: "Enter Price:",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]).then(function (answer) {

        // Inserts new product into the database.

        connection.query("INSERT INTO products SET ?", {
            manufacturer_name: answer.manufacturerName,
            product_name: answer.productName,
            department_name: answer.department,
            price: answer.price,
            stock_quantity: answer.quantity
        }, function (err, res) { });
        console.log("New product added.");
        showInventory();
    });

}

//Shows main menu.
function mainMenu() {
    inquirer.prompt([ //Displays menu choices.
        {
            name: "choice",
            type: "rawlist",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add a New Product", "Exit"],
            message: "Manager View Options",

        },
        //Selects options from manager's menu. 
    ]).then(function (answer) {

        switch (answer.choice) {
           //Once selection is made, calls the appropriate function.
            case `View Products for Sale`:
                console.log("Inventory");
                showInventory();
                break;

            case `View Low Inventory`:
                lowInventory();
                break;

            case `Add to Inventory`:
                addInventory();
                break;

            case 'Add a New Product':
                addNewProduct();
                break;

            case 'Exit':
                connection.end();
                break;

            default:
                console.log("Request not recognized.");

        }

    });

}



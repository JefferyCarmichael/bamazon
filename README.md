# Bamazon Store Front

## Customer Interface:

Amazon-like storefront made with MySQL &amp; Node.js

The customer interface is called through node.js by typing the following command:

*Node bamazonCustomer.js.*

![Command prompt](/assets/images/commandprompt.jpg)

&NewLine;
&nbsp; 

Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

![Command prompt](/assets/images/storefront.jpg)


The app prompts users with two questions:

* The ID of the product they would like to buy?
* The second message should ask how many units of the product they would like to buy?

&NewLine;
&nbsp; 

Once order has been placed, the app checks the store inventory to make sure that the store has enough of the product to fullfil customer's order.  If story has enough quantity, the SQL database is updated toreflect the remaining quantity. The customer then shown total cost of their purchase.



![Command prompt](/assets/images/ordercomplete.jpg)

&NewLine;
&nbsp; 

If quantity is not available, the app tells the customer that the store does not have sufficient quantity to complete the order and will prevent the order from going through.

![Command prompt](/assets/images/notavailable.jpg)

&NewLine;
&nbsp; 

&NewLine;
&nbsp; 

---

&NewLine;
&nbsp; 
## Manager Interface

The manager's interface is node application called bamazonManager.js. Running this application will:
The manager's interface is called through node.js by typing the following command:

*Node bamazonManager.js.*

![Command prompt](/assets/images/managerprompt.jpg)

Running bamazonManager.js gives the a set of menu options:
* __View Products for Sale__ -Lists every available item.
* __View Low Inventory__ - Lists all items with an inventory count lower than five.
* __Add to Inventory__ - Lets the manager add more of any item currently in the store.
* __Add New Product__ -Allows the manager to add a completely new product to the store.
* __Exit__ -Ends program.


To select an option, type the corresponding number and hit enter.

![Command prompt](/assets/images/managermenu.jpg)


&NewLine;
&nbsp; 
### View Products for Sale

From the main menu select option 1: __View Product for sale.__  
The entire store inventory will be displayed.


![Command prompt](/assets/images/inventory.jpg)

&NewLine;
&nbsp; 
### View Low Inventory 

From the main menu select option 2: __View Low inventory.__  
Any items store inventory that as a quantity of less than 5 will be displayed.

![Command prompt](/assets/images/low.jpg)


&NewLine;
&nbsp; 
### Add to Inventory 

From the main menu select option 3: __Add to Inventory.__  
The entire store inventory will be displayed followed by the following questions:
* Enter the Id Number: - The coresponding id of the product that who's quantity is being increased.
* Enter the quantity: - The amount of product that will be added.




![Command prompt](/assets/images/add.jpg)


The product with the updated quantity will be displayed in the menu.

![Command prompt](/assets/images/addcomplete.jpg)

__Note:__ This option will only update products that is already in the store.



### Add New Product

From the main menu select option 4: __Add a New Product.__ 
The user will be prompted to enter the following information:

* Manufacturer's name
* Product's Name
* Department
* Quantity
* Price 


&NewLine;
&nbsp; 

![Command prompt](/assets/images/addproduct.jpg)

Once the imformation has been entered in the database,  the new product will appear in the store inventory.

&NewLine;
&nbsp; 

![Command prompt](/assets/images/addproductend.jpg)

&NewLine;
&nbsp; 

&NewLine;
&nbsp; 

---
&NewLine;
&nbsp; 

## Technical Requirements

Mysql database software required.
Node.js is a requirement for running bamzonCustomer js.

The following npm packages are required:
* mysql
* inquirer
* cli-table


The initial database called bamazon was created with bamazon.sql query and mysql.
The table inside of the database called products.

The products table contains the following columns:
* item_id (unique product id)
* manufacturer_name(maker of the product)
* product_name (brand name of Product)
* department_name( product category)
* price (cost that customer pays)
* stock_quantity (how much of the product is available at store)
* qty_sold(how many items were bought by a customer)


&NewLine;
&nbsp; 

---

&NewLine;
&nbsp; 

## Website:

https://github.com/JefferyCarmichael/bamazon.git




# Bamazon Store Front

## Customer Interface:

Bamazon is an 'Amazon-like' storefront made with MySQL &amp; Node.js

The customer interface is called through node.js by typing the following command:

*Node bamazonCustomer.js.*

![Command prompt](/assets/images/commandprompt.jpg)

&NewLine;
&nbsp; 

Bamazon will first display all of the products available for sale.
![Command prompt](/assets/images/storefront.jpg)


The app then prompts the customer with two questions in order to select the item that they want to buy:

* The ID of the product they would like to buy?
* The second message should ask how many units of the product they would like to buy?


&NewLine;
&nbsp; 

Once the selection is made, the app checks the store inventory to make sure that the store has sufficient inventory to fullfil customer's order.  If store has enough quantity, the order is completed and the product database is updated to reflect the remaining quantity. The customer then shown total cost of their purchase.



![Command prompt](/assets/images/ordercomplete.jpg)

&NewLine;
&nbsp; 

If the inventory is not available, the app tells the customer that the store does not have sufficient quantity to fill the order and will stop the order from completing.

![Command prompt](/assets/images/notavailable.jpg)

&NewLine;
&nbsp; 

&NewLine;
&nbsp; 

---

&NewLine;
&nbsp; 
## Manager Interface

The manager's interface is node application called bamazonManager.js. 
The manager's interface is called through node.js by typing the following command:

*Node bamazonManager.js.*

![Command prompt](/assets/images/managerprompt.jpg)

BamazonManager.js first displays a set of 5 menu options:
* __View Products for Sale__ -Lists every available item.
* __View Low Inventory__ - Lists all items with an inventory count lower than five.
* __Add to Inventory__ - Lets the manager add more inventory to any item currently listed in the store.
* __Add New Product__ -Allows the manager to add a completely new product to the store.
* __Exit__ -Ends program.


To select an option, type the corresponding number and hit *Enter*.

![Command prompt](/assets/images/managermenu.jpg)


&NewLine;
&nbsp; 
### View Products for Sale

From the main menu, select option 1: __View Product for sale__ and press *Enter*. 
The entire store inventory will be displayed.


![Command prompt](/assets/images/inventory.jpg)

&NewLine;
&nbsp; 
### View Low Inventory 

From the main menu, select option 2: __View Low inventory__and press *Enter*. 
Any items store inventory that as a quantity of less than 5 will be displayed.

![Command prompt](/assets/images/low.jpg)


&NewLine;
&nbsp; 
### Add to Inventory 

From the main menu select option 3: __Add to Inventory__and press *Enter*.   
The entire store inventory will be displayed.  The user will then have to answer two prompts:
* Enter the Id Number: - The id selects the product who's quantity is being increased.
* Enter the quantity: - The amount of product that will be added.




![Command prompt](/assets/images/add.jpg)


Once the user presses *Enter*  after entering the quantity, the product is displayed in the inventory with an updated quantity.

![Command prompt](/assets/images/addcomplete.jpg)

__Note:__ This option will only update products that are currently in inventory at the store.



### Add New Product

From the main menu, select option 4: __Add a New Product.__ 
The user will be prompted to enter the following information:

* Manufacturer's name
* Product's Name
* Department
* Quantity
* Price 

&NewLine;
&nbsp; 

![Command prompt](/assets/images/addproduct.jpg)


Once the user presses *Enter*  after entering the price, the information will  be entered in the database and the new product will appear in the store inventory. 

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




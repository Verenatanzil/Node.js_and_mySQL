var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_db"

});

connection.connect(function (err){
    if (err) throw err;
    displayProducts();
});

function displayProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log("Item ID: " + res[i].id + "\n" + "Product Name: " + res[i].product_name + "\n" + "Department Name: " + res[i].department_name + "\n" + "Price: $" + res[i].price + "\n");
        } promptUser();
    });
}

function promptUser() {
    inquirer.prompt([
        {
            name: "itemId",
            type: "input",
            message: "Enter Item ID",
        },
        {
            name: "quantity",
            type: "input",
            message: "Enter Quantity",
        },
        
    ]).then(function (answers) {
        var itemInput = answers.itemId;
        var quanInput = answers.quantity;
        grabDatabase(itemInput, quanInput);
    });
};

function grabDatabase(itemInput, quanInput) {
    connection.query("SELECT * FROM products WHERE id = " + itemInput, function (error, response) {
        if (error) {
            console.log(error);
        };

        if (quanInput <= response[0].stock_quantity) {
            var totalCost = response[0].price * quanInput;
            console.log("You order " + quanInput + " " + response[0].product_name + ".");
            console.log("Your total cost is $" + totalCost);
            connection.query("UPDATE products SET stock_quantity = stock_quantity - " + quanInput + " WHERE id = " + itemInput)
        } else{
            console.log("Invalid Quantity");
        };
        confirmUser();
    });
};

function confirmUser() {
    inquirer.prompt([
        {
            name: "confirm",
            type: "list",
            message: "Continue shopping?",
            choices: ["Yes", "No"]
        },
    ]).then(function (answers) {
        if (answers.confirm === "Yes") {
            displayProducts();
        } else {
            console.log("Thank you for shopping!")
        }
    });

}

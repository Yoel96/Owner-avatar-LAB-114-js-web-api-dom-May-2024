![](https://user-images.githubusercontent.com/970858/63474771-d6734700-c469-11e9-83bb-9429da563909.png)


# JS WEB API. DOM

## Introduction

> ***Note:*** _This can be a pair programming activity or done independently._

Today you have learnt how to manipulate and listen to events in the DOM. Today's lab will is a mini pet-project where we are going to practise all the lesson

Ready?

## Requirements

- [Learn how to fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `code/labs` folder

## Introduction

One of the most common businesses on the Internet today are online shops (ecommerce). Websites like Amazon earn millions of dollars each year by selling all kinds of products. All these websites have something in common: they have a shopping cart.

Let's create our Reboot Academy Shopping Center, where users will be able to add and remove products in their frontend shopping cart. Additionally, it will calculate the total price of each product based on how many of those the user has added and the total price of everything in the cart.

In the started code you will find some CSS to start with that includes classes for the different types of buttons. Add the classes to the button tags you write in your HTML and they will be perfectly styled. 😉

## Starter code

You have to solve the different problems in the `starter-code/index.js` file. This Javascript file is included in the `starter-code/index.html`. 

You can easily open the HTML in Chrome, by clicking the Live Server button located in the bottom-right corner of VSCode.

After you open it, you can open the `Chrome Developer Tools` and see the `console.log`  of your exercises.



## **RULES**

- Use at least 3 `onclick` events
- Use at least one `getElementById`
- Use at least one `getElementsByTagName`
- Use at least one `getElementsByClassName`


---
## Iteration 1: Creating one product

We will start by creating the HTML for one of your products. It should look like this:

![](https://i.imgur.com/G3h1MqF.png)

Every product will have:

- A wrapper div that contains all the HTML for that product.
- A div with a span, showing the product name.
- A div with a span, showing the cost of one unit.
- A div with one label and one input, where the user will indicate how many units they will buy.
- A div with a span, showing the total price for this product. This number should be the result of multiplying the amount of units multiplied by the price of one unit of that product. The default total price should be 0.
- A div with a delete button, to remove the product from the list.

#### Calculating the total price for the product

Once you have the HTML and CSS ready, use JavaScript and functions of the `document` object to retrieve the data you need to calculate the total price for that product. Change the value of the element in the DOM that displays the total price:

- Create a click event for the `Calculate Prices` button
- This event will execute a function that:
	* Retrieves the unit price of the product
	* Retrieves the quantity of items desired
	* Calculates the total price based on this data
	* Updates the total price in the DOM

### Iteration 2: Add another product

Add a second product.

![](https://imgur.com/KYnZBEe.png)

When you click on the `Calculate Prices` button, the total prices for both products should update their values based on each quantity specified.

### Iteration 3: Calculating the total price of all products

Now that you have each product's total price, you need to calculate the total price of the entire shopping cart. Once you have that number, you need to display the result in the DOM.

![](https://imgur.com/qjdfHIX.png)

Create a new `div` below the `Calculate Prices` button. This `div` should have an `h2` element like this one:

`<h2>Total Price: <span>$0</span></h2>`

Now, as part of your "Calculate Prices" function:

- Select the elements that contain the each product's total price.
- Loop through the elements selected in the previous step, retrieve each of their total prices and add them together to get the total price of the entire shopping cart.
- Show the total price in the DOM.

### Iteration 4: Deleting a product

Associate the "Delete" buttons to click events so that when you click one, it deletes that product from the list. Steps to follow:

- Select all the "Delete" buttons
- For each button, assign a click event that will:
	- Select the wrapper div that contains all the HTML for the product that should be deleted
	- Select the parent that contains all of the product wrapper divs
	- Use the function `removeChild` we saw in [DOM Manipulators](https://docs.google.com/presentation/d/1um6JwqNtqKI52nd8DawzAlVh2Gq_OIfv1_VDMdcu9MM/edit#slide=id.g61c00a827e_2_25)

:bulb: Use `e.currentTarget` to access the "Delete" button that was just clicked and select the parent node of an HTML element with `parentNode`.

### Iteration 5: Creating new products

For the last iteration, allow the user to create new products for the shop. You'll add inputs that look like this:

![](https://imgur.com/8q6el9B.png)

Those two inputs represent the name and the unit price of the new product. Then there's the "Create" button that the user needs to click to actually add the new product to the list.

- Add two inputs to let the user enter the new product data.
- Add a "Create" button. Assign it a click event that will:
	- Get the data from the inputs.
	- Create a new product row with the data from the inputs. The structure of the new product should be the same as in Iteration #1.

:warning: Make sure that the new product you added has the same behavior than the other products:
- You should be able to calculate the product's total price
- That product's price should be included in the total price of the entire Shopping Cart
- You should be able to delete the product

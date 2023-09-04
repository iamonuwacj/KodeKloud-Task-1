let prompt = require('prompt-sync')();

const cart = {
    cartArray: [],
    addToCart: function (item) {
        this.cartArray.push(item)
        console.log("Product added successfully\n")
    },
    removeFromCart: function (product) {
        let productIndex = this.cartArray.indexOf(product)
        if (this.cartArray.includes(product)){
            this.cartArray.splice(productIndex, 1)
            console.log("Product removed successfully\n")
        }else {
            console.log("Product not in cart\n")
        }
    },
    standBy: function () {
        while (true) {
            console.log (`\nInput 'add' to add a value\nInput 'remove to remove a value\nInput 'show-items' to show the items in the cart
Input 'length' to show the lenght of the cart\nInput 'exit' to exit the program\n\n`)
        
            let operation = prompt("Command:     ")
        
            if (operation.toLowerCase() == "exit" ) {
                console.log("bye\n")
                break;
            }
            else if (operation.toLowerCase() == "add") {
                console.log ("\nType the product you will like to add")
                let item_object = prompt("Product:    ")
                cart.addToCart(item_object)
            }
            else if (operation.toLowerCase() == "show-items") {
                if (cart.cartArray.length == 0){
                    console.log("Your cart is empty\n")
                }
                console.log(this.cartArray.join(", "))
            }
            else if (operation.toLowerCase() == "length") {
                console.log(cart.cartArray.length)
            }
            else if (operation.toLowerCase() == "remove") {
                console.log ("Which Product do you wish to remove?")
                let product_name = prompt("Product Name:      ")
                cart.removeFromCart(product_name)
            }
        }   
    }
}


cart.standBy()
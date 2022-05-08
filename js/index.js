    //  Images
//  Thumbnail
const thumbnail_imgs = [
    "./images/image-product-1-thumbnail.jpg", 
    "./images/image-product-2-thumbnail.jpg", 
    "./images/image-product-3-thumbnail.jpg", 
    "./images/image-product-4-thumbnail.jpg"
]
// No Thumbnail
const main_imgs = [
    "./images/image-product-1.jpg", 
    "./images/image-product-2.jpg", 
    "./images/image-product-3.jpg", 
    "./images/image-product-4.jpg"
]

    //  Document variables
// the big image shown, the main one
const main_product = $('.main-product')

// the quantity from the minus plus action
const quantity = $('.quantity')
// the container which has the view of the cart
const view_cart = $('.view-cart')
// the message we show when the cart is empty
const empty_cart = $('.empty-cart')
// the table which has the information of the item
const cart_table = $('.cart-table')
// the quantity number of the cart
const cart_quantity = $('.cart-quantity')
const quantity_cart = $('.quantity-cart')
// total to pay 
const total = $('.total')



// Changing the main image clicking the thumb ones
// the div where the thumbnail images are
const more_products = $('.more-products')
more_products.children().map((index, image) => {
    image.addEventListener("click", () => {
        main_product.attr("src", `${main_imgs[index]}`)
        
        more_products.children().map((id, img) => {
            img.classList.remove("shown-product")
        })
        
        image.classList.add("shown-product")
    })
})

// To change the quantity number
// the minus and plus symbol
// To minus one by one 
const minus_img = $('.minus-img').click(() => {
    if (Number(quantity.text()) != 0) {
       quantity.text((index, content) => {
           return Number(content) - 1 
       })
    }
})

// To add one by one
const plus_img = $('.plus-img').click(() => {
    quantity.text((index, content) => {
        return Number(content) + 1 
    })
})

// To display the nav content
// cart img variable
const cart = $('.cart').click(() => {
    view_cart.toggleClass('show-cart')
    if (Number(quantity_cart.text()) > 0) {
        cart_table.removeClass("empty")
        empty_cart.addClass("empty")
    }
    else {
        cart_table.addClass("empty")
        empty_cart.removeClass("empty")
    }
})

// the button to add items to the cart
const adding = $('.adding').click(() => {
    quantity_cart.text((index, content) => {
        let number = Number(content) + Number(quantity.text())
        if(number > 0) {
            cart_table.removeClass("empty")
            empty_cart.addClass("empty")
            cart_quantity.removeClass("empty")
        }
        cart_quantity.text((id, text) => {
            return number
        })
        total.text((id, text) => {
            let total = Number(cart_quantity.text()) * 125
            return `$ ${total}`
        })
        return number
    })

})

// the trash of the cart to delete items, one by one
const cart_trash = $('.cart-trash').click(() => {
    if(Number(quantity_cart.text()) > 0) {
        quantity_cart.text((index, content) => {
            let number =  Number(content) - 1
            if(number == 0) {
                cart_table.addClass("empty")
                empty_cart.removeClass("empty")
                cart_quantity.addClass("empty")
            }
            cart_quantity.text((id, text) => {
                return number
            })
            total.text((id, text) => {
                let total = Number(cart_quantity.text()) * 125
                return `$ ${total}`
            })
            return number
        })
    }
})

/* light Box */
const more_products_light_box = $(".more-products-light-box")
const light_box_img = $(".light-box-img")
more_products_light_box.children().map((index, image) => {
    image.addEventListener("click", () => {
        light_box_img.attr("src", `${main_imgs[index]}`)
        
        more_products_light_box.children().map((id, img) => {
            img.classList.remove("shown-product")
        })
        
        image.classList.add("shown-product")
    })
})

// Previous img of light box
const light_box_previous = $(".light-box-previous").click(() => {
    const long = main_imgs.length - 1
    let index = main_imgs.indexOf(light_box_img.attr("src"))
    if (index == 0) {
        light_box_img.attr("src", `${main_imgs[long]}`)
    }
    else {
        light_box_img.attr("src", `${main_imgs[index - 1]}`)
    }

    more_products_light_box.children().map((id, img) => {
        img.classList.remove("shown-product")
        if (id == index - 1) img.classList.add("shown-product")
        else if (index == 0) more_products_light_box.children()[long].classList.add("shown-product")
    })
})

// Next img of light box
const light_box_next = $(".light-box-next").click(() => {
    const long = main_imgs.length - 1
    let index = main_imgs.indexOf(light_box_img.attr("src"))
    if (index == long) {
        light_box_img.attr("src", `${main_imgs[0]}`)
    }
    else {
        light_box_img.attr("src", `${main_imgs[index + 1]}`)
    }

    more_products_light_box.children().map((id, img) => {
        img.classList.remove("shown-product")
        if (id == index + 1) img.classList.add("shown-product")
        else if (index == 3) more_products_light_box.children()[0].classList.add("shown-product")
    })
})

// Opeing the light box
const light_box_open = $(".light-box-open").click(() => {
    if (window.screen.width > 576) {
        $(".light-box").css({"left": "0", "filter": "opacity(1)"})
    }
})

// Closing the light box
const light_box_close = $(".light-box-close").click(() => {
    $(".light-box").css({"left": "-100%", "filter": "opacity(0)"})
})
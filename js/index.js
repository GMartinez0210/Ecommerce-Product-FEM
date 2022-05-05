    //  Images
//  Thumbnail
const thumbnail_imgs = ["image-product-1-thumbnail.jpg", "image-product-2-thumbnail.jpg", "image-product-3-thumbnail.jpg", "image-product-4-thumbnail.jpg"]
// No Thumbnail
const main_imgs = ["image-product-1.jpg", "image-product-2.jpg", "image-product-3.jpg", "image-product-4.jpg"]

//  Trash
const icon_delete = "icon-delete.svg"

    //  Document variables
const cart = $('.cart')
const main_product = $('.main-product')
const more_products = $('.more-products')
const price = $('.price') 
const minus_img = $('.minus-img')
const plus_img = $('.plus-img')
const quantity = $('.quantity')
const view_cart = $('.view-cart')
const empty_cart = $('.empty')
const noempty_cart = $('.no-empty')
const adding = $('.adding')

minus_img.click(() => {
    if (Number(quantity.text()) > 0) {
       quantity.text((index, text) => {
           return Number(text) - 1 
       })
    }
})

plus_img.click(() => {
    quantity.text((index, text) => {
        return Number(text) + 1 
    })
})

cart.click(() => {
    view_cart.toggleClass('show-cart')
})
more_products.children().map((index, image) => {
    image.addEventListener("click", () => {
        main_product.attr("src", `./images/${main_imgs[index]}`)
        
        more_products.children().map((id, img) => {
            img.classList.remove("shown-product")
        })
        
        image.classList.add("shown-product")
    })
})



/* 
    //  Changing the quantity
let quantity_variable = 0
quantity.innerHTML = quantity_variable



    //  Changing the main product image
for(let i = 0; i < more_products.children.length; i++){
    more_products.children[i].addEventListener('click', () => {
        for(let j = 0; j < more_products.children.length; j++) {
            more_products.children[j].classList.remove('shown-product')
        }
        if(!more_products.children[i].classList.contains('shown-product')) {
            more_products.children[i].classList.add('shown-product')
            main_product.setAttribute('src', './images/' + main_imgs[i])
        }
    })
}

const cart_container = document.createElement('div')
view_cart.appendChild(cart_container)
cart_container.classList.add('cart-container')

let bougth_unids = 0

    //  Viewing the cart
function Viewing_Cart () {
    view_cart.classList.toggle('show-cart')

    if(bougth_unids == 0 & cart_container.children.length == 0) {
        let empty_cart = document.createElement('p')
        cart_container.appendChild(empty_cart)
        empty_cart.innerHTML = "Your cart is empty"
        empty_cart.classList.add('empty-cart')
    }
    else if (cart_container.children[0].classList.contains('empty-cart') & cart_container.children.length == 1) {
        let empty_cart = document.querySelector('.empty-cart')
        cart_container.removeChild(empty_cart)
    }
}

cart.addEventListener('click', () => {
    Viewing_Cart()
})

    //  Adding to the cart
let num_products = 1

let table = document.createElement('table')
let toPay = 0

adding.addEventListener('click', () => {
    
    bougth_unids += quantity_variable
    toPay = bougth_unids * 125.00

    if (quantity_variable != 0) {
        try {
            if (cart_container.children[0].classList.contains('empty-cart') & cart_container.children.length == 1) {
                let empty_cart = document.querySelector('.empty-cart')
                cart_container.removeChild(empty_cart)
            }
        } catch (error) {}

        if (cart_container.children.length == 0) {
            view_cart.style.width = 'auto'

            table.classList.add('cart-table')
            cart_container.appendChild(table)

            for(let i = 0; i < num_products; i++) {
                let tr = document.createElement('tr')
                table.appendChild(tr)
                for(let j = 0; j < 3; j++) {
                    let td = document.createElement('td')
                    table.children[i].appendChild(td)
                }
                const cart_product = document.createElement('img')
                table.children[i].children[0].appendChild(cart_product)
                table.children[i].children[0].firstChild.setAttribute('src', "./images/" + thumbnail_imgs[0])
                table.children[i].children[0].firstChild.classList.add('cart-product')

                let cart_info = document.createElement('table')
                table.children[i].children[1].appendChild(cart_info)
                table.children[i].children[1].firstChild.classList.add('cart-info')

                for(let j = 0; j < 2; j++) {
                    let tr = document.createElement('tr')
                    table.children[i].children[1].firstChild.appendChild(tr)
                }

                for(let j = 0; j < 2; j++) {
                    let td = document.createElement('td')
                    table.children[i].children[1].firstChild.children[j].appendChild(td)

                    let p = document.createElement('p')
                    table.children[i].children[1].firstChild.children[j].firstChild.appendChild(p)
                }

                table.children[i].children[1].firstChild.children[0].firstChild.firstChild.innerHTML = "Fall Limited Edition Sneakers"
                
                for(let j = 0; j < 2; j++) {
                    let span = document.createElement('span')
                    table.children[i].children[1].firstChild.children[1].firstChild.firstChild.appendChild(span)
                }
                table.children[i].children[1].firstChild.children[1].firstChild.firstChild.children[0].innerHTML = "$125.00 * " + bougth_unids
                table.children[i].children[1].firstChild.children[1].firstChild.firstChild.children[1].innerHTML = "$" + toPay + ".00"

                const cart_trash = document.createElement('img')
                table.children[i].children[2].appendChild(cart_trash)
                table.children[i].children[2].firstChild.setAttribute('src', "./images/" + icon_delete)
                table.children[i].children[2].firstChild.classList.add('cart-trash')
            }
        }
        else{
            table.children[num_products - 1].children[1].firstChild.children[1].firstChild.firstChild.children[0].innerHTML = "$125.00 * " + bougth_unids
            table.children[num_products - 1].children[1].firstChild.children[1].firstChild.firstChild.children[1].innerHTML = "$" + toPay + ".00"
        }
    }
})
 */
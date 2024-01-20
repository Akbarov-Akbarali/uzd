const body = document.querySelector("body")
const menu_icon = document.querySelector('.menu_icon')
const menu_body = document.querySelector('.menu_body')

if (menu_icon) {
    menu_icon.addEventListener("click", () => {
        menu_icon.classList.toggle("active")
        menu_body.classList.toggle("active")
        body.classList.toggle("lock")
        header_svg.classList.remove("active")
        shop_wrapper.classList.remove("active")
    })
}

const header_svg = document.querySelector(".header_svg")
const shop_wrapper = document.querySelector(".shop_wrapper")
const shop_svg = document.querySelector(".shop_svg")

if (header_svg) {
    header_svg.addEventListener("click", () => {
        shop_wrapper.classList.toggle("active")
        body.classList.toggle("lock")
        header_svg.classList.toggle("active")
        menu_icon.classList.remove("active")
        menu_body.classList.remove("active")
    })
}
if (shop_svg) {
    shop_svg.addEventListener("click", () => {
        shop_wrapper.classList.remove("active")
        body.classList.remove("lock")
        header_svg.classList.remove("active")
    })
}
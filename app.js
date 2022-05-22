// import { generateText, createElement } from './util.js'
const { checkasndgenerate, createElement } = require('./util.js')


const appInit = () => {
    const btnAdd = document.querySelector('#add-product')
    btnAdd.addEventListener('click', addProduct)
}

const addProduct = () => {
    const title = document.querySelector('#title')
    const price = document.querySelector('#price')
    const products = document.querySelector('.products')

    const titleValue = title.value
    const priceValue = price.value

    const output = checkasndgenerate(titleValue, priceValue)
    if (!output) {
        return
    }
    const producEl = createElement('li', output, 'product-list')
    products.appendChild(producEl)
    title.value = ''
    price.value = ''

}

appInit()
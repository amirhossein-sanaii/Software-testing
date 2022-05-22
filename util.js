const generateText = (title, price) => {
    return `${title} ${price}`
}

exports.createElement = (type, text, className) => {
    const newElement = document.createElement(type)
    newElement.classList.add(className)
    newElement.textContent = text
    return newElement
}

exports.showConsole = (num1, num2) => {
    const num3 = num1 + num2
    return `${num3}`
}

const validateInput = (text, notEmpty, isNumber) => {
    if (!text) {
        // console.log('!text')
        return false
    }
    if (isNumber && text === NaN) {
        // console.log('isNumber')
        return false
    }
    if (notEmpty && text.trim().length === 0) {
        // console.log('notEmpty')
        return false
    }
    // console.log('its Ok!')
    return true
}

exports.checkasndgenerate = (title, price) => {
    if (!validateInput(title, true, false) || !validateInput(price, false, true)) {
        console.log('error')
        return false
    }
    return generateText(title, price)
}

exports.generateText = generateText;
exports.validateInput = validateInput
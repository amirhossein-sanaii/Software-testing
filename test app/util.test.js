const { generateText, showConsole, checkasndgenerate } = require('../util.js')

test('should putput title and price', () => {
    const text = generateText('book', 1)
    expect(text).toBe('book 1')
})

test('test num3', () => {
    const ops = showConsole(15, 78)
    expect(ops).toBe('95')
})

test('test valide input', () => {
    const text = checkasndgenerate('test', 78)
    expect(text).toBe('test 78')

})

// expect = انتظار دارم برایه مقدار داخل پرانتز 
//toBe = خروجیش اینشکلی باشه
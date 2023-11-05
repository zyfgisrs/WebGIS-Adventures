// 参数解构就是将传递的参数解析成一个个的变量

// 参数解构的基本使用
function foo({x, y = 5}) {
  console.log(x, y);
}
foo({})            // undefined 5
foo({x: 1})        // 1 5
foo({x: 1, y: 2})  // 1 2
foo()              // TypeError: Cannot read property 'x' of undefined


    // 参数解构的注意点：
    // 1. 如果没有传递参数，会报错
    // 2. 如果传递的参数是一个空对象，但是没有提供默认值，就会报错
    // 3. 如果传递的参数不是一个对象，会报错
    // 4. 如果传递的参数没有对应的属性，会报错

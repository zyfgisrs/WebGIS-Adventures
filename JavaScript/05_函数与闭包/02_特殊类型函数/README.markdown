# 特殊函数

## 嵌套函数

```javascript
function outerFunction1(){
    console.log('Outer Function');

    function innerFunction(){
        console.log('Inner Function');
    }
    
    innerFunction();
}

outerFunction1();
```

`innerFunction` 是在 `outerFunction` 内部定义的。当你调用 `outerFunction` 时，它首先会打印 "Outer Function"，然后调用 `innerFunction`，进而打印 "Inner Function"。

- 嵌套函数可以访问外部函数的变量和参数，这种结构可以帮助你组织和封装代码，保护内部逻辑不受外部干扰。

```javascript
function createCounter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}

const counter = createCounter(); //connter为return的函数
counter();
counter();
counter();
```

述 `createCounter` 示例是一个典型的闭包示例，`counter` 函数保留了对 `createCounter` 函数作用域中 `count` 变量的访问权限。

## 箭头函数

箭头函数是`JavaScript ES6`中引入的新特性，它提供了一种更简洁、更现代的函数定义方式。

- 箭头函数的基本语法是使用 `=>` 符号来定义函数。

```javascript
const greet = name => `Hello, ${name}`;
console.log(greet('zhouyf'))
```

- 如果箭头函数有多个参数或没有参数，你需要用括号括起来。如果函数体有多条语句，你需要用花括号括起来，并且需要使用 `return` 语句来返回值

```javascript
const add = (a, b) => {
    const result = a + b;
    return result;
};
console.log(add(1, 2));
```

- 箭头函数不绑定自己的 `this` 值。它们捕获其所在上下文的 `this` 值。这个特性很有用，尤其是在回调函数和事件处理程序中。

```javascript
const myObject = {
    myMethod(){
        setTimeout(() => {
            console.log(this);
        }, 10);
    }
};
myObject.myMethod(); //打印myObject对象
```

- 箭头函数没有自己的 `arguments` 对象。如果你在箭头函数中访问 `arguments`，它将取自包含函数的 `arguments`。

```javascript
function outerFunction(){
    const arrowFunction = () => {
        console.log(arguments);
    }
    arrowFunction();
}

outerFunction(1, 2);
```

输出：

```
Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]
```

## 回调函数

## 高阶函数

## 闭包
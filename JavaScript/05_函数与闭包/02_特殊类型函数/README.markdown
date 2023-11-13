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

- 在JavaScript中，函数是"一等公民"。这意味着函数可以像任何其他值一样被传递和使用——它们可以被赋给变量，作为参数传递给其他函数，以及作为其他函数的返回值。
- 在JavaScript中，函数不仅仅是一段执行任务的代码，它们本身也是值。这就像数字1是一个值，字符串"hello"是一个值一样，函数也可以是一个值。
- 既然函数可以当作值，我们就可以将一个函数作为参数传递给另一个函数。传递给另一个函数的这个函数就称为“回调函数”。

范例：`greet`函数接收另一个函数`sayHello`作为参数。当`greet`调用时，它会执行`callback`，这里的`callback`实际上就是`sayHello`函数。

```javascript
function sayHello(){
    console.log("hello")
}

function greet(callback){
    console.log('Greeting:')
    callback();
}

greet(sayHello);
```

回调函数最常见的用途是在异步编程中。在JavaScript中，我们经常要处理不是立即完成的操作，比如从服务器获取数据或者等待用户的输入。这时候，我们不能让代码停下来等待，因为这会冻结整个程序。相反，我们需要使用回调函数来实现非阻塞（asynchronous）行为。

```javascript
function fetchData(callback){
    setTimeout(() => {
        callback('Here is your data!')
    }, 1000);
}

function processData(data){
    console.log(data);
}

fetchData(processData);
```

在上面的代码中，`fetchData`模拟了一个异步操作，它不会立即完成。它接收一个函数`processData`作为回调，这个回调函数将在1秒后，异步操作完成时，被调用。

回调函数有个常见的问题，就是当回调函数嵌套使用时，会造成所谓的“回调地狱”（callback hell），也就是代码会变得很混乱，很难读懂和维护。

```javascript
fetchData(function(data) {
  parseData(data, function(result) {
    filterData(result, function(filtered) {
      displayData(filtered, function(display) {
        // ...
      });
    });
  });
});
```

为了解决回调地狱的问题，JavaScript引入了`Promise`对象，后来又有了`async/await`语法，它们让异步代码的写法更接近同步代码，从而更容易理解和维护。不过，这些是高级话题，我们可以在理解了基本的回调函数之后再进一步学习。

## 高阶函数

> 在JavaScript中，函数是“一等公民”，这意味着它们可以像任何其他值一样被传递和操作。高阶函数是一种特别的函数，它可以接收其他函数作为参数，或者返回一个函数作为结果，有时候两者兼而有之。

- 高阶函数在JavaScript中非常有用，它们可以帮助我们编写更加抽象和复用的代码。比如，内置的数组方法 `.map()`, `.filter()`, `.reduce()` 都是高阶函数的例子。

### 接收函数作为参数

当高阶函数接收一个或多个函数作为参数时，这些传入的函数通常被称为回调函数。这样做的好处是，你可以将具体的操作延迟到函数执行的时候再定义，增加了代码的灵活性。

```javascript
function greet(sayHello) {
  setTimeout(() => {
    sayHello();
  }, 1000);
}

function sayHello() {
  console.log("Hello");
}

greet(sayHello);
```

这个例子展示了高阶函数与异步编程结合的情形，`greet` 函数不立即执行传递给它的 `sayHello` 函数，而是创建了一个计划在未来某个时间点执行的任务。这种模式在JavaScript中非常常见，尤其是在处理事件监听、时间延迟、网络请求等场景。

### 返回函数作为结果

```javascript
function createGreeting(greet) {
  return function (name) {
    return greet + " " + name;
  };
}

const greetWithHello = createGreeting("Hello");
const greetWithBye = createGreeting("Bye");

console.log(greetWithHello("Alice"));
console.log(greetWithBye("Bob"));
```

在这个例子中，`createGreeting` 是一个高阶函数，它接受一个问候语并返回一个新的函数。这个返回的函数会接受一个名字并返回一个完整的问候语。每个返回的函数都记住了它们被创建时的 `greeting` 参数。

> **函数工厂**：可以返回函数的高阶函数就像一个工厂，根据输入的参数定制和返回新的函数。

## 闭包

### 词法作用域

> JavaScript中的词法作用域（也称为静态作用域）是一个关键概念，它决定了如何在代码中查找变量。理解词法作用域对于编写有效和安全的JavaScript代码至关重要。

1. **作用域基础**：
   - **作用域**是指程序中定义变量的区域。
   - 在JavaScript中，作用域控制着变量和参数的可见性和生命周期。
   - 它限制了在某个特定部分的代码中可以访问哪些变量。
2. **词法作用域定义**：
   - 词法作用域是在编写代码时变量和函数被定义的地方决定它们可被访问的范围。
   - 这意味着函数的作用域在函数定义时就已经确定了，而不是在函数调用时。
3. **词法作用域的工作原理**：
   - 当查找一个变量时，JavaScript会首先在当前函数的作用域内查找。
   - 如果没有找到，它会继续在包含（外层）作用域查找，直到达到全局作用域。
   - 如果在全局作用域中仍然没有找到，就会产生一个错误（在非严格模式下是`undefined`）。
4. **代码块和作用域**：
   - 除了函数作用域，ES6引入了`let`和`const`关键字，允许创建块级作用域（例如，在`if`语句或`for`循环中）。
5. **函数嵌套和作用域链**：
   - 函数可以嵌套在其他函数内部。
   - 每个函数都有自己的词法作用域，形成了一个作用域链。
   - 内部函数可以访问外部函数的变量，反之则不行。
6. **闭包与词法作用域**：
   - 闭包是JavaScript中的一个特性，允许函数访问并操作其词法作用域外的变量。
   - 即使外层函数已经返回，闭包仍然可以记住并访问函数定义时的作用域。
7. **词法作用域与执行上下文**：
   - 虽然词法作用域是在代码编写时就确定的，但JavaScript引擎在运行时还会创建执行上下文。
   - 执行上下文管理着代码运行时的环境，包括词法作用域。

```javascript
let x = "global";

function outer() {
let x = "outer";

function inner() {
  let x = "inner";

  console.log(x);
}

inner(); //inner

console.log(x); //outer
}

outer();

console.log(x); //global
```

`inner` 函数打印的是自己作用域内的变量 `x`，即输出 'inner'。当`inner` 函数执行完毕，控制权回到 `outer` 函数，它打印的是自己作用域内的变量 `x`，即 'outer'。最后，全局作用域中的 `x` 被打印出来，输出 'global'。

### JavaScript作用域与Java作用域的区别

JavaScript和Java都使用作用域来控制变量的可见性和生命周期，但它们在作用域的处理上有一些关键的区别。

1. **作用域类型**：
   - JavaScript传统上使用函数级作用域，意味着变量的作用域被限制在声明它的函数内部。ES6引入了`let`和`const`，它们提供块级作用域。
   - Java使用块级作用域，变量的作用域被限制在声明它的块内部，例如方法、条件语句或循环中。
2. **提升（Hoisting）**：
   - 在JavaScript中，变量（使用`var`声明的）和函数声明会被提升到它们各自作用域的顶部，但只有声明本身被提升，赋值或初始化留在原地。
   - Java中不存在变量提升的概念，变量和方法必须在使用之前声明。
3. **全局作用域**：
   - JavaScript中，如果一个变量在函数之外声明，它就是全局变量，并且可以在代码的任何地方访问。
   - Java中没有全局变量的概念。最接近的概念是类的静态成员，这些成员可以在类的任何实例之间共享。
4. **词法作用域与动态作用域**：
   - JavaScript是词法作用域的，意味着函数的作用域在定义时就决定了。
   - Java也是词法作用域的，但是由于它是一种编译型语言，这一点在编译阶段就已经明确。
5. **生命周期**：
   - 在JavaScript中，如果一个变量没有更多的引用指向它，它将被垃圾回收机制回收。
   - Java中，对象生命周期由垃圾回收器控制，但局部变量的生命周期随着方法的结束而结束。

### 相关概念

1. **函数作用域**：在JavaScript中，每个函数在创建时都会生成一个新的作用域。作用域是一个特殊的内部空间，它包含了在函数中定义的变量和函数。函数内部的变量只能在函数内部访问，外部不能访问。
2. **词法作用域**：JavaScript采用词法作用域（Lexical Scoping），也就是说函数的执行依赖于变量的作用域是由函数声明的位置来决定的，而不是由函数的调用位置决定的。
3. **闭包定义**：闭包是一个函数和对其周围状态（即词法环境）的引用捆绑在一起的组合。这意味着一个函数不仅可以访问在其内部定义的变量，还可以访问其外部函数的变量。
4. **闭包的创建**：闭包通常是在一个函数内部创建另一个函数时形成的。当内部函数被某种方式传到它的外部作用域时，它会携带一个包含其父作用域变量的引用。
5. **闭包的用途**：闭包可以用于创建私有变量，实现封装和数据隐藏，以及在JavaScript中模拟私有方法。
6. **闭包的特点**：
   - **记忆性**：闭包可以记住和访问创建它的函数的作用域中的变量，即使创建它的函数已经执行完毕。
   - **封装性**：利用闭包可以封装变量，创建私有变量和函数。
7. **闭包的陷阱**：闭包可能导致内存泄漏，因为闭包的引用会保持所引用变量的活性，这意味着这些变量不会被垃圾回收机制回收。

### 闭包场景

#### 私有变量

闭包可以用来创建私有变量，这样这些变量就不能直接从外部访问了，只能通过闭包提供的函数来访问。

```java
function createBankAccount(initialBalance) {
let balance = initialBalance;

return {
  deposit: function (amount) {
    balance += amount;
    return balance;
  },
  withdraw: function (amount) {
    if (balance > amount) {
      balance -= amount;
      return balance;
    } else {
      return "Insufficient funds";
    }
  },
  checkBalance: function () {
    return balance;
  },
};
}

const account = createBankAccount(1000);
console.log(account.checkBalance());
account.deposit(100);
console.log(account.checkBalance());
account.withdraw(500);
console.log(account.checkBalance());
```

#### 计数器

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

#### 封装功能模块

```javascript
const calculator = (() => {
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

return {
  add,
  subtract,
};
})();

console.log(calculator.add(1, 2));
console.log(calculator.subtract(10, 2));
```

```javascript
//给定初始值然后做加减的操作
const calculatorPro = ((initNumber) => {
function add(a) {
  return initNumber + a;
}

function subtract(a) {
  return initNumber - a;
}

return {
  add,
  subtract,
};
})(100);

console.log(calculatorPro.add(50));
console.log(calculatorPro.subtract(50));
```

#### 在循环中使用闭包

```javascript
function createButtons() {
  for (let i = 1; i <= 5; i++) {
    document.body.innerHTML += `<button>Button ${i}</button>`;
    document.getElementsByTagName('button')[i-1].onclick = (function(number) {
      return function() {
         alert("This is button " + number);
      };
    })(i);
  }
}

createButtons();
```


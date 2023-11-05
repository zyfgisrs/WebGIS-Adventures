# JavaScript 函数基础

---

## 函数定义
函数是JavaScript中实现代码重用的主要方式。通过关键字 `function` 来定义。

```javascript
function() func{
    console.log('Hello!');
};
```

## 函数表达式

函数表达式定义：函数可以赋值给一个变量，这种赋值形式的函数称为函数表达式。

```javascript
let greet = function() {
    console.log('Hello!');
};

greet();  // Outputs: Hello!
```

函数表达式可以是匿名的，也可以有名称。

## 默认参数

在函数定义时，我们可以为参数提供默认值。

```javascript
function fn(a, b = 1, c = 2) {
  console.log(a, b, c);
}

fn(1, 2, 3);  // 1 2 3
fn(1);        // 1 1 2
```

当不提供某个参数值时，会使用该参数的默认值。

## 剩余参数

剩余参数允许我们将不确定数量的参数作为数组传递。

```javascript
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

var result = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result); // Outputs: 55
```

注意点：

- 剩余参数必须放在参数列表的最后。
- 只能有一个剩余参数。
- 剩余参数可以不传值，也可以传多个值。
- 可以传递不同类型的参数，如数组、函数、对象等。

##  结构赋值

参数解构允许我们从对象或数组中提取数据，对变量进行赋值。

### 对象解构

```javascript
const user = {
    name : 'Tom',
    age : 12
};

function printUser({name, age}){
    console.log(`name : ${name}, age : ${age}`);
}

printUser(user);
```

```
name : Tom, age : 12
```

### 数组解构

```javascript
function printPoint([x,y]){
    console.log(`point:x = ${x}, y = ${y}`);
}

var point = [1, 2];

printPoint(point);
```

```
point:x = 1, y = 2
```

### 默认值

```java
function greet({name = 'tom', age = 10} = {}){
    console.log(`Hello ${name} you are ${age} years old`);
}

greet();
greet({name : 'james'});
greet({name : 'lucy', age : 26})
```

```
Hello tom you are 10 years old
Hello james you are 10 years old
Hello lucy you are 26 years old
```

### 嵌套解构

```javascript
const student = {
    name : 'zhouyf',
    address : {
        city : 'changchun',
        street : '自由大路'
    }
};

function printStudent({name, address : {city, street}}){
    console.log(`name = ${name} address = ${city} ${street}`);
}

printStudent(student);
```

```
name = zhouyf address = changchun 自由大路
```

注意点：
- 若不传递参数或传递的参数不符合预期的结构，可能会报错。
- 解构提供了一种更简洁的方法，来提取多个属性值。

## 函数作用域

函数作用域也就是变量在函数内部如何被访问和存储的。了解函数作用域对于正确、有效地编写JavaScript代码非常重要。接下来我会逐步解释函数作用域的概念。

- 在JavaScript中，每当你创建一个函数，你都会为该函数创建一个新的**作用域**。这意味着在该函数内部声明的变量只能在该函数内部被访问。这就是所谓的**局部作用域**或**函数作用域**。
- 在函数内部声明的变量称为局部变量。这些变量只能在声明它们的函数内部被访问。
- 在函数外部声明的变量称为**全局变量**，它们在代码的任何地方都是可访问的，包括在函数内部。
- JavaScript早期只有函数作用域，没有块级作用域。但是，使用`let`和`const`（ES6及之后的版本）声明的变量具有块级作用域。
- JavaScript遵循词法作用域，这意味着函数的作用域在函数定义时就已经确定，而不是在函数调用时确定。

```javascript
var name = "Alice";

function outerFunction() {
    var name = "Bob";
    
    function innerFunction() {
        console.log(name); // 输出 "Bob" 而不是 "Alice"
    }
    
    innerFunction();
}

outerFunction();
```

```
Bob
```

## 函数提升

函数提升允许我们在函数声明之前调用函数。

```javascript
res = add(3, 4);
console.log(res);  // 7

function add(a, b) {
  return a + b;
}
```

但是，函数表达式不会提升。

```javascript
res1 = sub(4, 1);  // Error: sub is not defined
console.log(res1);

let subtract = function sub(a, b) {
  return a - b;
}
```

注意：函数提升只适用于通过函数声明定义的函数，而不适用于函数表达式。

## 立即调用的函数表达式

**立即调用的函数表达式**（通常简称为 **IIFE**，读作 "iffy"，其全称为 **Immediately Invoked Function Expression**）。

```javascript
(function (){
    console.log('12345');
}
)();
```

```javascript
(function (){
    var a = 1;
    var b = 2;
    var res = a + b;
    console.log(res);
}
)();
```

使用箭头表达式：

```javascript
(() => {
    console.log('123');
})();
```

`IIFE`也可以接受参数：

```javascript
(function(x, y) {
    console.log(x + y);  // 输出 3
})(1, 2);
```

`IIFE`是JavaScript中创建新作用域、避免变量冲突和保持代码模块化的重要工具。它允许你在不污染全局作用域的情况下运行函数，并提供了一种有效的方式来“保护”你的变量和函数。

## 参数传递方式

在JavaScript中，参数的传递可以分为两种基本类型：按值传递和按引用传递。

### 值传递

在按值传递中，当你将一个变量传递给函数时，实际上是将该变量的值复制给了函数的参数。这意味着，在函数内部对参数的任何修改都不会影响到外部的变量。

基本类型（如：Number, String, Boolean, null, undefined）在JavaScript中是按值传递的。

### 引用传递

与按值传递不同，在按引用传递中，当你将一个对象（例如数组或对象）传递给函数时，你实际上是将对象的引用传递给了函数，而不是对象的拷贝。因此，函数内部对对象的任何修改都会影响到外部的对象。

## arguments对象

在JavaScript中，`arguments` 是一个类数组对象，它代表传递给一个函数的参数。`arguments` 对象提供了一个方便的方法来访问函数的参数，特别是当你不知道事先将传递多少参数时，或者你想访问除了已命名参数之外的参数时。

```javascript
function showArgs(){
    for(let i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}

showArgs(1, 2, 3);
```

ES6及以后的版本中，可以使用剩余参数语法（`...args`）作为 `arguments` 对象的替代。

```javascript
function showArgs(...args) {
    for (let arg of args) {
        console.log(arg);
    }
}

showArgs('x', 'y', 'z');  // 输出: x, y, z
```

注意点：

`arguments` 对象不可用于箭头函数。在箭头函数中尝试访问 `arguments` 对象将导致一个错误。


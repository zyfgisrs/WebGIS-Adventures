# 数据类型

在 JavaScript 中，有两种不同的数据类型群组：原始类型和对象类型。

## 原始数据类型

1. **Number**: 表示数字，可以是整数或浮点数，包括特殊的数值如 `Infinity`, `-Infinity` 和 `NaN`（不是一个数字）。
2. **String**: 表示文本数据，可以包含一个或多个字符，使用单引号、双引号或反引号来定义。
3. **Boolean**: 表示逻辑值，可以是 `true` 或 `false`。
4. **Undefined**: 表示变量已声明但尚未赋值时的状态。
5. **Null**: 表示一个空值，通常用于表示“无”或“空”（与 undefined 不同，它是一个赋予了值的空类型）。
6. **Symbol** (`ECMAScript 6` 新增): 表示唯一的、不可变的数据类型，常用于对象属性的键。
7. **BigInt** (`ECMAScript` 2020 新增): 用于表示大于 `2^53 - 1` 的整数。

### Null值的使用

```javascript
function getUserDetails(userId) {
    return null;
}

let userDetails = getUserDetails(1);

if (userDetails === null) {
    console.log('没有找到用户Id');
}
```

### Symbol类型

```javascript
let sym1 = Symbol();

let sym2 = Symbol('v1');
let sym3 = Symbol('v1');

let myObject = {
    [sym1]: 'Value for sym1',
    [sym2]: 'Value for sym2'
}


// 访问 Symbol 属性
console.log(myObject[sym1]); // 输出：Value for sym1
console.log(myObject[sym2]); // 输出：Value for sym2

// Symbol 属性不会出现在 for...in 循环中
for (let property in myObject) {
    console.log(property); // 不会输出 Symbol 属性
}

// Symbols 是唯一的，即使它们的描述相同
console.log(sym2 === sym3); // 输出：false

// 获取对象的 Symbol 属性数组
let symbolsInObject = Object.getOwnPropertySymbols(myObject);
console.log(symbolsInObject); // 输出：[Symbol(), Symbol(description)]
```

## 对象类型

1. **Object**: 最基本的数据结构，其他所有非原始类型如数组、函数都是对象类型的特殊版本。
2. **Array**: 用于表示一系列有序的集合，可以包含任何类型的数据。
3. **Function**: 表示可以被调用的代码块。
4. **Date**: 表示日期和时间。
5. **`RegExp`**: 用于描述字符模式的对象，常用于字符串的模式匹配。

### Object类型

在 JavaScript 中，一个 `Object` 是键值对的集合。它是一种复合数据类型，其中的键（key）通常是字符串（或者 `Symbol`），值（value）可以是任何数据类型的数据，包括其他对象。对象可以被视为一个存储数据的容器，这些数据可以是多种多样的。

#### 创建object对象

使用字面量语法

```javascript
let person = {
    name : 'Alice',
    age : 24
}
```

使用new方法

```javascript
let person = new Object();
person.name = 'Alice';
person.age = 23;
```

使用构造函数

```javascript
function Person(name, age){
    this.name = 'Alice';
    this.age = 24;
}

let person = new Person('Alice', 24);
```

#### 访问对象属性

访问对象属性可以通过`.`点符号和`[]`方括号进行访问。

```javascript
console.log(person.name);  // 使用点符号
console.log(person['age']); // 使用方括号
```

#### 修改对象属性

对象是可变的，意味着我们可以随时添加、修改或删除属性。

```javascript
let person = { name: 'Alice', age: 25 };
person.name = 'Bob'; // 修改属性
person.height = 170; // 添加新属性
delete person.age; // 删除属性
```

#### 对象方法

```javascript
let obj = {
    name : 'Alice',
    greet : function (){
        console.log('hello');
    }
}
obj.greet()
```

#### this关键字

在方法内部，`this` 关键字用于引用调用该方法的对象。

```javascript
let obj = {
    name : 'Alice',
    greet : function (){
        console.log('hello, my name is ' + this.name);
    }
}
obj.greet()
```

#### 原型

每个 JavaScript 对象都有一个与之关联的原型对象，它从原型对象继承方法和属性。

```javascript
function Student(name){
    this.name = name;
}

Student.prototype.greet = function (){
    console.log('Hello, my name is ' + this.name);
}
let student = new Student('Alice');
student.greet();
```

### Date类型

- 创建Date对象
- Date 对象的方法
- 日期比较和运算
- 格式化和输出日期

```javascript
//获取当前时间
let now = new Date();
console.log(now)


//根据特定的日期和时间创建
let specificDate = new Date(2023, 3, 10);
console.log(specificDate);// 注意月份是从0开始的，所以3代表4月

//解析日期字符串
let date = new Date('2023-04-01');
console.log(date);

console.log(now.getFullYear()); // 获取年份
console.log(now.getMonth());    // 获取月份，0 表示一月
console.log(now.getDate());     // 获取月份中的第几天
console.log(now.getDay());      // 获取星期中的第几天，0 表示星期天

let date1 = new Date(2023, 3, 10);
let date2 = new Date(2024, 3, 10);

console.log(date1 < date2); // true, date1 比 date2 早

let date3 = new Date(2023, 3, 10);
let date4 = new Date(2023, 3, 15);
let difference = date2 - date1; // 得到的差值是毫秒数
console.log(difference / (1000 * 60 * 60 * 24)); // 转换为天数

console.log(now.toString()); // 将日期转换为完整的字符串形式
console.log(now.toDateString()); // 只显示日期部分
console.log(now.toTimeString()); // 只显示时间部分
console.log(now.toISOString()); // 使用ISO标准格式显示
```


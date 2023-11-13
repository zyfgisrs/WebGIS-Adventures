# DOM 属性

## 目录

- [获取属性](#获取属性)
  - [getAttribute()](#getAttribute())
  - [直接访问属性](#直接访问属性)
  - [dataset](#dataset)
- [设置属性](#设置属性)
  - [setAttribute()](#setAttribute())
  - [直接设置属性](#直接设置属性)
- [删除属性](#删除属性)
- [属性与属性节点](#属性与属性节点)
  - [属性与属性节点的区别](#属性节点与属性的区别)
- [布尔属性](#布尔属性)
  - [常见的布尔属性](#常见的布尔属性)
- [自定义属性](#自定义属性)

------

## 获取属性

### getAttribute()

使用 `getAttribute()` 方法，你可以获取元素的属性值。这是一个非常直观且灵活的方式。

```javascript
var element = document.getElementById("myElement");
var attrValue = element.getAttribute("myAttribute");
```

### 直接访问属性

对于一些常用的标准属性（如 `id`、`className`、`href` 等），你可以直接通过对象属性访问它们。

```javascript
var element = document.getElementById("myElement");
var idValue = element.id; // 直接访问 'id' 属性
```

### dataset

HTML5引入了一个新的特性，允许你通过 `data-*` 属性在HTML元素中存储自定义数据。你可以通过 `dataset` 属性轻松访问这些数据。

HTML：

```javascript
<div id="myElement" data-myAttribute="someValue"></div>
```

JavaScript：

```javascript
var element = document.getElementById("myElement");
var dataValue = element.dataset.myAttribute; // "someValue"
```

------

## 设置属性

### setAttribute()

```javascript
const text = document.getgetElementById("id");
text.setAttribute("style", "color: red; font-size: 20px;");
```

### 直接设置属性

```javascript
const text = document.getgetElementById("id");
text.style.color = "blue";
text.style.fontSize = "30px";
```

------

## 删除属性

### removeAttribute()

`removeAttribute()`方法可以删除属性

```javascript
text.removeAttribute("style"); //删除text的内联样式
```

------

## 属性与属性节点

在文档对象模型（DOM）中，"属性"（Attribute）和"属性节点"（Attribute Node）经常被用来描述HTML元素的附加信息。虽然两者都提供有关HTML元素的信息，但它们在使用和访问方式上有一些不同。

在文档对象模型（DOM）中，"属性节点"（Attribute Node）是一种特殊类型的节点，用于表示HTML元素的属性。与元素节点（Element Nodes）和文本节点（Text Nodes）不同，属性节点不是文档树中的“主要”节点，而是附属于特定元素节点的。

```javascript
<a id="link1" href="https://example.com">Visit Example.com</a>
```

在这个例子中，`<a>`标签是一个元素节点，而`id`和`href`则是属性节点。

- ### `getAttributeNode`获取属性节点

  ```javascript
  const link = document.getElementById('link1');
  const hrefAttributeNode = link.getAttributeNode('href');
  ```

- ### 修改属性节点

  一旦获取了属性节点，就可以修改它：

  ```javascript
  hrefAttributeNode.value = "https://www.google.com";
  ```

- ### 创建和添加属性节点

  ```c++
  const newAttr = document.createAttribute('data-info');
  newAttr.value = 'some information';
  link.setAttributeNode(newAttr);
  ```

### 属性节点与属性的区别

虽然“属性”和“属性节点”都用于描述HTML元素的额外信息，但它们在JavaScript中的用法是不同的：

- **属性（Attributes）**：通常更简单、更直接。大多数标准的HTML属性都可以直接作为对象属性来访问和修改，例如 `element.href` 或 `element.id`。
- **属性节点（Attribute Nodes）**：提供更多的灵活性和控制，例如，你可以遍历一个元素的所有属性节点。

------

## 布尔属性

布尔属性（Boolean attributes）在 HTML 和 DOM 中是一类特殊的属性，它们的存在或不存在代表了 `true` 或 `false` 的值。与其他属性不同，布尔属性通常不需要赋值（即使你赋值了，也通常不会影响其行为）。

### 常见的布尔属性

以下是一些常用的 HTML 布尔属性：

- `checked`：用于 `input type="checkbox"` 或 `input type="radio"`。
- `disabled`：用于表单元素如 `input`、`button`、`select` 等。
- `readonly`：用于 `input` 和 `textarea` 元素。
- `required`：用于 `input`、`select`、和 `textarea`。
- `selected`：用于 `option` 元素。
- `hidden`：用于任何 HTML 元素。
- `autoplay`：用于 `<audio>` 和 `<video>`。
- `loop`：用于 `<audio>` 和 `<video>`。
- `muted`：用于 `<audio>` 和 `<video>`。

### 布尔属性在HTML中的使用

在 HTML 中使用布尔属性时，通常只需要写出属性名：

```javascript
<input type="checkbox" checked>
<input type="text" disabled>
```

### 布尔属性在JavaScript中的操作

在 JavaScript 中，你可以直接使用元素对象的属性来获取或设置布尔属性：

```javascript
const checkbox = document.querySelector('input[type="checkbox"]');
console.log(checkbox.checked);  // 获取 checked 属性的值（true 或 false）

checkbox.checked = true;  // 设置 checked 属性为 true
```

注意点：

- 在 HTML 中，布尔属性的存在即表示 `true`，无论其值是什么。例如，`<input disabled="false">` 实际上是禁用的，因为 `disabled` 属性存在。
- 在 JavaScript 中，布尔属性通常是实际的 JavaScript 布尔值（`true` 或 `false`）。
- 某些布尔属性（如 `checked` 和 `selected`）既有属性也有状态（property vs. state）。当页面首次加载时，属性（attribute）决定其初始状态，但用户与页面交互后，你应该查看和修改状态（property），而不是属性。

------

## 自定义属性

在 DOM（文档对象模型）中，自定义属性允许你将额外的信息存储在 HTML 元素中，而不必使用非标准的属性或创建隐藏的 DOM 元素来存储数据。这些自定义属性通常以 `data-` 前缀开头。

- ### 定义自定义属性

  自定义属性在 HTML 中的定义非常直接，只需要在元素标签内添加以 `data-` 开头的属性即可：

  ```javascript
  <div id="myDiv" data-my-attribute="someValue">Hello, World!</div>
  ```

- ### `getAttribite()`获取自定义属性

  使用`getAttribite()`获取自定义属性

  ```javascript
  const myDiv = document.getElementById("myDiv");
  const value = myDiv.getAttribute("data-my-attribute");
  ```

- ### 使用`dataset`获取自定义属性

  自定义数据属性也可以通过 `dataset` 属性轻松地在 JavaScript 中访问：

  ```javascript
  const myDiv = document.getElementById("myDiv");
  const value = myDiv.dataset.myAttribute; // 注意：属性名是以驼峰式命名的
  ```

- ###  `setAttribute()`设置自定义属性

  ```javascript
  myDiv.setAttribute("data-another-attribute", "anotherValue");
  ```

- ### dataset设置自定义属性

  ```javascript
  myDiv.dataset.anotherAttribute = "anotherValue";
  ```

- ### 遍历自定义属性

  ```javascript
  const myDiv = document.getElementById("myDiv");
  for (let name in myDiv.dataset) {
      console.log(name, myDiv.dataset[name]);
  }
  ```

- ### 注意点：

  1. **命名规则**：属性名称不应该包含大写字母，并且在转换为 JavaScript 属性名时应该转换为驼峰式命名。

  2. **值类型**：自定义属性的值总是字符串。如果你想存储其他类型的数据（如对象或数组），你需要将其转换为字符串（如通过 JSON.stringify）。

  3. **用途**：自定义属性主要用于存储与 DOM 元素直接相关的数据，不应该用于存储应用的全局状态。
# DOM 选择器

## 目录

- [简介](#简介)
- [基础选择器](#基础选择器)
  - [ID选择器](#ID选择器)
  - [类选择器](#类选择器)
  - [标签选择器](#标签选择器)

- [复杂选择器](#复杂选择器)
- [转换为数组](#转换为数组)

---

## 简介

**DOM（Document Object Model）** 是一个跨平台和语言独立的接口，它允许程序和脚本动态地访问和更新文档的内容、结构和样式。

---

## 基础选择器

### ID选择器

- #### `getElementById`：这个方法返回与指定ID匹配的元素。

- #### `getElementById（）`返回的是一个元素，因为HTML中ID是唯一的。

  ```javascript
  const myElement = document.getElementById("myId");
  ```

### 类选择器

- #### `getElementsByClassName`：这个方法返回一个包含所有匹配特定类名的元素的集合。

  ```javascript
  const elementsWithClass = document.getElementsByClassName("myClass");
  ```

  - `getElementsByClassName`方法返回的是一个`HTMLCollection`对象，`HTMLCollection`是一个类数组（array-like）对象，用于存储按照文档顺序排列的DOM节点列表。这个列表是实时的，意味着如果DOM发生更改（例如，如果添加或删除了与该集合匹配的元素），那么这些更改会自动反映在`HTMLCollection`中。
  - 类数组对象意味着这个对象有一个`length`属性，而且可以通过索引（例如`[0]`，`[1]`等）来访问元素，但并不拥有数组的所有方法，比如`map`、`filter`等。

### 标签选择器

- #### `getElementsByTagName`：这个方法返回一个包含所有匹配特定标签名称的元素的集合。

  ```javascript
  const paragraphs = document.getElementsByTagName("p");
  ```

- getElementsByTagName方法同样返回一个`HTMLCollection`对象。

## 复杂选择器

- #### `querySelector`：返回文档中匹配指定 CSS 选择器的第一个元素。

  ```javascript
  const firstButton = document.querySelector("button");
  ```

- #### `querySelectorAll`：返回文档中匹配指定 CSS 选择器的所有元素的集合。

  ```javascript
  const allButtons = document.querySelectorAll("button");
  ```

  - `querySelectorAll`方法返回的是NodeList对象，`NodeList` 对象是一个类数组（array-like）结构，用于存储一组有序的节点。与 `HTMLCollection` 类似，你可以通过索引（如 `0`，`1`，`2` 等）来访问其中的元素，并且它也有一个 `length` 属性，用于表示列表中元素的数量。

## 转换为数组

- 由于`getElementsByClassName`方法返回的是一个类数组对象，我们经常会将其转换为一个真正的数组。

  ```javascript
  const elementsArray = Array.from(elementsWithClass);
  ```

  

---

## 属性和文本操作

### 元素属性操作

- #### `getAttribute()`: 获取属性值
  
  ```javascript
  const attribute = element.getAttribute("href");
  ```
  
- #### `setAttribute()`: 设置属性值
  
  ```javascript
  element.setAttribute("href", "https://example.com");
  ```
  
- `hasAttribute（）`： 可以检查元素是否具有某个属性。

- `removeAttribute`：可以删除某个属性。

  ```javascript
  // 检查属性是否存在
  if (element.hasAttribute('myAttribute')) {
    // 删除属性
    element.removeAttribute('myAttribute');
  }
  ```

- #### 使用点（`.`）语法

  ```
  一些常用的属性（如 id、class）也可以直接通过点（.）语法访问。
  ```

  

### 文本内容操作

- `innerText` 和 `textContent`
  
  ```javascript
  element.innerText = "Hello, world!";
  ```

---

## 样式和类操作

### 操作样式

- `style` 属性
  ```javascript
  element.style.color = "red";
  ```
  
### 操作类

- `classList` 对象
  ```javascript
  element.classList.add("new-class");
  element.classList.remove("old-class");
  element.classList.toggle("toggle-class");
  ```

---

## 节点操作

### 创建、插入和删除节点

- `createElement()`: 创建新元素
  ```javascript
  const newElement = document.createElement("div");
  ```
  
- `appendChild()`: 插入新节点
  ```javascript
  parentElement.appendChild(newElement);
  ```
  
- `removeChild()`: 删除子节点
  ```javascript
  parentElement.removeChild(childElement);
  ```

---

## 事件处理

### 常见事件类型

- Mouse events: `click`, `dblclick`, `mouseover`, `mouseout`, `mousemove`
- Keyboard events: `keydown`, `keyup`

### 添加和移除事件监听器

- `addEventListener()`
  ```javascript
  element.addEventListener("click", function() {
    alert("Element clicked!");
  });
  ```
  
- `removeEventListener()`
  ```javascript
  element.removeEventListener("click", clickFunction);
  ```

---

## 动画和计时器

### 使用 `setInterval` 和 `setTimeout`

- `setInterval()`: 周期性执行代码
  ```javascript
  setInterval(function() {
    console.log("This will show every 2 seconds");
  }, 2000);
  ```

- `setTimeout()`: 延迟执行代码
  ```javascript
  setTimeout(function() {
    console.log("This will show after 2 seconds");
  }, 2000);
  ```


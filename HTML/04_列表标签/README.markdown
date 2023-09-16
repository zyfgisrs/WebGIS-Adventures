# 列表标签

在HTML中，有三种主要类型的列表：无序列表、有序列表和定义列表。下面是各种列表标签的详细解释和示例。

- `ul`: Unordered List（无序列表）
- `li`: List Item（列表项）
- `ol`: Ordered List（有序列表）
- `dl`: Description List（定义列表）

---

## 目录

1. [无序列表 (`<ul>`)](#无序列表-ul)
2. [有序列表 (`<ol>`)](#有序列表-ol)
3. [定义列表 (`<dl>`)](#定义列表-dl)
4. [嵌套列表](#嵌套列表)
5. [属性](#属性)

---

## 无序列表 (`<ul>`)

无序列表使用`<ul>`元素来创建，其中的每个列表项使用`<li>`元素。

### 基本结构

```html
<ul>
  <li>项目 1</li>
  <li>项目 2</li>
  <li>项目 3</li>
</ul>
```

### 输出

- 项目 1
- 项目 2
- 项目 3

---

## 有序列表 (`<ol>`)

有序列表使用`<ol>`元素来创建，其内部结构与`<ul>`类似，也是使用`<li>`来创建每个列表项。

### 基本结构

```html
<ol>
  <li>第一个项目</li>
  <li>第二个项目</li>
  <li>第三个项目</li>
</ol>
```

### 输出

1. 第一个项目
2. 第二个项目
3. 第三个项目

---

## 定义列表 (`<dl>`)

定义列表用于显示术语和其定义，使用`<dl>`元素来创建。其中，`<dt>`用于写术语，`<dd>`用于写定义。

### 基本结构

```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language，用于创建Web页面的标准标记语言。</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets，用于描述HTML文档的样式。</dd>
</dl>
```

### 输出

- **HTML**
  - HyperText Markup Language，用于创建Web页面的标准标记语言。
- **CSS**
  - Cascading Style Sheets，用于描述HTML文档的样式。

---

## 嵌套列表

你也可以在一个列表项里面嵌套另一个列表（无论是有序还是无序列表）。

### 示例

```html
<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Carrot</li>
      <li>Broccoli</li>
    </ul>
  </li>
</ul>
```

---

## 属性

- `type`: 用于`<ol>`，用于定义数字类型（`1`, `A`, `a`, `I`, `i`）。
- `start`: 用于`<ol>`，用于定义开始数字。
- `reversed`: 用于`<ol>`，用于反转排序。

### 示例

```html
<ol type="A" start="3">
  <li>第一个项目</li>
  <li>第二个项目</li>
</ol>
```

### 输出

C. 第一个项目  
D. 第二个项目
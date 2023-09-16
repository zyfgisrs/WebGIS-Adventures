# CSS 伪类选择器和伪元素选择器

伪类和伪元素是用于选取HTML元素的特殊实例的。

---

## 目录

1. [伪类选择器](#伪类选择器)
   - [动态伪类选择器](#动态伪类选择器)
   - [结构伪类选择器](#结构伪类选择器)
   - [目标伪类选择器](#目标伪类选择器)
   - [否定伪类选择器](#否定伪类选择器)
   - [输入表单伪类选择器](#输入表单伪类选择器)
  
2. [伪元素选择器](#伪元素选择器)
   - [`::before` 和 `::after`](#before-和-after)
   - [`::first-letter` 和 `::first-line`](#first-letter-和-first-line)
   - [`::selection`](#selection)

---

## 伪类选择器

### 动态伪类选择器

#### `:hover`

选择鼠标悬停在其上的元素。

```css
a:hover {
  color: red;
}
```

#### `:active`

选择鼠标点击或触摸屏触摸时激活的元素。

```css
a:active {
  color: blue;
}
```

#### `:focus`

选择获得键盘焦点的元素。

```css
input:focus {
  border-color: green;
}
```

#### `:visited`

选择用户已访问的链接。

```css
a:visited {
  color: purple;
}
```

### 结构伪类选择器

#### `:first-child` 和 `:last-child`

选择作为其父元素的第一个或最后一个子元素的元素。

```css
li:first-child {
  font-weight: bold;
}

li:last-child {
  font-style: italic;
}
```

#### `:nth-child()`

选择作为其父元素的第 n 个子元素的元素。

```css
奇数位置：
li:nth-child(odd) { 
  background-color: grey;
}

偶数位置：
li:nth-child(even) {
  background-color: grey;
}

li:nth-child(3) {
  text-decoration: underline;
}
```

### 目标伪类选择器

#### `:target`

选择当前活动的（被链接指向的）元素。

```css
div:target {
  background-color: yellow;
}
```

### 否定伪类选择器

#### `:not()`

选择不匹配括号内选择器的所有元素。

```css
div:not(.active) {
  opacity: 0.5;
}
```

### 输入表单伪类选择器

#### `:disabled` 和 `:enabled`

选择被禁用或启用的输入表单元素。

```css
input:disabled {
  background-color: #f2f2f2;
}

input:enabled {
  border: 1px solid green;
}
```

---

## 伪元素选择器

### `::before` 和 `::after`

用于在元素内容前或后插入内容。

```css
p::before {
  content: "前缀：";
}

p::after {
  content: "。";
}
```

### `::first-letter` 和 `::first-line`

选择元素的第一个字母或第一行。

```css
p::first-letter {
  font-size: 32px;
}

p::first-line {
  text-transform: uppercase;
}
```

### `::selection`

选择用户选定（例如，通过鼠标拖动）的元素部分。

```css
::selection {
  background-color: yellow;
}
```


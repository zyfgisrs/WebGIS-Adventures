# 定位与显示 

## 显示属性

- 什么是显示属性

  在CSS中，`display` 属性用于控制HTML元素如何在页面上呈现或布局。这个属性决定了元素是块级（block）还是行内（inline）元素，或者是其他类型，如 `inline-block`、`flex`、`grid` 等。不同的 `display` 值会影响元素的尺寸、流动性以及如何与其他元素互动。

  #### 常见的 `display` 属性值：

  - `block`: 元素会占据整个可用宽度，并且在内容前后都会有换行。常见的块级元素有 `<div>`、`<p>`、`<h1>` 等。
  - `inline`: 元素只占据内容所需的宽度，并且不会导致内容前后换行。常见的行内元素有 `<span>`、`<a>`、`<strong>` 等。
  - `inline-block`: 元素具有行内元素的外部显示特性和块级元素的内部显示特性。也就是说，它们会在同一行内显示，但你可以设置宽度和高度。
  - `none`: 元素不会在页面上显示，也不会占据空间。

- `block`
- `inline`
- `inline-block`
- `none`

## 定位属性

- `static`
- `relative`
- `absolute`
- `fixed`
- `sticky`

## 浮动

- `float`
- `clear`

## 堆叠上下文

- `z-index`
- 创建堆叠上下文的条件
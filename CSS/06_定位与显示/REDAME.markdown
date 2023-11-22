# 定位与显示 

## 显示属性

- 什么是显示属性

  在CSS中，`display` 属性用于控制HTML元素如何在页面上呈现或布局。这个属性决定了元素是块级（block）还是行内（inline）元素，或者是其他类型，如 `inline-block`、`flex`、`grid` 等。不同的 `display` 值会影响元素的尺寸、流动性以及如何与其他元素互动。

  #### 常见的 `display` 属性值：

  - `block`: 元素会占据整个可用宽度，并且在内容前后都会有换行。常见的块级元素有 `<div>`、`<p>`、`<h1>` 等。
  - `inline`: 元素只占据内容所需的宽度，并且不会导致内容前后换行。常见的行内元素有 `<span>`、`<a>`、`<strong>` 等。
  - `inline-block`: 元素具有行内元素的外部显示特性和块级元素的内部显示特性。也就是说，它们会在同一行内显示，但你可以设置宽度和高度。
  - `none`: 元素不会在页面上显示，也不会占据空间。

## 定位属性

### `static`

- **默认定位**：所有元素默认的`position`值是`static`。
- **特点**：不会被特殊定位，总是根据正常的文档流进行布局。
- **使用场景**：通常在不需要特别定位元素时使用。

### `relative`

- **相对定位**：元素相对于其正常位置进行定位。
- **特点**：可以使用`top`、`right`、`bottom`、`left`属性移动元素。移动的元素会保留其在文档流中的原始空间。
- **使用场景**：当你需要微调元素位置或为绝对定位的子元素提供定位上下文时使用。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>relative</title>

    <style>
        .container{
            width: 300px;
            height: 300px;
            background-color: aqua;
        }


        .child{
            background-color: blue;
            width: 50px;
            height: 50px;
            position: relative;
            top: 50px;
            left: 50px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="child"></div>
    </div>
</body>
</html>
```

child子元素本来会出现在左上方，但是使用了relative定位那么向下移动了50px向右移动了50px。

### `absolute`

- **绝对定位**：元素相对于最近的非`static`定位的祖先元素进行定位。
- **特点**：脱离正常的文档流，不占据空间。可以使用`top`、`right`、`bottom`、`left`控制位置。
- **使用场景**：用于创建悬浮元素，如弹出菜单、对话框等。

```html
<!DOCTYPE html>
<html>
<head>
    <title>Absolute Positioning Example</title>
    <style>
        .menu {
            position: relative;
            width: 200px;
            background-color: #f0f0f0;
            padding: 10px;
            box-sizing: border-box;
        }

        .submenu {
            position: absolute;
            top: 40px;
            left: 20px;
            width: 150px;
            background-color: lightblue;
            padding: 10px;
            box-sizing: border-box;
            display: none;
        }

        .menu:hover .submenu {
            display: block;
        }
    </style>
</head>
<body>

<div class="menu">
    Hover over me
    <div class="submenu">
        Submenu Content
    </div>
</div>

</body>
</html>
```

### `fixed`

- **固定定位**：元素相对于浏览器窗口进行定位。
- **特点**：脱离文档流，固定在页面的特定位置，即使页面滚动也不会移动。
- **使用场景**：用于创建固定在页面上的元素，如固定导航栏。

### `sticky`

- **粘性定位**：是`relative`和`fixed`的混合体。元素根据正常文档流进行定位，但当页面滚动到某个阈值时，它的行为就像`fixed`定位。
- **特点**：在特定的滚动位置变成固定定位。
- **使用场景**：适用于需要在用户滚动页面时保持可见的元素，如粘性标题。

## 浮动

1. **浮动属性**：`float`属性用于创建浮动，它可以取`left`、`right`或`none`（默认值）。
2. **脱离文档流**：当元素应用了浮动后，它会脱离正常的文档流。这意味着文档的其余部分会表现得好像浮动元素不存在一样。
3. **影响布局**：浮动元素会影响其周围的元素，尤其是文本和内联元素，它们会围绕着浮动元素。
4. **清除浮动**：浮动可以通过`clear`属性来清除。`clear`属性可以设置在元素上，指定该元素不应该被浮动元素所影响。
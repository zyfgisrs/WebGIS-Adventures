# 盒模型

在CSS中，盒模型是一种设计和布局的概念，用来确定文档中元素的布局方式。每个元素被视为一个盒子，这个盒子包含几个不同的部分：内容（content）、内边距（padding）、边框（border）和外边距（margin）。

- **内容（Content）**：这是盒子中的**实际内容区域**，比如文本、图片或其他元素。
- **内边距（Padding）**：内容区域外的空间，内边距是围**绕内容的空间**，可以理解为内容与边框之间的**缓冲区**。padding的中文译为填料。
- **边框（Border）**：紧随内边距之后的线条，围绕盒子的外边缘。边框属性需要指定边框的样式、宽度和颜色，否则不会显示。
- **外边距（Margin）**：最外层的空间，用于分隔相邻元素之间的距离。

## 计算模式

CSS盒模型的计算模式主要有两种：标准盒模型和IE盒模型。

- **标准盒模型（content-box）**：在这个模型中，元素的宽度和高度仅包括内容区域。内边距、边框和外边距都不包括在内。
- **IE盒模型（border-box）**：在这个模型中，元素的宽度和高度包括内容、内边距和边框，但不包括外边距。

可以通过CSS的 `box-sizing` 属性来控制元素使用哪种盒模型。例如：

border-box

![image-20231121100258521](assets/image-20231121100258521.png)

content-box

![image-20231121100321934](assets/image-20231121100321934.png)

## 外边距重叠

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>外边距重叠</title>
    <style>
        .d1{
            background-color: aquamarine;
            width: 200px;
            height: 200px;
            padding:20px;
            border: 5px;
            margin-bottom: 30px;
        }

        .d2{
            background-color: blue;
            width: 200px;
            height: 200px;
            padding:20px;
            border: 5px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div>
        <div class="d1">hello,world!</div>
        <div class="d2">hello,world!</div>
    </div>
</body>
</html>
```

在这个例子中，`d1` 的下外边距是 30px，而 `d2` 的上外边距是 20px。按理来说，如果外边距不重叠，两个盒子之间的空间应该是 50px（30px + 20px）。但由于外边距重叠的缘故，实际上两个盒子之间的距离将是两者中较大的一个外边距值，即 30px。

## 内联元素与盒模型

内联元素与盒模型的交互有几个关键点需要理解。内联元素（如`<span>`）与块级元素（如`<div>`）在处理盒模型属性时表现不同。

1. **宽度和高度**：对于内联元素，设置`width`和`height`属性通常没有效果。内联元素的大小主要由其内容决定。
2. **垂直边距不生效**：内联元素的垂直外边距（`margin-top` 和 `margin-bottom`）和垂直内边距（`padding-top` 和 `padding-bottom`）不会影响布局，即不会增加元素周围的空间。不过，它们会影响元素的背景颜色或图片的显示区域。
3. **水平边距和内边距生效**：内联元素的水平外边距（`margin-left` 和 `margin-right`）和内边距（`padding-left` 和 `padding-right`）是生效的，并且会影响元素的布局。
4. **边框**：内联元素的边框会显示，但不会影响到周围元素的布局。边框会围绕内容和水平方向的内边距显示。
5. **换行行为**：内联元素可以在行内显示，且其内容可以跨越多行。如果内联元素的内容很长，它会根据容器的边界自动换行。
6. **`display` 属性**：可以通过设置 `display` 属性为 `inline-block`，使内联元素获得块级元素的某些特性。这样设置后，可以应用宽度和高度，同时保持元素在行内的布局特性。

## 百分比应用

在使用百分比值设置边距和填充时，这些值通常是相对于**包含块**的宽度计算的，而不是高度或其他尺寸。这一点在布局设计时需要特别注意。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>百分比应用</title>

    <style>
        #box1{
            background-color: saddlebrown;
            width: 500px;
            height: 600px;
        }
        #box2{
            background-color: aquamarine;
            width: 300px;
            height: 200px;
            padding: 10%;
        }
    </style>
</head>
<body>
    <div id="box1">
        <div id="box2">hello, world!</div>
    </div>
</body>
</html>
```

![image-20231121105130398](assets/image-20231121105130398.png)

可以看到水平和垂直填充都是包含块的宽度的10%

## margin与padding的区别

`margin` 和 `padding` 都是CSS中的重要属性，它们虽然在某些方面功能相似，但各自有着独特的作用和用途，因此二者都是必要的。以下是`margin`和`padding`的主要区别和各自的重要性：

1. **作用区域不同**：
   - **Margin（外边距）**：影响的是元素与其他元素之间的空间。它是元素外部的空白区域，用于控制元素与其他元素之间的距离。
   - **Padding（内边距）**：影响的是元素内容与其边界之间的空间。它是元素内部的空白区域，用于控制内容与元素边界之间的距离。

2. **对布局的影响**：
   - `margin` 用于创建元素之间的“外部”空间，常用于分隔不同的布局区块或元素。
   - `padding` 用于增加元素内部的“内部”空间，常用于提高内容的可读性和美观性。

3. **背景颜色/图像**：
   - `padding` 区域包含在元素的背景颜色或背景图像中。增加`padding`会增加背景的覆盖范围。
   - `margin` 区域不包含背景颜色或背景图像。它是透明的，不会被背景颜色或图像覆盖。

4. **边框**：
   - 边框（border）位于`padding`的外侧，围绕着`padding`和内容。
   - `margin` 位于边框的外侧，与边框之间没有可视化的分隔。

5. **外边距合并（Margin Collapsing）**：
   - 垂直方向上相邻的块级元素的`margin`可能会发生合并，而`padding`则不会。

6. **用途**：
   - `margin` 通常用于实现布局分隔和空间平衡。
   - `padding` 通常用于改善内容的展示和读取体验。

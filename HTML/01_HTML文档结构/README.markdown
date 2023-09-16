# HTML文档结构

HTML（HyperText Markup Language，超文本标记语言）是用于创建Web页面的标准标记语言。一个基本的HTML文档包括一系列嵌套的标签（也称为元素），这些标签用于描述页面的结构和内容。

下面是一个基本HTML文档的结构：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document Title</title>
    <!-- 其他元数据、CSS样式、JavaScript脚本等 -->
</head>
<body>
    <!-- 页面主体内容 -->
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
    <a href="https://www.example.com">This is a link</a>

    <!-- 其他HTML元素 -->
</body>
</html>
```

以下是该结构的组成部分的简要描述：

- `<!DOCTYPE html>`: 声明文档类型和HTML版本。
- `<html>`: HTML文档的根元素。
  - `lang="en"`: 属性，用于定义文档的主要语言。
- `<head>`: 包含所有头部元信息，如元数据、链接、脚本等。
  - `<meta charset="UTF-8">`: 设置文档使用的字符编码。
  - `<title>`: 设置浏览器标签栏中显示的文档标题。
- `<body>`: 包含所有用户可见的页面内容。

在 `<head>` 和 `<body>` 之内，你可以使用各种HTML标签来添加文本、图片、链接、表格、表单等多种类型的内容。

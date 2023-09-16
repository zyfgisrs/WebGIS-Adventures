# CSS样式应用方式

## 目录

- [简介](#简介)
- [内联样式表](#内联样式表)
- [内部样式表](#内部样式表)
- [外部样式表](#外部样式表)
- [层叠和优先级](#层叠和优先级)

## 简介

在CSS（层叠样式表）中，样式可以以多种方式应用于HTML文档，这包括内联样式表、内部样式表和外部样式表。

## 内联样式表（Inline Styles）

内联样式直接应用于HTML标签内部，通常作为元素的一个属性。

```html
<p style="color: red;">这是红色文字。</p>
```

- 优点：方便快捷，无需单独的CSS文件或样式标签。
- 缺点：不易于维护，可重用性差，适用性有限（只能应用于单一元素）。

------

## 内部样式表（Internal Styles）

内部样式表位于HTML文档的`<head>`部分，通常在`<style>`标签中。

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    p {
      color: red;
    }
  </style>
</head>
<body>
  <p>这是红色文字。</p>
</body>
</html>
```

- 优点：可以在一个HTML文档中集中管理样式。
- 缺点：仍然不够灵活，只能应用于单一的HTML文档。

------

## 外部样式表（External Styles）

外部样式表保存在单独的CSS文件中，并通过HTML文档的`<link>`标签进行引用。

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <p>这是红色文字。</p>
</body>
</html>
```

在`styles.css`文件中：

```css
p {
  color: red;
}
```

- 优点：可重用性高，易于维护，可用于多个HTML文档。
- 缺点：需要额外的HTTP请求（尽管现代HTTP/2和浏览器缓存策略可以减轻这个问题）。

------

## 层叠和优先级

在使用这三种方式的组合时，CSS的“层叠”规则决定了哪种样式应优先应用。一般来说，优先级从低到高为：外部样式表 < 内部样式表 < 内联样式。当然，这还可能受到其他因素（如选择器的特异性）的影响。

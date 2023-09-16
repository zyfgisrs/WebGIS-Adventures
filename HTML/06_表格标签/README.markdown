# HTML 表格

在HTML中，表格通常用于显示结构化数据。

---

## 目录

1. [基本标签](#基本标签)
   - [`<table>`](#table)
   - [`<tr>`](#tr)
   - [`<td>`](#td)
   - [`<th>`](#th)
2. [高级应用](#高级应用)
   - [表头 (`<thead>`)](#表头-thead)
   - [表体 (`<tbody>`)](#表体-tbody)
   - [表尾 (`<tfoot>`)](#表尾-tfoot)
3. [常用属性](#常用属性)

---

## 基本标签

### `<table>`

用于创建表格。

```html
<table>
  <!-- 表格内容 -->
</table>
```

### `<tr>`

用于创建表格的行（table row）。

```html
<tr>
  <!-- 单元格内容 -->
</tr>
```

### `<td>`

用于创建表格的单元格（table data cell）。

```html
<td>这是一个单元格</td>
```

### `<th>`

用于创建表格的标题单元格，通常文字会加粗和居中（table header cell）。

```html
<th>这是一个标题单元格</th>
```

**完整示例**

```html
<table>
  <tr>
    <th>姓名</th>
    <th>年龄</th>
  </tr>
  <tr>
    <td>张三</td>
    <td>30</td>
  </tr>
  <tr>
    <td>李四</td>
    <td>25</td>
  </tr>
</table>
```

---

## 高级应用

### 表头 (`<thead>`)

用于组织表头内容，可以与 `<th>` 配合使用。

```html
<thead>
  <tr>
    <th>标题1</th>
    <th>标题2</th>
  </tr>
</thead>
```

### 表体 (`<tbody>`)

用于组织表体内容。

```html
<tbody>
  <tr>
    <td>数据1</td>
    <td>数据2</td>
  </tr>
</tbody>
```

### 表尾 (`<tfoot>`)

用于组织表尾内容。

```html
<tfoot>
  <tr>
    <td>合计</td>
    <td>100</td>
  </tr>
</tfoot>
```

---

## 常用属性

- `align`: 控制表格在页面中的水平对齐方式。
- `border`: 控制表格的边框宽度。
- `width`和 `height`: 设置表格的宽度和高度
- `cellpadding` 和 `cellspacing`: 控制单元格内部内容和单元格之间的间距。
- `bgcolor`：设置表格的背景颜色。
- `colspan` 和 `rowspan`: 合并单元格，跨越多个列或行。

**示例**

```html
<td colspan="2">横跨两列</td>
```




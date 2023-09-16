# HTML 表单标签

HTML表单是收集用户输入的一种强大工具。

---

## 目录

1. [基础标签](#基础标签)
   - [`<form>`](#form)
   - [`<input>`](#input)
   - [`<label>`](#label)
   - [`<textarea>`](#textarea)
   - [`<button>`](#button)
2. [选择元素](#选择元素)
   - [`<select>` 和 `<option>`](#select-和-option)
   - [`<optgroup>`](#optgroup)
3. [其他输入类型](#其他输入类型)
   - [`checkbox` 和 `radio`](#checkbox-和-radio)
   - [`date`, `color`, `file`](#date-color-file)
4. [常用属性](#常用属性)
5. [CSS应用](#css应用)

---

## 基础标签

### `<form>`

用于创建一个HTML表单。

```html
<form action="/submit" method="post">
  <!-- 表单元素 -->
</form>
```

### `<input>`

用于创建一个输入框。

```html
<input type="text" name="username">
```

### `<label>`

用于增加表单元素的可读性。

```html
<label for="username">用户名：</label>
<input id="username" type="text" name="username">
```

### `<textarea>`

用于创建一个多行文本输入框。

```html
<textarea name="comments" rows="4" cols="50"></textarea>
```

### `<button>`

用于创建一个按钮。

```html
<button type="submit">提交</button>
```

---

## 选择元素

### `<select>` 和 `<option>`

用于创建一个下拉选择框。

```html
<select name="gender">
  <option value="male">男</option>
  <option value="female">女</option>
</select>
```

### `<optgroup>`

用于对选项进行分组。

```html
<select name="car">
  <optgroup label="German Cars">
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </optgroup>
  <optgroup label="American Cars">
    <option value="tesla">Tesla</option>
  </optgroup>
</select>
```

---

## 其他输入类型

### `checkbox` 和 `radio`

用于创建复选框和单选框。

```html
<input type="checkbox" name="subscribe"> 订阅
<input type="radio" name="gender" value="male"> 男
```

### `date`, `color`, `file`

用于日期、颜色和文件输入。

```html
<input type="date" name="birthday">
<input type="color" name="favColor">
<input type="file" name="fileUpload">
```

---

## 常用属性

- `name`: 用于指定表单元素的名称。
- `value`: 用于指定表单元素的默认值。
- `placeholder`: 输入框内的提示文本。
- `required`: 该字段是否必填。
- `disabled`: 禁用输入字段。

---

## CSS应用

通过CSS，你可以自定义表单元素的外观。

```html
<style>
  input[type="text"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
  }
  button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
  }
</style>
```


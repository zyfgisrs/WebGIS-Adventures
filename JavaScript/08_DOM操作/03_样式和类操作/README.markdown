# 样式和类操作

## 目录

- [样式操作](#样式操作)
- [类操作](#类操作)
- [计算样式与实际样式](#计算样式与实际样式)
- [操作其他样式属性](#操作其他样式属性)

## 样式操作

### 获取样式

- **`style`属性**：只能获取内联样式

  ```javascript
  const elem = document.getElementById('elementId');
  const style = elem.style.color;
  ```

- **`getComputedStyle` 方法**：获取所有样式，包括CSS文件和内联样式。

  ```javascript
  const computedStyle = window.getComputedStyle(elem);
  const color = computedStyle.getPropertyValue('color');
  ```

**style和getComputedStyle方法返回的CSSStyleDeclaration接口实例，代表了一个元素的样式属性，即一组CSS属性值。这个接口在浏览器的Web APIs中定义，通常用于style和getComputedStyle方法两个场景。**

CSSStyleDeclaration的主要方法和属性（[操作CSS变量](#操作CSS变量)）：

- `getPropertyValue(propertyName)`: 获取指定CSS属性的值。
- `setProperty(propertyName, value, priority)`: 设置指定CSS属性的值。
  - `propertyName`：要设置的CSS属性名称（字符串），例如 `'color'`、`'background-color'` 等。
  - `value`：给定属性应设置为的值（字符串），例如 `'red'`、`'#f00'`、`'100px'` 等。
  - `priority`（可选）：一个字符串，通常是 `'important'`，用于设置该CSS属性的优先级。
- `removeProperty(propertyName)`: 删除指定的CSS属性。
- `cssText`: 获取或设置元素的所有样式规则，以字符串形式，可以实现[批量操作样式](#批量操作样式)。
- `length`: 返回 `CSSStyleDeclaration` 对象包含的CSS属性数量。

### 设置样式

- 使用style属性（内联样式）

  ```javascript
  div1.style.color = 'red';
  ```

- 使用`setAttribute()`方法（内联样式）

  ```javascript
  div2.setAttribute('style', 'width: 100px; height: 200px;');
  ```

### 删除样式

- 通过将样式属性设为空

  ```javascript
  div1.style.color = '';
  ```

- 使用removeAttribute方法

  ```javascript
  elem.removeAttribute('style');
  ```

  使用 `removeAttribute('style')` 方法时，元素上的所有内联样式都会被删除。这意味着在HTML标签内使用 `style` 属性设置的任何样式都会被移除。元素会恢复到应用了其他CSS规则（如果有）或浏览器默认样式的状态。需要注意的是，这个操作只会影响该元素的内联样式，不会影响通过外部CSS文件或`<style>`标签应用的样式。这些样式会依然应用，除非你也从那些来源中删除它们。

### 批量操作样式

- 通过CSSStyleDeclaration的cssText属性

  ```javascript
  const div1 = document.getElementById('div1');
  div1.style.cssText = 'color: red; background: blue;'
  ```

- 遍历样式对象并应用

  ```javascript
  const div1 = document.getElementById('div1');
  const styles = {
      color:'red',
      background :'blue'
  }
  for(const [key, value] of Object.entries(styles)){
      div1.style[key] = value;
  }
  ```

### 样式操作的限制与陷阱

1. **样式优先级**: 通过JavaScript设置的样式会作为内联样式应用，其优先级通常较高。
2. **性能问题**: 频繁的样式操作可能导致页面重绘和重排，影响性能。
3. **浏览器兼容性**: 不同的浏览器可能对某些CSS属性有不同的实现。

### 操作CSS变量

- `getPropertyValue(propertyName)`: 获取指定CSS属性的值。

  ```javascript
  const div1 = document.getElementById('div1');
  const cssStyle = div1.style;
  const color = cssStyle.getPropertyValue('color');
  ```

- `setProperty(propertyName, value, priority)`: 设置指定CSS属性的值。

  - `propertyName`：要设置的CSS属性名称（字符串），例如 `'color'`、`'background-color'` 等。
  - `value`：给定属性应设置为的值（字符串），例如 `'red'`、`'#f00'`、`'100px'` 等。
  - `priority`（可选）：一个字符串，通常是 `'important'`，用于设置该CSS属性的优先级。

  ```javascript
  cssStyle.setProperty('background', 'red', 'important');
  ```

- `removeProperty(propertyName)`: 删除指定的CSS属性。

- `length`: 返回 `CSSStyleDeclaration` 对象包含的CSS属性数量。

## 类操作

### 添加类

### 删除类

### 检查类是否存在

### 切换类

### 获取所有类

### 替换类

### 遍历类

## 计算样式与实际样式

### getComputedStyle()

## 操作其他样式属性

### `element.offsetWidth`, `element.offsetHeight`

### `element.clientTop`, `element.clientLeft`

### `element.scrollTop`, `element.scrollLeft`
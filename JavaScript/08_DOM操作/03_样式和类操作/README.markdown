# 样式和类操作

## 目录

- [样式操作](#样式操作)
- [类操作](#类操作)
- [计算样式与实际样式](#计算样式与实际样式)
- [尺寸与滚动](#尺寸与滚动)

## 样式操作

### 获取样式

- **`style`属性**：只能获取内联样式

  ```javascript
  const elem = document.getElementById('elementId');
  const style = elem.style.color;
  ```

- **`getComputedStyle` 方法**：获取所有样式，包括CSS文件和内联样式（只读）。

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

- 通过将样式属性设为空（内联样式）

  ```javascript
  div1.style.color = '';
  ```

- 使用removeAttribute方法（内联样式）

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

在 Web 开发中，DOM（文档对象模型）提供了多种方法和属性，用于操作 HTML 元素的类。

### 添加类

- `classList.add()`：添加一个或多个类到元素

  ```javascript
  element.classList.add("new-class");
  ```

### 删除类

- `classList.remove()`：删除一个或多个类

  ```javascript
  element.classList.remove("old-class");
  ```

### 检查类是否存在

- `classList.contains()` ：检查元素是否包含指定的类

  ```javascript
  if (element.classList.contains("some-class")) {
    // Do something
  }
  ```

### 切换类

- `classList.toggle()`：可以切换元素的类。如果类存在，它会被删除；如果不存在，它会被添加。

  ```javascript
  element.classList.toggle("toggle-class");
  ```

### 替换类

- `classList.replace()`：替换元素的一个类为另一个类

  ```javascript
  element.classList.replace("old-class", "new-class");
  ```

### 遍历类

- `classList` 是一个可遍历的对象，因此你可以使用循环来遍历所有的类。

  ```javascript
  for (const className of element.classList) {
    console.log(className);
  }
  ```

## 计算样式与实际样式

- 计算样式`Computed Style`是一个元素最终应用的样式，它是从多个样式源（如内联样式、内部样式表、外部样式表等）合并而来的。这些样式可能会受到 CSS 选择器、继承、层叠（Cascading）等因素的影响。
- 实际样式`Inline Style`通常是直接在 HTML 元素上通过 `style` 属性设置的样式。这些样式只影响该特定元素，并具有最高的优先级（除了 `!important` 标记）。

### getComputedStyle()

- `getComputedStyle()` 方法可以获取一个元素的所有计算样式。

```javascript
const element = document.getElementById("myElement");
const computedStyles = window.getComputedStyle(element);
console.log(computedStyles.getPropertyValue("color"));// 输出 "rgb(0, 0, 0)" 或其他颜色值
```

## 尺寸与滚动

### `offsetWidth`, `offsetHeight`

用于获取一个元素的可视宽度和高度的只读属性。这些属性包括元素的内容、内边距和边框，但不包括外边距。

```javascript
const element = document.getElementById("myElement");
const width = element.offsetWidth;
console.log("Width:", width);
```

1. **只读属性**：这些属性是只读的，你不能修改它们。
2. **整数值**：这些属性总是返回整数值，因为它们是以像素为单位的。如果实际值是一个小数，它会被四舍五入。
3. **隐藏元素**：如果元素或其任何父元素设置了 `display: none`，那么 `offsetWidth` 和 `offsetHeight` 会返回 `0`。
4. **滚动条**：这些属性不包括滚动条的宽度/高度。
5. **CSS 盒模型**：这些属性遵循标准的 CSS 盒模型，包括内容、内边距和边框。
6. **重新布局**：频繁地访问这些属性可能导致浏览器重新计算布局，这可能会影响性能

### `element.clientTop`, `element.clientLeft`

用于获取元素边框（border）的宽度（以像素为单位）的只读属性。这些属性通常用于布局计算和元素定位。

```javascript
const element = document.getElementById("myElement");
const topBorderWidth = element.clientTop;
console.log("Top Border Width:", topBorderWidth);
```

1. **只读属性**：这些属性是只读的，你不能修改它们。
2. **整数值**：这些属性总是返回整数值，因为它们是以像素为单位的。如果实际值是一个小数，它会被四舍五入。
3. **隐藏元素**：如果元素或其任何父元素设置了 `display: none`，那么 `clientTop` 和 `clientLeft` 会返回 `0`。
4. **文档流**：这些属性只考虑元素自身的边框宽度，不考虑其他布局因素，如外边距或内边距。
5. **重新布局**：频繁地访问这些属性可能导致浏览器重新计算布局，这可能会影响性能。

### `element.scrollTop`, `element.scrollLeft`

用于获取或设置元素的滚动位置的属性。这些属性通常用于滚动操作、动画效果或者定位某个特定的内容。

- scrollTop这个属性获取或设置元素内容顶部隐藏在视口上方的像素数。如果元素没有滚动，或者元素不可滚动，这个值为 `0`。

  ```javascript
  // 获取 scrollTop 值
  const scrollTopValue = element.scrollTop;
  
  // 设置 scrollTop 值
  element.scrollTop = 50;
  ```

- scrollLeft这个属性获取或设置元素内容左侧隐藏在视口左侧的像素数。如果元素没有滚动，或者元素不可滚动，这个值为 `0`

  ```javascript
  // 获取 scrollLeft 值
  const scrollLeftValue = element.scrollLeft;
  
  // 设置 scrollLeft 值
  element.scrollLeft = 50;
  ```

  


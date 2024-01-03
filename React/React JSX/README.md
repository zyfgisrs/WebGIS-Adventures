# React JSX

React JSX (JavaScript XML) 的本质是一个语法糖，它允许你在 JavaScript 代码中书写类似于 HTML 的结构。其目的是为了提高开发者编写用户界面的效率和可读性。然而，这些看起来像HTML的代码并不是真正的HTML，而是 JavaScript 对象。

当使用 JSX 编写组件结构时，这些 JSX 代码会通过一个叫做“Babel”的转译器转换成普通的 JavaScript 对象。这个过程称为 "编译"。编译后，JSX 中的元素会变成 `React.createElement()` 函数调用。

## 常见使用方法

### 使用引号传递字符串

### 使用js变量

### 函数调用和方法调用

### 使用javascript对象

```javascript
const count = 100;

function getName() {
  return "zhouyf";
}

function App() {
  return (
    <div className="App">
      this is app
      {"this is message"}
      {count}
      {getName()}
      {new Date().getDate()}
      <div style={{ color: "red" }}>this is a div</div>
    </div>
  );
}
```

`if`语句、`switch`语句、变量声明属于语句，不是表达式，不能出现在{}中

### 实现列表渲染

```javascript
const list = [
  { id: 1001, name: "Vue" },
  { id: 1002, name: "React" },
  { id: 1003, name: "Angular" },
];
function App() {
  return (
    <div className="App">
      this is app
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

### 实现条件渲染

```javascript
const isLogin = true;

function App() {
  return (
    <div className="App">
      {isLogin && <span>this is span</span>}
      <br />
      {isLogin ? <span>this is tom</span> : <span>this is jack</span>}
    </div>
  );
}
```

### 复杂条件的渲染

```javascript
const articleType = 1;

function getArticleTem() {
  if (articleType == 0) {
    return <div>我是无图模式</div>;
  } else if (articleType == 1) {
    return <div>我是单图模式</div>;
  } else {
    return <div>我是三图模式</div>;
  }
}

function App() {
  return <div className="App">{getArticleTem()}</div>;
}
```


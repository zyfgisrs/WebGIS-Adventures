# React中的事件绑定



```javascript
function App() {
  const handleClick = (e) => {
    console.log("按钮被点击了", e);//事件参数e
  };
  return (
    <div className="App">
      <button onClick={handleClick}>click me</button>
    </div>
  );
}

function App() {
  const handleClick = (name) => {
    console.log("按钮被点击了", name); //事件参数e
  };
  return (
    <div className="App">
      <button onClick={() => handleClick("jack")}>click me</button>
      {/* 必须是箭头函数 */}
    </div>
  );
}

function App() {
  const handleClick = (name, e) => {
    console.log("按钮被点击了", name, e); //事件参数e
  };
  return (
    <div className="App">
      <button onClick={(e) => handleClick("jack", e)}>click me</button>
      {/* 必须是箭头函数 */}
    </div>
  );
}
```

总结：

- 当只需要事件对象时，直接将处理函数赋给事件属性。
- 当需要传递自定义参数时，使用箭头函数在 JSX 中调用处理器并传递参数。
- 当既需要事件对象也需要其他参数时，使用箭头函数并显式地传递事件对象和其他参数。

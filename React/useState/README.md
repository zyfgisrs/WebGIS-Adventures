# useState

`useState` 是 React 中的一个钩子（Hook），它允许你在函数组件中添加并维护自己的状态。

1. **添加局部状态**:
   - `useState` 允许你在函数组件中定义一个局部状态变量。这个状态可以是任何数据类型，如数字、字符串、数组、对象等。
2. **初始化状态**:
   - 在首次渲染时，你可以通过 `useState` 的参数设置状态的初始值。例如，`useState(0)` 初始化状态为数字 `0`。
3. **读取状态**:
   - `useState` 返回一个数组，第一个元素是当前状态的值。你可以通过解构这个数组来读取状态。
4. **更新状态**:
   - `useState` 的返回值中的第二个元素是一个更新函数，你可以调用这个函数来更新状态，从而引发组件的重新渲染。
   - 当状态更新时，React 将重新执行组件函数，使用新的状态值**重新渲染组件**。
5. **保持状态独立**:
   - 每次使用 `useState`，你都会在组件中创建一个独立的状态变量。即使多个状态变量有相同的初始值，它们也是完全独立的。
6. **函数式更新**:
   - 如果新的状态依赖于前一个状态，你可以给更新函数传递一个函数，这个函数将接收旧的状态作为参数，并返回新的状态。

# 范例

```javascript
function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const [form, setForm] = useState({ name: "jack" });

  const changeForm = () => {
    setForm({
      ...form,
      name: "john",
    });
  };

  return (
    <div>
      <button onClick={handleClick}>{count}</button>
      <button onClick={changeForm}>修改form的参数{form.name}</button>
    </div>
  );
}
```

- `...form` 表示将现有的 `form` 对象中的所有属性“展开”或“复制”到新对象中。假设 `form` 最初是 `{ name: "jack" }`，使用 `...form` 之后，新对象就包含了 `{ name: "jack" }`。

- 在 `{...form, name: "john"}` 中，`name: "john"` 表示在展开 `form` 之后，再设置 `name` 属性为 "john"。如果原始的 `form` 对象中已经有一个 `name` 属性，它将被 "john" 覆盖。如果没有，就相当于新增了一个 `name` 属性。
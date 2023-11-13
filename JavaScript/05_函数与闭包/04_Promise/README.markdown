# Promise对象

## 回调地狱问题

在JavaScript中，当我们需要执行一系列的异步操作时，经常会陷入回调函数嵌套的困境，这就是常说的“回调地狱”（Callback Hell）或“金字塔厄运”（Pyramid of Doom）。这会导致代码难以阅读、难以维护，且错误处理变得复杂。

## 什么是Promise对象

为了解决回调地狱问题，ES6引入了`Promise`。`Promise`是一个表示异步操作最终完成或失败的对象。它允许你写出更加清晰、结构化的异步代码。

Promise 的本质是一个代表了异步操作最终完成或失败的**对象**。在 JavaScript 中，Promise 是处理异步操作的一种机制，它提供了一种管理异步操作结果和其可能的状态（成功或失败）的方法。Promise 的核心特性和用途可以总结如下：

- **异步操作的代理**：Promise 代表了一个可能还没有完成但预计将来会完成的异步操作的结果，每个 Promise 对象都封装了一个异步操作的状态（pending, fulfilled, 或 rejected）和该状态的值。
- **状态不可逆**：一旦 Promise 的状态被设置为 fulfilled 或 rejected，它就不会再改变；这意味着 Promise 提供了一种确定和一次性的操作结果。
- **链式操作**：Promise 支持链式调用（`.then()`, `.catch()`, `.finally()`），允许对异步操作的结果进行处理，且每次处理后都可以返回一个新的 Promise，从而形成处理链。
- **错误处理**：Promise 允许在链的末端集中处理错误，这简化了错误处理的逻辑，特别是在多步异步操作中。
- **促进代码清晰和可维护性**：通过提供 thenable 结构，Promise 帮助避免了所谓的“回调地狱”，使代码更易于阅读和维护。
- **与 Async/Await 的配合**：在更现代的 JavaScript 实践中，Promise 与 async/await 结合使用，为异步操作提供了更加清晰和同步代码风格的写法。

**一个`Promise`有以下几种状态**：

- **Pending（待定）**：初始状态，既不是成功，也不是失败状态。
- **Fulfilled（已兑现）**：意味着操作成功完成。
- **Rejected（已拒绝）**：意味着操作失败。

## 解决Promise过程

### 解决值

在 Promise 的上下文中，"解决值"（Resolution Value）是指当 Promise 成功完成时传递给处理函数的值。这个值是异步操作的最终结果，可以是任何 JavaScript 值（包括 undefined、一个对象、一个数字、一个字符串等）。在 Promise 被“解决”（resolved）时，这个值会被传递给 `.then()` 方法中注册的回调函数。

### 解决Promise的过程

1. **创建 Promise**: 当你创建一个新的 Promise 时，你需要提供一个执行器（executor）函数。这个函数接受两个参数：`resolve` 和 `reject`。
2. **使用 `resolve`**: 当异步操作成功完成，你调用 `resolve` 函数，并将操作的结果作为参数传递给它。这个结果就是 Promise 的解决值。
3. **Promise 状态变更**: 当 `resolve` 被调用时，Promise 的状态从 "pending"（等待）变为 "fulfilled"（已完成）。
4. **处理解决值**: 一旦 Promise 被解决，`.then()` 方法中注册的回调函数会被调用，并接收到解决值作为其参数。

## 使用Promise改进异步流程

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Here is your data!");//解决值
    }, 1000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
    return "Processing data";
  })
  .then((processData) => {
    console.log(processData);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
```

1. `fetchData`函数定义了一个返回新`Promise`对象的过程，创建`Promise`对象时需要提供一个特殊的函数。这个函数是`Promise`构造函数的参数，并且会在`Promise`对象创建时立即执行，这个构造函数的参数也被称为执行器函数（Executor Function）。
2. 执行器函数中有一个`setTimeout`函数，它模拟了一个耗时1秒的异步操作（比如一个网络请求）。
3. `setTimeout`完成后，`resolve`函数被调用，它改变`Promise`的状态为Fulfilled，并将`resolve`函数的参数字符串`'Here is your data!'`作为解决值传递给后续的`Promise`的`.then()`方法（如果后面进行调用）。
4. `fetchData`函数被调用，创建了`Promise`对象，执行器函数立即执行，一秒后，`resolve('Here is your data!')`方法执行，方法中的参数传入到`Promise`对象的`.then()`方法中的函数，接着执行第一个`.then()`方法中的逻辑。
5. 第一个`.then()`方法中接受了一个箭头函数作为回调函数，`resolve('Here is your data!')`方法中的参数为箭头函数的参数`data`，当`resolve('Here is your data!')`成功执行，`.then()`中的回调函数(箭头函数)将会执行，因此在第一个`.then()`中打印了`'Here is your data!'`，并返回`'Processing data'`
6.  由于 `.then()` 方法会返回一个新的 `Promise`，第一个 `.then()` 返回的 `"Processing data"` 字符串被封装为这个新 `Promise` 的解决值。因此，第二个 `.then()` 紧随其后执行，并且它的回调函数 `(processData) => { console.log(processData); }` 接收到 `"Processing data"` 作为参数。
7. 在第一个 `.then()` 的回调函数执行完毕后，事件循环会继续处理下一个队列中的任务，即第二个 `.then()` 的回调函数。它接收到了 `"Processing data"` 解决值，并将其打印出来。
8. 如果在`Promise`执行期间或`.then()`链中发生错误，`.catch()`方法会被调用，它捕获任何未处理的错误。

## 使用Promise模拟用户登录

```javascript
function logService(username, password) {
  console.log("进行登陆验证");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username == "zyf" && password == "123") {
        resolve("登录成功");
      } else {
        reject("登录失败");
      }
    }, 2000);
  });
}

logService("zyf", "123")
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });
```

- 当执行`logService("zyf", "123")`方法时，方法时返回一个Promise对象，Promise对象在初始化时执行构造方法，构造方法中接收一个执行器函数。
- `Promise`的构造函数接收一个执行器函数，该函数带有两个参数：`resolve`和`reject`。这两个参数本身都是函数，`resolve`用于将`Promise`的状态置为“fulfilled”（已成功解决），而`reject`用于将状态置为“rejected”（已失败）。
- 在执行器函数内，有一个`setTimeout`调用，用于模拟一个可能耗时的异步操作，如发送网络请求。在这个例子中，它模拟的是登录验证过程的延迟。
- 在`setTimeout`的回调函数内部，进行用户名和密码的检查。如果条件`username == "zyf" && password == "123"`为真，调用`resolve`函数，传入字符串`"登录成功"`；如果条件不满足，则调用`reject`函数，传入字符串`"登录失败"`。
- `resolve("登录成功")`或`reject("登录失败")`的调用将决定`Promise`对象的状态转变，并携带相应的值。
- 如果验证成功，执行`resolve`方法，`Promise`对象状态变为“fulfilled”，则`.then`方法中注册的回调函数会被调用，并接收到`resolve`函数调用时传递的值作为参数。
- 如果验证失败，执行`reject`方法，状态变为“rejected”，则`.catch`方法中注册的回调函数会被调用，并接收到`reject`函数调用时传递的值作为参数。
- `.then`方法中的箭头函数接收`resolve`传来的值，并打印出来。
- `.catch`方法中的箭头函数接收`reject`传来的值，并打印出来。

then方法中的箭头函数为回调函数，在`Promise`对象状态变为“fulfilled”调用。

```javascript
(message) => {
	console.log(message);
}
```

## 使用Promise模拟在线书店的购买流程

```javascript
//查询库存
function queryInventory(bookId) {
  console.log(`正在查询id为${bookId}这本书的库存...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isHas = true;
      if (isHas) {
        console.log(`id为${bookId}这本书有库存`);
        resolve(bookId);
      } else {
        reject("没有库存了");
      }
    }, 1000);
  });
}

//模拟下单
function placeOrder(bookId) {
  console.log(`id为${bookId}这本书正进行下订单操作...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isOrder = true;
      if (isOrder) {
        console.log(`id为${bookId}这本书已下单`);
        resolve(bookId);
      } else {
        reject("没有被下单");
      }
    }, 1000);
  });
}

//模拟发货
function deliverBook(bookId) {
  console.log(`id为${bookId}这本书正在发货...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isDeliver = true;
      if (isDeliver) {
        console.log(`id为${bookId}这本书已发货`);
        resolve(bookId);
      } else {
        reject("没有发货");
      }
    }, 1000);
  });
}

queryInventory("111")
  .then(placeOrder)
  .then(deliverBook)
  .then((id) => {
    console.log(`id为${id}的书成功出售`);
  })
  .catch((message) => {
    console.log(message);
  });
```

输出：

```
正在查询id为111这本书的库存...
id为111这本书有库存
id为111这本书正进行下订单操作...
id为111这本书已下单
id为111这本书正在发货...
id为111这本书已发货
id为111的书成功出售
```

## Promise相关API

- **`Promise.all`**: 当你需要所有异步操作都成功完成时。
- **`Promise.allSettled`**: 当你需要知道所有异步操作的最终结果（成功或失败）时。
- **`Promise.race`**: 当你只关心第一个完成（无论成功还是失败）的异步操作时。
- **`Promise.any`**: 当你需要至少一个异步操作成功时。
- **`Promise.resolve` 和 `Promise.reject`**: 当你需要创建一个已解决或已拒绝的 Promise 以进行链式调用或测试时。

### Promise.all

```javascript
var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1, promise2]) // 等待两个 Promise 都解决
        .then(values => {
            return values[0] + values[1]; // 将两个解决值相加
        });
};
```

### Promise.allSettled

```javascript
let promise1 = Promise.resolve(42);//立即解决，解决值为42
let promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, "失败"));
let promise3 = Promise.resolve('完成');//立即解决，解决值为'完成'

Promise.allSettled([promise1, promise2, promise3])
    .then((result) => {
        result.forEach((result, index) => {
            console.log(`Promise ${index + 1}:`, result);
        });
    });
```

```javascript
let promise4 = new Promise((resolve, reject) => setTimeout(
    () => {
        reject('失败')
    }, 100)
);
```

- **创建 Promises**: 这个例子中创建了三个 Promise。`promise1` 立即解决，`promise2` 在 100 毫秒后拒绝，`promise3` 立即解决。
- **使用 `Promise.allSettled`**: 我们将这三个 Promises 传递给 `Promise.allSettled`。这个方法将等待所有的 Promises 完成。
- **处理结果**: `Promise.allSettled` 返回的 Promise 解决后，我们打印出每个 Promise 的结果。每个结果是一个对象，包含两个属性：`status`（`"fulfilled"` 或 `"rejected"`）和 `value`（如果 Promise 被解决）或 `reason`（如果 Promise 被拒绝）。

![image-20231112151317137](assets/image-20231112151317137.png)

### Promise.race

`Promise.race` 是一个用于处理多个 Promises 的函数，它接收一个 Promise 数组作为输入，并返回一个新的 Promise。这个新 Promise 将会以第一个解决（fulfilled）或拒绝（rejected）的输入 Promise 的结果来解决或拒绝。这是一个非常有用的方法，特别是在处理多个异步操作时，你只关心哪一个会最先完成（不论成功还是失败）。

```javascript
let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, '第一个promise');
})


let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, '第二个promise');
})

let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, '第三个promise');
})

Promise.race([promise1, promise2, promise3])
        .then(value => {
            console.log("胜出的promise：", value);
        })
```

输出：

```
胜出的promise： 第二个promise
```

### Promise.any

`Promise.any` 是一个接收多个 Promises 的函数，返回一个新的 Promise。这个新的 Promise 将会以第一个成功解决（fulfilled）的输入 Promise 的结果来解决。如果所有给定的 Promises 都被拒绝（rejected），则返回的 Promise 会被拒绝，并附带一个 `AggregateError` 类型的错误。

```javascript
let promise1 = new Promise((resolve, reject) => setTimeout(resolve, 200, "成功"));
let promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, "失败"));
let promise3 = new Promise((resolve, reject) => setTimeout(reject, 100, "失败"));


Promise.any([promise1, promise2, promise3])
  .then((result) => {
      console.log(result);
  }).catch((error) => {
      console.log(error);
})
```

输出：

```
成功
```

当全部失败：

```javascript
let promise1 = new Promise((resolve, reject) => setTimeout(reject, 200, "成功"));
let promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, "失败"));
let promise3 = new Promise((resolve, reject) => setTimeout(reject, 100, "失败"));


Promise.any([promise1, promise2, promise3])
  .then((result) => {
      console.log(result);
  }).catch((error) => {
      console.log(error);
})
```

输出：

```
[AggregateError: All promises were rejected] {
  [errors]: [ '成功', '失败', '失败' ]
}
```

# async/await关键字

> `async` 关键字是用于声明异步函数的一个特性，它是异步编程在 JavaScript 中的一个重要概念。

## 作用

- 自动将函数返回值转为Promise：当一个函数被标记为 `async`，它会自动返回一个 Promise。如果该函数的返回值不是一个 Promise，它会被自动包装在一个 Promise 中。
- 允许在函数内使用await关键字：`await` 关键字只能在 `async` 函数内部使用。它用于等待一个 Promise 的解决，并暂停函数的执行，直到 Promise 被解决或拒绝。使用 `await` 可以以一种更接近同步代码的方式编写异步代码，使得异步代码的结构更清晰，易于理解和维护。
- 在 `async` 函数中，可以使用传统的 `try...catch` 语句处理异步操作中的错误，这在传统的基于回调的异步编程中是不可能的。
- `async/await` 语法让异步代码看起来更像是同步代码，这对于理解和维护代码非常有帮助，特别是在涉及多个异步操作时。

```javascript
async function fetchData() {
    try {
        let response = await fetch('https://example.com/data');
        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
```

在这个示例中，`fetchData` 函数被标记为 `async`，这使得函数内部可以使用 `await` 来等待异步操作（如 `fetch` 请求）完成。同时，任何在函数内抛出的异常都可以用 `try...catch` 结构来捕获和处理。

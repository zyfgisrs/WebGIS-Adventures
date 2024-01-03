# 构建项目

```
npx create-react-app react-basic
```

项目入口index.js

```
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

引入核心包：

```
import React from "react";
import ReactDOM from "react-dom/client";
```

把App根组件渲染到id为root的dom节点上

```
const root = ReactDOM.createRoot(document.getElementById("root"));
```


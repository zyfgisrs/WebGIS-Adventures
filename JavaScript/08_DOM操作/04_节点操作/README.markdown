###  节点类型与属性

- `nodeType`
- `nodeName`
- `nodeValue`

### 文档节点（Document Node）

- `document.documentElement`
- `document.body`
- `document.head`

### 节点关系

- 父节点：`parentNode`
- 子节点：`childNodes`, `firstChild`, `lastChild`
- 兄弟节点：`nextSibling`, `previousSibling`

### 节点操作

- 创建节点：`createElement`, `createTextNode`
- 添加节点：`appendChild`, `insertBefore`
- 删除节点：`removeChild`
- 替换节点：`replaceChild`
- 克隆节点：`cloneNode`

### 文本节点（Text Nodes）

- 创建：`createTextNode`
- 操作：`data`, `length`, `appendData`, `insertData`, `deleteData`, `replaceData`

### 属性节点（Attribute Nodes）

- 获取：`getAttributeNode`
- 设置：`setAttributeNode`
- 删除：`removeAttributeNode`

###  DOM 遍历

- `NodeIterator`
- `TreeWalker`

### DOM 范围（DOM Range）

- 创建范围：`document.createRange`
- 设置范围：`setStart`, `setEnd`
- 操作范围：`cloneContents`, `deleteContents`, `extractContents`, `insertNode`
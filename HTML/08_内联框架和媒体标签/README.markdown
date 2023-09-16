# HTML 内联框架和媒体标签

内联框架和媒体标签在HTML中扮演着非常重要的角色，用于嵌入其他资源和多媒体内容。

---

## 目录

1. [内联框架 (`<iframe>`)](#iframe-内联框架)
    - [基础用法](#基础用法)
    - [常用属性](#常用属性)
    - [安全性](#安全性)
  
2. [媒体标签](#媒体标签)
    - [`<img>`](#img)
    - [`<audio>`](#audio)
    - [`<video>`](#video)
    - [媒体属性](#媒体属性)

---

## `<iframe>` (内联框架)

### 基础用法

`<iframe>` 标签用于在当前文档中嵌入另一个文档。

```html
<iframe src="https://www.example.com" width="300" height="200"></iframe>
```

### 常用属性

- `src`: 嵌入页面的地址
- `width` 和 `height`: 定义框架的尺寸
- `sandbox`: 为嵌入的内容提供额外的安全措施

### 安全性

注意：由于跨站脚本（XSS）等安全风险，应谨慎使用 `<iframe>`，并始终遵守最佳安全实践。

---

## 媒体标签

### `<img>`

用于嵌入图像。

```html
<img src="image.jpg" alt="描述文本" width="300" height="200">
```

### `<audio>`

用于嵌入音频文件。

```html
<audio controls>
  <source src="audio.mp3" type="audio/mp3">
  你的浏览器不支持音频标签。
</audio>
```

### `<video>`

用于嵌入视频文件。

```html
<video controls width="300" height="200">
  <source src="video.mp4" type="video/mp4">
  你的浏览器不支持视频标签。
</video>
```

### 媒体属性

- `controls`: 添加播放、暂停和音量控制
- `autoplay`: 自动播放
- `loop`: 循环播放
- `muted`: 静音


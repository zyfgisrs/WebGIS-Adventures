# HTML 语义标签

HTML5引入了一系列新的"语义"标签，这些标签赋予了内容明确的意义，使得开发者和搜索引擎更容易理解页面结构。

---

## 目录

1. [页面结构](#页面结构)
    - [`<header>`](#header)
    - [`<nav>`](#nav)
    - [`<main>`](#main)
    - [`<article>`](#article)
    - [`<section>`](#section)
    - [`<aside>`](#aside)
    - [`<footer>`](#footer)
  
2. [文本内容](#文本内容)
    - [`<figure>` 和 `<figcaption>`](#figure-和-figcaption)
    - [`<mark>`](#mark)
    - [`<time>`](#time)
    - [`<address>`](#address)

---

## 页面结构

### `<header>`

用于定义文档或区块的头部。

```html
<header>
  <h1>网站标题</h1>
  <p>简介文本</p>
</header>
```

### `<nav>`

用于包含导航链接。

```html
<nav>
  <a href="#home">首页</a>
  <a href="#about">关于我们</a>
  <a href="#contact">联系方式</a>
</nav>
```

### `<main>`

用于包含页面的主要内容。

```html
<main>
  <article>
    <!-- 文章内容 -->
  </article>
</main>
```

### `<article>`

用于定义页面上独立的、可复用的内容区块。

```html
<article>
  <h2>文章标题</h2>
  <p>文章内容...</p>
</article>
```

### `<section>`

用于定义文档中独立的一节。

```html
<section>
  <h2>节标题</h2>
  <p>这一节的内容...</p>
</section>
```

### `<aside>`

用于包含页面的附加信息。

```html
<aside>
  <p>这是一些附加信息。</p>
</aside>
```

### `<footer>`

用于定义文档或区块的底部。

```html
<footer>
  <p>版权所有，2023年。</p>
</footer>
```

---

## 文本内容

### `<figure>` 和 `<figcaption>`

用于标记图像、图表、照片等，以及它们的标题。

```html
<figure>
  <img src="image.jpg" alt="描述">
  <figcaption>这是图片描述。</figcaption>
</figure>
```

### `<mark>`

用于高亮显示文本。

```html
<p>这是一个<mark>重要</mark>的概念。</p>
```

### `<time>`

用于定义日期或时间。

```html
<time datetime="2023-09-15">2023年9月15日</time>
```

### `<address>`

用于定义联系信息。

```html
<address>
  <p>电子邮件：<a href="mailto:webmaster@example.com">webmaster@example.com</a></p>
</address>
```


# JavaScript编程

# 1. ECMAScripts

## 1.1 变量声明

### 1.1.1 var

var声明将变量声明的都拉到作用域顶部。下面代码合法且输出hi

```javascript
function test() {
    console.log(message)
    var message = "hi";
}
test();
```

可以反复声明同一个变（允许声明冗余），下面代码合法。

```javascript
function test() {
    var age = 12;
    var age = 13;
    var age = 14;
    console.log(age)
}
test();
```

### 1.1.2 let声明

- let声明与var声明主要的区别是，let声明范围是块作用域，而var声明的范围是函数作用域。
- 不允许声明冗余：`SyntaxError: Identifier 'xxx' has already been declared`
- let声明不会将变量声明的都拉到作用域顶部，即作用域不会提升。
- let声明的变量的不是window对象的属性。

### 1.1.3 const声明

- const的行为与let基本相同。
- const声明变量必须同时进行初始化。
- 尝试修改const声明的变量会导致运行错误。
- 若const修饰的变量是对象的引用，修改对象中的属性，并不会报错。

1.4 声明风格及最佳实践

- 不使用var
- const优先，let次之。在提前知道变量会被修改时，再使用let。

## 1.2 数组

### 1.2.1 数组声明

```javascript
const arr1 = new Array(); //创建一个空数组
const arr2 = new Array(5); //创建一个长度为5的数组
const arr3 = new Array(5, 6, 7); //创建一个数组，元素为567
const arr4 = Array.of(5, 6, 7) //创建一个数组，元素为567
const arr5 = [1, 2, 3] //创建一个数组，元素为123

console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(arr4)
console.log(arr5)
```

<img src="C:\Users\zhouyangfan\AppData\Roaming\Typora\typora-user-images\image-20230409130909684.png" alt="image-20230409130909684" style="zoom:50%;" />

### 1.2.2 伪数组转数组

```javascript
const userName = 'zyf';
const nameArr = Array.from(userName);
console.log(nameArr)
```

![image-20230409131225355](C:\Users\zhouyangfan\AppData\Roaming\Typora\typora-user-images\image-20230409131225355.png)

### 1.2.3 Array.of

```javascript
const arr = Array.of("tom", "jack", 1)
console.log(arr instanceof Array)
console.log(arr)
```

![image-20230409131510902](C:\Users\zhouyangfan\AppData\Roaming\Typora\typora-user-images\image-20230409131510902.png)

### 1.2.4 数组的常用方法



# 2. Web API

- 作用：使用JS去操作html和浏览器
- 分类：DOM（页面文档对象模型）、BOM（浏览器对象模型）

## 2.1 DOM初识

**DOM：**

- 用来呈现以及与任意HTML或XML文档交互的API
- 是浏览器提供的一套专门用来操作网页内容的功能
  - 开发网页内容特效和实现用户交互

**DOM树：**

- 将html文档异树状结构直观的表现出来。
- 描述网页内容关系的名词。
- 文档树直观的体现了标签与标签之间的关系。

**DOM对象：**

- 浏览器根据html标签生成的JS对象
  - 所有标签属性都可以在这个对象上面找到。
  - 修改这个对象的属性会自动映射到标签身上。

**DOM的核心思想：**

- 把网页当作对象来处理

**document对象：**

- 是DOM里提供的一个对象
- 所以它提供的属性和方法都是用来访问和操作网页内容的
- 网页内容都在document里面

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        <div>123</div>
        <script>
            const div = document.querySelector('div')
            //打印对象
            console.dir(div);
            console.log(typeof div)
        </script>
    </body>

</html>
```

输出：可以看到获取了div这个DOM对象

```
div
object
```

## 2.2 获取DOM对象

### 2.2.1 根据CSS选择器的方式获取DOM元素

- `document.querySelector('xxxx')`
- 方法中包含有效的CSS选择器字符串
- 返回：CSS选择器匹配的第一个元素，一个HTMLEment对象

使用标签名称，获取的是第一个匹配的对象：

```html
 <body>
    <div class="box1">123</div>
    <div class="box2">abc</div>
    <script>
        const box = document.querySelector('div')
        console.dir(box);
    </script>
</body>
```

```
输出：div.box1
```

使用类选择器进行获取文档元素：

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        <div class="box1">123</div>
        <div class="box2">abc</div>
        <script>
            const box = document.querySelector('.box2')
            console.dir(box);
            console.log(typeof box)
        </script>
    </body>

</html>
```

```
div.box2
```

使用id选择器

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        <p id="nav">导航栏</p>
        <script>
            const nav = document.querySelector('#nav')
            console.dir(nav);
        </script>
    </body>

</html>
```

```
p#nav
```

伪类选择器：获取列表的第一个元素

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        <ul>
            <li>tom</li>
            <li>jack</li>
            <li>lucy</li>
        </ul>
        <script>
            const li = document.querySelector('ul li:first-child')
            console.dir(li);
        </script>
    </body>

</html>
```

- 选择多个元素`document.querySelectorAll(‘xxx’)`。
- 选择器匹配的NodeList对象数组。
- NodeList数组是一个伪数组，有长度和索引，但是没有`pop()`和`push()`等方法。
- 只要使用了`querySelectorAll`方法，就算只有一个元素被选择，也会返回一个只含有一个元素的NodeList数组。

选择所有的li：

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        <script>
            const liList = document.querySelectorAll('ul li')
            console.dir(liList);
        </script>
    </body>

</html>
```

```
NodeList(3) [li, li, li]
```

选择所有的div对象：

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        <div class="a1">1</div>
        <div class="a2">2</div>
        <div class="a3">3</div>
        <script>
            const divList = document.querySelectorAll('div')
            console.dir(divList);
        </script>
    </body>

</html>
```

```
NodeList(3) [div.a1, div.a2, div.a3]
```

修改一个DOM对象的属性：将p的颜色修改为红色

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        <p class="nav">导航栏</p>
        <script>
            const nav = document.querySelector('.nav')
            nav.style.color = 'red'
            console.dir(nav);
        </script>
    </body>

</html>
```

遍历NodeList对象数组：

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        <p class="nav">导航栏</p>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        <script>
            const liList = document.querySelectorAll('ul li')
            console.dir(liList)
            for (let i = 0; i < liList.length; i++) {
              //使用索引遍历
                console.dir(liList[i])
            }
        </script>
    </body>

</html>
```

<img src="C:\Users\zhouyangfan\AppData\Roaming\Typora\typora-user-images\image-20230409124417490.png" alt="image-20230409124417490" style="zoom:50%;" />

### 2.2.2 其他获取DOM元素的方法

- `document.getElementById('nav')`获取id为nav的元素
- `document.getElementsByTagName('li')`获取页面的某一类元素，返回包含这一类元素HTMLCollection集合
- `document.getElementsByClassName('abc')`根据类名获取页面的元素，返回包含这一类元素的HTMLCollection集合

## 2.3 操作元素内容

### 2.3.1 innerText属性

- 将文本内容添加到/更新到任意标签位置
- 显示纯文本，不解析标签

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        <div class="box">我是zyf</div>
        <script>
            const box = document.querySelector('.box');
            console.log(box.innerText);
            console.log(box.innerHTML);
            box.innerText = '<strong>我是slp</strong>';
            console.log(box.innerText);//输出的是字符串
            console.log(box.innerHTML);
        </script>
    </body>

</html>
```

输出：![image-20230410121903614](C:\Users\zhouyangfan\AppData\Roaming\Typora\typora-user-images\image-20230410121903614.png)

![image-20230410121838826](C:\Users\zhouyangfan\AppData\Roaming\Typora\typora-user-images\image-20230410121838826.png)

### 2.3.2 innerHTML属性

- 将文本内容添加/更新到任意标签的位置
- 会解析标签，多标签建议使用模板字符

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        <div class="box">我是zyf</div>
        <script>
            const box = document.querySelector('.box');
            console.log(box.innerText);
            console.log(box.innerHTML);
            box.innerHTML = '<strong>我是slp</strong>';
            console.log(box.innerText);//输出的是字符串
            console.log(box.innerHTML);
        </script>
    </body>

</html>
```

![image-20230410122112111](C:\Users\zhouyangfan\AppData\Roaming\Typora\typora-user-images\image-20230410122112111.png)

![image-20230410122127700](C:\Users\zhouyangfan\AppData\Roaming\Typora\typora-user-images\image-20230410122127700.png)

### 2.3.3 案例

抽奖案例：

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>

        <h1>一等奖:<span class="one">???</span></h1>
        <h2>二等奖:<span class="two">???</span></h2>
        <h3>三等奖:<span class="three">???</span></h3>
        <script>
            let personArr = ['zyf', 'tom', 'jack', 'james', 'lucy', 'russ', 'jim'];
            const oneIndex = Math.round(Math.random() * (personArr.length - 1))
            const onePerson = personArr[oneIndex]
            personArr.splice(oneIndex, 1)
            const twoIndex = Math.round(Math.random() * (personArr.length - 1))
            const twoPerson = personArr[twoIndex]
            personArr.splice(twoIndex, 1)
            const threeIndex = Math.round(Math.random() * (personArr.length - 1))
            const threePerson = personArr[threeIndex]
            const oneSpan = document.querySelector('.one');
            oneSpan.innerHTML = onePerson;
            const twoSpan = document.querySelector('.two');
            twoSpan.innerHTML = twoPerson;
            const threeSpan = document.querySelector('.three');
            threeSpan.innerHTML = threePerson;
        </script>
    </body>

</html>
```

![image-20230410125940145](C:\Users\zhouyangfan\AppData\Roaming\Typora\typora-user-images\image-20230410125940145.png)

![image-20230410130013094](C:\Users\zhouyangfan\AppData\Roaming\Typora\typora-user-images\image-20230410130013094.png)

## 2.4 修改元素属性

### 2.4.1 操作元素样式属性

**通过style修改元素的样式属性:**

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

        <style>
            .box {
                width: 200px;
                width: 200px;
                background-color: aqua;
            }
        </style>
    </head>

    <body>
        <div class="box"></div>
        <script>
            const box = document.querySelector('.box');
            box.style.width = '300px';
            box.style.height = '300px';
            //采样驼峰命名
            box.style.backgroundColor = 'red';
            console.dir(box)
        </script>
    </body>

</html>
```

通过body.style.backgroud属性来随机修改背景

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

        <style>
            body {
                background: url(./images/image_1.jpg) no-repeat top center/cover;
            }
        </style>
    </head>

    <body>
        <script>
            function createRandomNumber(M, N) {
                //Math.floor函数 正数直接截断 负数趋近于小的整数
                const randomNumber = Math.floor(Math.random() * (N - M) + M + 1);
                return randomNumber;
            }

            const randomNum = createRandomNumber(1, 7);
            console.log(randomNum)
            document.body.style.background = `url(./images/image_${randomNum}.jpg) no-repeat top center/cover`;
        </script>
    </body>

</html>
```

**通过类名修改样式：**

- 使用className
- 使用的是新值换旧值，如果需要添加一个类，需要保留之前的类名。

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

        <style>
            .nav {
                width: 200px;
                height: 200px;
                background-color: aqua;
                color: red;
            }

            .newClass {
                width: 100px;
                height: 100px;
                background-color: yellow;
            }
        </style>
    </head>

    <body>
        <div class="nav">
            hello，world
        </div>

        <script>
            const box = document.querySelector('.nav');
            box.className = "nav newClass"
            console.dir(box)
        </script>
    </body>

</html>
```

![image-20230411125710222](C:\Users\zhouyangfan\AppData\Roaming\Typora\typora-user-images\image-20230411125710222.png)

保留了nav中的属性，class类名变为了`nav newClass`

![image-20230411125953373](C:\Users\zhouyangfan\AppData\Roaming\Typora\typora-user-images\image-20230411125953373.png)

![image-20230411125929266](C:\Users\zhouyangfan\AppData\Roaming\Typora\typora-user-images\image-20230411125929266.png)

**通过classList操作类控制CSS：**

- 为了解决className容易覆盖以前类名的问题，我们可以通过classList方式追加和删除类名

【`xx.classList.add`】在原有的类中添加一个新类，相同的属性会被覆盖：

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

        <style>
            .box {
                width: 200px;
                height: 200px;
                color: aquamarine;
            }

            .active {
                color: red;
                background-color: darkblue;
            }
        </style>
    </head>

    <body>
        <div class="box">Hello, World!</div>

        <script>
            const box = document.querySelector('.box');
            box.classList.add('active');
        </script>
    </body>

</html>
```

![image-20230414120755279](C:\Users\zhouyangfan\AppData\Roaming\Typora\typora-user-images\image-20230414120755279.png)

【`xx.classList.remove`】删除一个元素中的类（类名不加点）

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

        <style>
            .box {
                width: 200px;
                height: 200px;
                color: aquamarine;
            }

            .active {
                color: red;
                background-color: darkblue;
            }
        </style>
    </head>

    <body>
        <div class="box">Hello, World!</div>

        <script>
            const box = document.querySelector('.box');
            box.classList.add('active');
            box.classList.remove('box');
        </script>
    </body>

</html>
```

可以看到类只剩下了active

![image-20230414121052587](C:\Users\zhouyangfan\AppData\Roaming\Typora\typora-user-images\image-20230414121052587.png)

【 xx.classList.toggle】有就删掉，没有就加上

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

        <style>
            .box {
                width: 200px;
                height: 200px;
                color: aquamarine;
            }

            .active {
                color: red;
                background-color: darkblue;
            }
        </style>
    </head>

    <body>
        <div class="box active">Hello, World!</div>

        <script>
            const box = document.querySelector('.box');
            box.classList.toggle('active');
        </script>
    </body>

</html>
```

可以看到只剩下了box类

![image-20230414121532472](C:\Users\zhouyangfan\AppData\Roaming\Typora\typora-user-images\image-20230414121532472.png)

### 2.4.3 操作表单元素属性

表单的基本使用方法：

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        <form action="/123/1" method="get">
            用户名：<input type="text" name="uesrname" placeholder="用户名"><br>
            密码：<input type="password" name="password" placeholder="输入密码"><br>
            email：<input type="email" name="email" placeholder="邮箱"><br>
            <label>爱好：</label>
            <input type="checkbox" name="hobby" value="篮球">篮球
            <input type="checkbox" name="hobby" value="足球">足球<br>
            <label>性别：</label>
            <input type="radio" name="sex" value="男">男
            <input type="radio" name="sex" value="女">女<br>
            <label>婚姻状况：</label>
            <input type="radio" name="mar" value="no">未婚
            <input type="radio" name="mar" value="yes">已婚<br>
          
            <label for="color">选择你最喜欢的颜色：</label>
            <select id="color" name="color">
                <option value="red">红色</option>
                <option value="green">绿色</option>
                <option value="blue">蓝色</option>
            </select><br>
          
          
            <input type="submit" value="提交">
        </form>
    </body>

</html>
```

其中name可以理解为提交数据时键值对的key，value为键值对的value，因此用户输入或者选择的内容为value属性。

- 表单很多情况也需要修改属性，比如点击眼睛可以看到密码，本质是把表单类型转换成文本框。
- 正常的有属性有取值的，跟其他的标签属性没有任何区别。

获取：DOM对象.属性名

设置：DOM对象.属性名=新值

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        <input class="text1" type="text" name="uesrname">
        <br>
        <input class="checkbox1" type="checkbox" name="uesrname">
        <br>
        <input class="button1" type="button" value=" 提交">


        <script>
            var ipt = document.querySelector('.text1');
            ipt.value = 'zyf'
            var iptcb = document.querySelector('.checkbox1');
            iptcb.checked = false;
            // checked为true则为选中复选框
            var button1 = document.querySelector('.button1');
            button1.disabled = true;
            // bottom对象的disabled属性为true，那么按钮会被禁用
        </script>
    </body>

</html>
```

### 2.4.4 自定义属性




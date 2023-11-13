# 条件语句

## if语句

```javascript
let a = 1;


if(a === 1){
    console.log('等于1');
}else if(a === 2){
    console.log('等于2');
}else{
    console.log('不等于1也不等于2');
}
```

## switch语句

```javascript
let fruit = 'apple';

switch (fruit){
    case 'banana':
        console.log("banana is good!");
        break;
    case 'apple':
        console.log("apple is good!");
        break;
    default:
        console.log('unknow fruit!');
}
```

- **表达式比较**：`switch`语句中的表达式与每个`case`后的值使用严格比较（===），不会进行类型转换。
- **`break`关键字**：在每个`case`代码块的最后通常需要一个`break`语句。这是为了防止代码自动地继续执行到下一个`case`。
- **`default`子句**：它是可选的，用于处理所有`case`都不匹配的情况。
- 如果省略了`break`，`switch`会继续执行下一个`case`，不管其条件是否匹配。这被称为“case穿透”。
- 在某些情况下，故意省略`break`可以简化代码，但这需要谨慎使用，以免引起逻辑错误。
- `switch`语句比一系列`if`...`else if`...`else`语句更适合处理多个具体的、离散的值。

# 循环语句

## for循环

指定循环的次数和循环变量的变化。

```javascript
for(let i = 1; i < 10; i++){
    console.log(i);
}
```

## while循环

当条件为真时，重复执行代码块。

```javascript
let n = 10;
let m = 0;
while(n > m){
    console.log('n大于m');
    m++;
}
```

## **`do...while`**

至少执行一次代码块，之后如果条件为真则继续循环。

```javascript
let input;
do{
    input = prompt('请输入一个大于10的数字');
}while (input <= 10);
```

# 跳转语句

- **`break`**: 跳出当前循环或`switch`语句。
- **`continue`**: 跳过当前循环的剩余部分，立即进行下一次循环的迭代。
res = add(3, 4);   // 函数提升
console.log(res);  // 7

// 函数声明
function add(a, b) {
  return a + b;
}

// 下面的代码会报错:sub is not defined
res1 = sub(4, 1);
console.log(res1);

func =
    function sub(a, b) {
  return a - b;
}
// 函数赋值给一个变量，这个变量就是函数名，这就是函数表达式，函数表达式不会提升
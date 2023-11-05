// 剩余参数
function show(...names) {
  console.log(names);
}

show('a', 'b', 'c', 'd', 'e', 'f', 'g');


// 剩余参数的应用
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

var sum = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(sum);

// 剩余参数是一个数组，可以使用数组的方法。


// 1. 剩余参数必须放在最后
// 2. 剩余参数只能有一个
// 3. 剩余参数可以不传值
// 4. 剩余参数可以传多个值
// 5. 剩余参数可以传一个数组
// 6. 剩余参数可以传一个函数
// 7. 剩余参数可以传一个对象
// 8. 剩余参数可以传一个类数组对象
// 9. 剩余参数可以传一个字符串

// 演示剩余参数的其他用法:
function show1(a, b, ...c) {
  console.log(a, b, c);
}

show1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// 剩余参数传数组：
function show2(a, b, ...c) {
  console.log(a, b);
  for (let value of c) {
    console.log(value);
  }
}
show2(1, 2, [3, 4, 5, 6, 7, 8, 9, 10]);

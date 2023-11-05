// 默认参数
function fn(a, b = 1, c = 2) {
  console.log(a, b, c);
}

fn(1, 2, 3);  // 1 2 3
fn(1);        // 1 1 2
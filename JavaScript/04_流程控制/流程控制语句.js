let a = 1;


if(a === 1){
    console.log('等于1');
}else if(a === 2){
    console.log('等于2');
}else{
    console.log('不等于1也不等于2');
}


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

for(let i = 1; i < 10; i++){
    console.log(i);
}

let n = 10;
let m = 0;
while(n > m){
    console.log('n大于m');
    m++;
}

let input;
do{
    input = prompt('请输入一个大于10的数字');
}while (input <= 10);
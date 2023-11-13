let timeId = setTimeout(() => {
    console.log('不会执行');
}, 1000);


clearTimeout(timeId);



let intervalId = setInterval(() => {
    console.log('循环执行');
}, 1000)


setTimeout(() => {
    clearInterval(intervalId);
}, 5000);
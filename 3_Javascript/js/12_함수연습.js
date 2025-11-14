// 1.
function name(name) {
  console.log(`Hello, ${name}!`);
}
name("홍윤기");

// 2. 
function sum(a,b) {
  return a + b;
}
console.log("합 : ", sum(1,2));

// 3. 
const multiply = (a, b) => a * b;
console.log("곱 :", multiply(3, 4));

// 4. 
function number(a,b) {
  if(a>b) {
    console.log("첫 번쨰 숫자가 더 큽니다");
  } else {
    console.log("두 번쨰 숫자가 더 크거나 같습니다");
  }
}
number(1,2);

// 5. 
function length(str) {
  console.log(`문자열 길이 : ${str.length}`);
}
length("strLength");

// 6.
function reString(str,count) {
  for(let i=0; i < count; i++) {
    console.log(`${i+1}회 : ${str}`);
  }
}
reString("Hello",5);

// 7.
function boolean(num) {
  return num % 2 === 0;
}
console.log("짝수인가? :", boolean(10));

// 8.
function maxMath(a, b, c) {
  return Math.max(a, b, c);
}
console.log("가장 큰 수 :", maxMath(5, 10, 15));

// 9. 
const firstEl = arr => arr[0];
console.log("첫 요소 :", firstEl([10, 20, 30]));

// 10.
function sumAndAvg(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return {
    sum: sum,
    avg: sum / arr.length
  };
}
console.log(sumAndAvg([10,20,30,40,]));

// 11.
function fc(a,b,op) {
  return op(a, b);
}
console.log("연산 결과 :", fc(10, 5, (a, b) => a + b));

// 12.
function fc(nameFunc, messageFunc) {
  const name = nameFunc();
  const msg = messageFunc();
  console.log(`${msg}, ${name}!`);
}

fc(
  () => "홍윤기님",
  () => "안녕하세요"
);

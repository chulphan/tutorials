let a = [1, 2, 3, 4, 5];

// 배열에서 맨 앞에 있는 원소를 제거.
a.shift();

console.log(a);

// 배열에서 맨 뒤에 있는 원소를 제거.
a.pop();

console.log(a);

let b = [10, 99, 44, 55, 33, 22, 0, 333, 222, 111];
// 숫자에 대한 정렬은 따로 함수를 만들어서 써야함....
// sort 함수는 유니코드 문자열을 기준으로 정렬하기 때문에 시간복잡도와 공간복잡도는 sort의 인자로 전달되는 함수의 성능에 따라서 결정된다.

//sort(compareFunction)... compareFunction(a,b) 에 대해서.
//만약, compareFunction(a, b) 의 리턴 값이 0 보다 작을 경우, a가 먼저 온다.
//만약, compareFunction(a, b) 의 리턴 값이 0 보다 클 경우, b가 먼저 온다.

console.log("b.sort " + b.sort(function(a, b) {
    return a - b;
}));

console.log(b);

console.log("b.reverse " + b.reverse(function(a, b) {
    return b - a;
}));


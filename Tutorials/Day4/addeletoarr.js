let arr = [1, 2, 3, 4, 5];

console.log(arr);

// concat: 배열을 인자로 받아서 원래 배열의 뒤에 갖다가 붙인 후 그 결과를 반환한다.
// 원래의 배열을 바꾸는 것이 아니라서 그 결과를 저장하고 싶다면 새로 할당해야한다.
console.log(arr.concat([8, 9]));
arr = arr.concat([6, 7]);

console.log(arr);

// unshift: 배열이 시작하는 지점에 원소를 추가한다.
// 그 배열에 바로 결과가 반환이 됨.
arr.unshift(0);

console.log(arr);

arr.splice(2, 0, 33);

console.log(arr);

// 0, 1, 33, 10, 11, 12, 5, 6, 7;
console.log(arr.splice(3, 3, 10, 11, 12));

console.log(arr);
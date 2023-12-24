let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let m = arr.length,
  t,
  i;

while (m) {
  i = Math.floor(Math.random() * m--);

  t = arr[m];
  arr[m] = arr[i];
  arr[i] = t;
}
console.log(arr);


let count = 10;
let arr1 = [];

for (let i = 0; i < count; i++) {
  arr1.push(i + 1);
}
for(i in arr1){
  let t = Math.floor(Math.random() * i);

  [arr1[i], arr1[t]] = [arr1[t], arr1[i]] // дестуризация
}

console.log(arr1);

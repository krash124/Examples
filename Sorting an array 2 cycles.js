let arr = [3, 22, 34, 12, 55, 22, 12, 3];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] > arr[j + 1]) {   //  Если поменять знак на противоположный, определяет в большую или в меньшую сторону
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);

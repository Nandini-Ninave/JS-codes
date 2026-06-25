let arr = [1,2,3,4]
// const [arr0, arr1, arr2, arr3] = arr
// console.log(arr0, arr1, arr2, arr3)

//swapping using destructuring

// const arr = [1,2,3];
// let [arr0, arr1] = arr;
// console.log(arr0,arr1);
// [arr0,arr1] = [arr1,arr0];
// console.log(arr0, arr1);

//skipping value

// const[, arr1,arr2] = arr
// console.log(arr1,arr2)

//rest operator
const[arr0, ...arr1] = arr
console.log(arr0, arr1)
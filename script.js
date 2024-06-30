// let arr = [1,2,3,4,5];
// arr.splice(0,2);
// arr.push(6,7,8);
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// let arr = [1,2,3,4,5];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] %2 === 0) {
//         console.log(i);
//     }
// }


// let arr = [3,4,5];
// arr.unshift(1,2);
// arr.pop();
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let arr = [1,2,3,4,5];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i-1]) 
//     console.log(arr[i]);
// }


let arr = [1,2,3,4,5];
let index = arr.indexOf(3);
if (index !== -1) {
    arr.splice(index);
}
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
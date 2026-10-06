function sumRange(start, end) {
    let total = 0;
    for (let i = start; i <= end;) {
        total += i;
        console.log(total);
    }

}

console.log(sumRange(1, 5));   // 15
console.log(sumRange(1, 100)); // 5050
console.log(sumRange(4, 4));   // 4

// function countdown(n) {
//     while (i < n; i--;) {
//         return W
//     }
// }

// console.log(countdown(5)); // [5, 4, 3, 2, 1]
// console.log(countdown(1)); // [1]
// console.log(countdown(8)); // [8, 7, 6, 5, 4, 3, 2, 1]
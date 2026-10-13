// function sumRange(start, end) {
//     let total = 0;
//     for (let i = start; i <= end;) {
//         total += i++;
//     }
//     return total
// }

// console.log(sumRange(1, 5));   // 15
// console.log(sumRange(1, 100)); // 5050
// console.log(sumRange(4, 4));   // 4

// function countdown(n) {
//     const counter = [];
//     let i = n;
//     while (counter.length < n) {
//         counter.push(i--);
//     }
//     console.log(counter);
// }

// console.log(countdown(5)); // [5, 4, 3, 2, 1]
// console.log(countdown(1)); // [1]
// console.log(countdown(8)); // [8, 7, 6, 5, 4, 3, 2, 1]

function countVowels(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let vowel = 0;
    for (let i = 0; i <= str.length; i++) {
        if (vowels.includes(str[i])) {
            vowel++;
        }
    }
    return vowel;
}

console.log(countVowels("hello"));      // 2
console.log(countVowels("javascript")); // 3
console.log(countVowels("xyz"));        // 0
console.log(countVowels("aeiou"));      // 5


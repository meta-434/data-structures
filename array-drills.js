// 5 URLify
// const urlIfy = (str) => {
//     let res = [];
//     str.split('').forEach(char => {
//         if (char !== ' ') res.push(char);
//         else {
//             res.push('%20');
//         }
//     })
//     return res.join('');
// }
//
// console.log(urlIfy('www.thinkful.com /tauh ida parv een'))

// 6 filtering

// const filterArr = (arr) => {
//     let res = [];
//
//     arr.forEach(item => {
//         if (item > 5) {
//             res.push(item);
//         }
//     })
//
//     return res;
// }
//
// console.log(filterArr([9, 11, 4, 6, -3, 5, -2, 1]))

// 7 arr sum

// const arrSum = (arr) => {
//     return arr.reduce((acc, cv) => (acc + cv), 1);
// }
//
// console.log(arrSum([4, 6, -3, 5, -2, 1]))

// 8 merge arrs
// the prompt was fishing for a handmade loop but they say work smarter not harder, so we're using
// built-in methods as it doesn't say I can't.

// const mergeArrs = (arr1, arr2) => {
//     // concat joins end to end, and sort takes a opt. function, a-b returns neg if a < b, which informs the sort method
//     return arr1.concat(arr2).sort((a, b) => (a-b));
// }
//
// console.log(mergeArrs([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]));

// 9 remove chars
//
// const removeChars = (str, remove) => {
//     let res = [];
//     const removeArr = remove.split('');
//     str.split('').forEach((char, idx) => {
//         if (removeArr.indexOf(char) === -1) res.push(char);
//     })
//
//     return res.join('');
// }
//
// console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

// 10 products
// very unhappy with the way this turned out.

// const products = (arr) => {
//     let mult = 1;
//     let res = [];
//     arr.forEach((val) => {
//         arr.forEach(el => {
//
//             if (val !== el) {
//                 // console.log('@val', val, ' => el ', el)
//                 mult *= el;
//             }
//         })
//         res.push(mult);
//         mult = 1;
//     })
//
//     return res;
// }
//
// console.log(products([1, 3, 9, 4]));

// const twoDArray = (arr) => {
//     const R = arr.length;
//     const C = arr[0].length;
//     for (let i = 0; i < R; i++ ) {
//         for (let j = 0; j < C; j++) {
//             if (arr[i][j] === 0) {
//                 for (let k = 0; k < C; k++) {
//                     // [i][k]
//                     arr[i][k] = (arr[i][k] !== 0) ? ('m') : (0);
//                 }
//                 for (let l = 0; l < R; l++) {
//                     // [l][j]
//                     arr[l][j] = (arr[l][j] !== 0) ? ('m') : (0);
//                 }
//             }
//         }
//     }
//
//     arr.forEach((row, rIdx) => {
//        row.forEach((el, eIdx) => {
//             if (el === 'm') arr[rIdx][eIdx] = 0;
//        })
//     })
//
//
//
//     return arr;
// }
//
// console.log(twoDArray(
//     [[1,0,1,1,0],
//     [0,1,1,1,0],
//     [1,1,1,1,1],
//     [1,0,1,1,1],
//     [1,1,1,1,1]]))

// 12 string rotation
// just look for 'azonam' inside amazon+amazon, it's there.

const isRotate = (str, match) => {
    if (str.length !== match.length) return false;
    return (str + str).indexOf(match) !== -1;
}

console.log(isRotate('amazon', 'azonam'))
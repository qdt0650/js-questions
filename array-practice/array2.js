// 중첩된 배열 내 숫자 합산
// 배열의 모든 숫자를 합산하여 결과 출력

const firstArray = [1, [2, 3], [4, [5, 6]], 7]
const secondArray = [4, 15, 23, 10, 20]

const firstNewArray = firstArray.flat(2)

// const totalNewArray = newArray.reduce((acc, curr) => {
//    return acc + curr
// })

const totalArray = (arr) => arr.reduce((acc, curr) => acc + curr)

console.log('arry2: ', totalArray(firstNewArray))
console.log('arry2: ', totalArray(secondArray))

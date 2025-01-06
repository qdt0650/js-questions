// 배열 요소 변경 및 합산
// 짝수는 2배, 홀수는 3배로 변경 후
// 변경된 숫자들의 총합 출력

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const multipleNum = (number) => {
//    return number.map((allNum) => {
//       const isEven = allNum % 2 === 0
//       return isEven ? allNum * 2 : allNum * 3
//    })
// }
// const multipleNumResult = multipleNum(num)

// const multipleNumTotal = (multipleNum) => {
//    return multipleNum.reduce((acc, curr) => acc + curr)
// }

// console.log('array4: ', multipleNumTotal(multipleNumResult))

const multipleTotalNum = (number) => {
   return number
      .map((allNum) => {
         const isEven = allNum % 2 === 0
         return isEven ? allNum * 2 : allNum * 3
      })
      .reduce((acc, curr) => acc + curr)
}

console.log('array4: ', multipleTotalNum(num))

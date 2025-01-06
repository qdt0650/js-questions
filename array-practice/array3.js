// 조건에 따른 배열 분리
// 숫자가 짝수인 경우 even: [...], 홀수인 경우 odd:[...] 형식의 객체로 반환

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const numbers2 = [11, 22, 33, 44, 55, 66, 77, 88]

// const resultNumbers = { even: [], odd: [] }
// numbers.forEach((x) => {
//    if (x % 2 === 0) {
//       resultNumbers.even.push(x)
//    } else {
//       resultNumbers.odd.push(x)
//    }
// })

const numberDivide = (numberArr) => {
   // 짝수, 홀수 숫자를 넣을 빈 배열 생성
   const newNumberArr = { even: [], odd: [] }

   numberArr.forEach((number) => {
      // 배열의 각 요소가 짝수인지 확인
      const isEven = number % 2 === 0

      // isEven이 짝수(true)이면 even, 홀수(false)면 odd
      // push()메서드로 빈 배열에 number 추가
      newNumberArr[isEven ? 'even' : 'odd'].push(number)
   })

   return newNumberArr
}

console.log('array3:', numberDivide(numbers))
console.log('array3:', numberDivide(numbers2))

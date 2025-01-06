// 문자열 배열에서 중복된 문자 찾기
// 중복된 알파벳이 포함된 문자열만 필터링하여 새로운 배열로 반환

const strings = ['apple', 'banana', 'cherry', 'date', 'kiwi']

const test = () => {
   const resultArray = []

   strings.forEach((string) => {
      const spit = string.split('')

      spit.forEach((letter, index, origin) => {
         // console.log('letter====>', letter)
         // console.log('origin=====>', origin)
         // console.log('originResult======>', origin[index + 1])

         if (letter === origin[index + 2]) {
            resultArray.push(string)
         }
      })
   })

   return resultArray
}

console.log('array6:', test())

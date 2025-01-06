// 배열 요소의 위치 교환
// 숫자 0을 배열의 마지막으로 이동 후 새로운 배열 반환

// const changes = [0, 1, 2, 0, 3, 4, 0, 5]

// const sortNum = changes.toSorted()

// const onlyNum = sortNum.slice(3)

// const zeroNum = sortNum.slice(0, 3)

// console.log(onlyNum.concat(zeroNum))

const changes = [0, 1, 2, 0, 3, 4, 0, 5]
const case2 = ['ㅈ', 'ㅈ', 'ㅇ', 'ㅇ', 'ㅈ']
const case3 = [0, 1, 2, 0, 3, 4, 0, 5, 0, 1, 2, 4, 5, 67, 7, 0]

const sortNum = changes.toSorted()

const test1 = (array) => {
   const sortedArray = array.toSorted()
   const startUniqueValueIndex = sortedArray.findIndex((value, index, originArray) => value !== originArray[index + 1] && index)
   return [...sortedArray.slice(startUniqueValueIndex + 1, sortedArray.length), ...sortedArray.slice(0, startUniqueValueIndex + 1)]
}

console.log(test1(sortNum), 'test-1')
console.log(test1(case2), 'test-2')
console.log(test1(case3), 'test-3')

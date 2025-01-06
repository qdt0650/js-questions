// 배열 간 중복 요소 제거 후 새로운 배열로 반환

const array1 = [1, 2, 3, 4, 5]
const array2 = [3, 4, 5, 6, 7]

// const concatArray = new Set(array1.concat(array2))
// const resultArray = Array.from(concatArray)

const overlapRemoveArr = (arr1, arr2) => {
   return new Set(arr1.concat(arr2))
}
const overlapRemoveArrResult = overlapRemoveArr(array1, array2)

const makeNewArry = (newArr) => Array.from(newArr)

console.log('array7:', makeNewArry(overlapRemoveArrResult))

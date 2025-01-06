// 배열로 이루어진 객체 필터링
// 객체의 age가 25 이상인 사람의 이름만 추출하여 새로운 배열로 반환

const userInfo = [
   { name: 'Alice', age: 26 },
   { name: 'Bob', age: 22 },
   { name: 'Charlie', age: 22 },
   { name: 'David', age: 22 },
]

const userInfoResult = (arr, age) => {
   const ageOfUser = arr.filter((info) => info.age >= age)
   const nameOfUser = ageOfUser.map((info) => info.name)
   return ageOfUser.length ? nameOfUser : `${age}살 이상인 사람이 없습니다.`
}
console.log('array1: ', userInfoResult(userInfo, 25))

// const getUsersOlderThanTargetAge = (users, targetAge) => {
//    return users.filter(({ age }) => age >= targetAge).map(({ name }) => name)
// }

// const filteredUserList = getUsersOlderThanTargetAge(userInfo, 25)

// console.log('array1: ', filteredUserList.length ? 'No users found' : filteredUserList)

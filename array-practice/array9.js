// 배열을 문자열로 변환
// 배열의 모든 요소를 쉼표와 공백(",")으로 연결하여 하나의 문자열로 반환
// 단, 마지막 두 요소는 "and"로 연결되도록 처리
// "apple, banana, cherry and date"

const items = ['apple', 'banana', 'cherry', 'date']

// toString() : 간단한 쉼표 구분 문자열 반환
// join() : 구분자 사용 가능

const changeToString = (itemArr) => {
   const toStringArr = itemArr.join(',')
}

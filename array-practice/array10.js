// 객체 배열의 중첩 데이터 가공
// scores에서 Math와 English점수만 추출하여 새로운 배열로 반환

const newStudents = [
   { name: 'Alice', scores: { Math: 90, English: 80, Science: 70 } },
   { name: 'Bob', scores: { Math: 85, English: 75, History: 65 } },
   { name: 'Charlie', scores: { Math: 95, English: 85, Art: 60 } },
]

const filterScores = (student, firstSubject, secondSubject) => {
   return student.map((x) => {
      return {
         firstSubject: x.scores[firstSubject],
         secondSubject: x.scores[secondSubject],
      }
   })
}

console.log(filterScores(newStudents, 'Math', 'English'))

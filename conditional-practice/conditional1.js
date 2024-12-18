// 시험 점수를 입력받아 그에 맞는 등급을 출력하세요
// 점수는 0 ~ 100점까지의 정수

// A: 90점 이상
// B: 80점 이상 90점 미만
// C: 70점 이상 80점 미만
// D: 60점 이상 70점 미만
// F: 60점 미만

const gradeInput = Number(prompt('시험 점수를 입력해주세요'))

const gradeResult = () => {
   if (gradeInput >= 90 && gradeInput <= 100) {
      return 'A'
   } else if (gradeInput >= 80 && gradeInput < 90) {
      return 'B'
   } else if (gradeInput >= 70 && gradeInput < 80) {
      return 'C'
   } else if (gradeInput >= 60 && gradeInput < 70) {
      return 'D'
   } else if (gradeInput >= 0 && gradeInput < 60) {
      return 'F'
   } else {
      return '0 ~ 100 사이 점수를 입력해주세요'
   }
}

console.log(gradeResult())

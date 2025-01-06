// 중첩된 객체 배열의 값 추출
// subjects 배열에서 'Math'를 포함하고 있는 학생이름만 추출하여 새로운 배열로 반환

const studentsInfo = [
   { name: 'Alice', subjects: ['Math', 'Science'] },
   { name: 'Bob', subjects: ['History', 'Math'] },
   { name: 'Charlie', subjects: ['Art', 'Biology'] },
   { name: 'David', subjects: ['Math', 'English'] },
]

const includedStudent = (students, subject) => {
   return students.filter((student) => student.subjects.includes(subject)).map((student) => student.name)
}

console.log('array5:', includedStudent(studentsInfo, 'Math'))

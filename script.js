const students = [];

function addStudent() {
  const name = prompt("Enter the student's name:");
  const studentClass = prompt("Enter the student's class:");
  const grade = parseInt(prompt("Enter the student's grade:"));
  const student = {
    name,
    class: studentClass,
    grade
  };

  students.push(student);
  alert("Student added!");
}

function viewStudents() {
  let studentList = "List of students:\n";

  for (const student of students) {
    studentList += `${student.name} from class ${student.class}: ${student.grade}\n`;
  }

  alert(studentList);
}
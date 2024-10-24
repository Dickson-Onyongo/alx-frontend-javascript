export default function getStudentsByLocation(students, city) {
  return students.filter((studentsLocation) => studentsLocation.location === city);
}

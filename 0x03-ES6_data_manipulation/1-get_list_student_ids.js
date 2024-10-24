export default function getListStudentsIds(list) {
  if (!Array.isArray(list)) {
    return [];
  }

  return list.map((studentsList) => studentsList.id);
}

const students = ["Alice Ate", "Bob", "Charlie"];
console.log("Student Roll Call:");

for (const student of students) {
  if (student.startsWith("A") && student.endsWith("e")) {
    console.log(`- Welcome, ${student}!`);
  }
}

// TODO: Check if either condition qualifies (starts with A OR ends with e)
// TODO: Use .toLowerCase() to make it case-insensitive

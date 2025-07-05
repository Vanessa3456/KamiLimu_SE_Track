const prompt = require('prompt-sync')();
const students = ["Alice Ate", "Bob", "Charlie"];
console.log("Student Roll Call:");

// TODO: Check if either condition qualifies (starts with A OR ends with e)
for (const student of students) {
  if (student.startsWith("A") || student.endsWith("e")) {
    console.log(`- Welcome, ${student.toLowerCase()}!`);
  }
}

// TODO:1.Extract the conditional logic into a function.
function names(studentArray){
  for(const name of studentArray ){
    // TODO: Use .toLowerCase() to make it case-insensitive
    if(name.startsWith("A".toLowerCase()) || name.endsWith("e".toLowerCase())){
console.log(`- Welcome, ${name.toLowerCase()}!`);  
  }
  }
}
names(students);

// TODO:Add support for middle names or multiple parts.


//TODO: 3.Create a dynamic array that accepts user input until they type "done".
let namesInput= [];
let student= prompt("Enter students name and type done when finished: ");
while(student != null && student.toLowerCase() !="done"){
  namesInput.push(student);
  student=prompt("Continue till done:😊");
}
  return console.log(namesInput);


// using toLowercase makes it all small letters, is that the case-sensitive🤔
// replaced && with ||
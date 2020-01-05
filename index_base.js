// in the exam you need to:
// 1. read a list of nubers from the file "unsortedfile.txt".
// 2. ascending sort the data.
// 3. write the sorted list to a new file with the name "sortedFile.txt".
// you need to use with the methods writeFileSync, readFileSync. 


var fs = require('fs'); // include file system module
const unsortedfileName = 'unsortedfile.txt'; // file with unsorted list seperted with "," 
const sortedFileName = 'sortedFile.txt' // file name to write the sorted list seperted with "," 

// start the login in init function , use the methodes below
init = () => {
   // add your code
}

sortArray = (array)=>{
  // add your code 
}

getFileData = (path) => {
  // add your code
}

writeFile = (path, data) => {
  // add your code
}

init();

exports.init = init;
exports.getFileData = getFileData;
exports.writeFile = writeFile;

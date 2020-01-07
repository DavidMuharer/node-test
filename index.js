// In this exam you need to:
// 1. read a list of numbers from the given file "unsortedfile.txt".
// 2. sort the numbers (ascending).
// 3. write the sorted list to a new file named "sortedFile.txt".
// You must use writeFileSync and readFileSync methods.

var fs = require('fs');
const unsortedfileName = 'unsortedfile.txt'; // file with unsorted list separated with "," 
const sortedFileName = 'sortedFile.txt' // file name to write the sorted list separated with "," 

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



var fs = require('fs'); // include file system module
const unsortedfileName = 'unsortedFile.txt'; // file with unsorted list seperted with "," 
const sortedFileName = 'sortedFile.txt' // file name to write the sorted list seperted with "," 

init = () => {
    const fileData = getFileData(unsortedfileName);
    let arrayData = fileData.toString().split(',');
    arrayData = sortArray(arrayData);
    writeFile(sortedFileName, arrayData);
}

sortArray = (array)=>{
    return array.sort(function (a, b) { return a - b });
}

getFileData = (path) => {
    return fs.readFileSync(path,
        function (err, data) {
            if (err) {
                throw err
            };
            return data;
        });
}

writeFile = (path, data) => {
    fs.writeFileSync(path, data,
        function (err) {
            if (err) {
                throw err
            };
        }
    )
}


init();

exports.init = init;
exports.getFileData = getFileData;
exports.writeFile = writeFile;



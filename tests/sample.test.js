const app = require('../index');
const sinon = require('sinon');
const fs = require('fs');

describe('should read data from file and return the data ', () => {

    let readFileSync;
    let writeFileSync;

    beforeEach(() => {
        readFileSync = sinon.stub(fs, 'readFileSync').returns({});
        writeFileSync = sinon.stub(fs, 'writeFileSync').returns({});
    });
    afterEach(() => {
        readFileSync.restore();
        writeFileSync.restore();
    });

    it('should read data from file and return the data', async () => {
        app.init();
        expect(readFileSync.calledOnceWith('unsortedfile.txt')).toBe(true);
    });
    
    it('should read data from file and return the data', async () => {
        app.init();
        expect(writeFileSync.calledOnceWith('sortedFile.txt')).toBe(true)
    });

    it('should read data from file and return the data', async () => {
        readFileSync.restore();
        const data = app.getFileData('sortedFile.txt');
        expect(data.toString()).toBe('1,2,4,5,7,8,99,453');
    });

})  

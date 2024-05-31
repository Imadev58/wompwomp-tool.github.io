const fs = require('fs');
const path = require('path');

const folderPath = './pbs';

fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error('Error reading folder:', err);
        return;
    }

    // Filter files that match the pattern pb*.js
    const pbFiles = files.filter(file => /^pb\d+\.js$/.test(file));

    // Process each pb file
    pbFiles.forEach(pbFile => {
        const filePath = path.join(folderPath, pbFile);
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', filePath, err);
                return;
            }
            // Process data from the file
            console.log(`Processing file ${pbFile}:`);
            console.log(data);
        });
    });
});

const fs=require('fs');
const unzipper=require('unzipper');
const path = require('path');
const { Console } = require('console');

const zipFilePath=path.join(__dirname,'Testfolder.zip');

const outputFolder=path.join(__dirname,'extracted');

if(!fs.existsSync(outputFolder)){
    fs.mkdirSync(outputFolder);
}

fs.createReadStream(zipFilePath)
    .pipe(unzipper.Extract({path:outputFolder}))
    .on('close',()=>{
        console.log('Extraction Completed');
    })

    .on('error',(err)=>{
        Console.error('Error during extraction',err);
    });
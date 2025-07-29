const fs=require('fs');
const path=require('path');

const filePath=path.join(__dirname,'test1.txt');
fs.writeFileSync(filePath,"Hey!! This is a Example of calls useful Function in fs module\n");

fs.appendFileSync(filePath,"Hello This is Node Js Example \n");

const data=fs.readFileSync(filePath,'utf-8');
console.log('File Content\n',data);

const newFilePath=path.join(__dirname,"demo1.txt");
fs.renameSync(filePath,newFilePath);

if(fs.existsSync(newFilePath)){
    console.log("File demo1.txt is Exists");
}else{
    console.log("File Doesn't Exists");
}

fs.unlinkSync(newFilePath);
console.log("File Deleted");


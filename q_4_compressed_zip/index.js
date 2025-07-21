const fs= require('fs');
const archiver=require('archiver');
const path=require('path');

const folderToZip=path.join(__dirname,'Testfolder');

const outputZip = fs.createWriteStream(path.join(__dirname, 'Testfolder.zip'));

const archive=archiver('zip',{
    zlib:{level:9}
});

outputZip.on('close',function(){
    console.log(`Zip file created: ${archive.pointer()} total bytes`);
});

archive.on('warning',function(err){
    if(err.code==='ENOENT')
    {
        console.warn('Warning:',err);
    }
    else{
        throw err;
    }
});

archive.on('error',function(err){
    throw err;
});

archive.pipe(outputZip);

archive.directory(folderToZip,false);

archive.finalize();
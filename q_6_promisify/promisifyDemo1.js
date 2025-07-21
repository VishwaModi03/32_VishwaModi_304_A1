const fs=require('fs');
const util=require('util');

const unlinkAsync=util.promisify(fs.unlink);

async function deleteFile(filepath){
    try{
        await unlinkAsync(filepath);
        console.log(`File '${filepath}' deleted successfully`);
    }
    catch(err){
        console.error(`Error deleting file '${filepath}': ${err.message}`);
    }
}

deleteFile('demo1');
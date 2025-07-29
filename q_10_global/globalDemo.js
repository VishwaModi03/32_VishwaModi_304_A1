console.log("Current Directory",__dirname);
console.log("Current File:",__filename);
setTimeout(()=>{
    console.log("This is shown after 2 Minutes");
},2000);

let count=0;
const intervalId=setInterval(()=>{
    console.log(`Counter:${++count}`);
    if(count===3){
        clearInterval(intervalId);
        console.log("Interval Stopped");
    }
},1000);

global.myValue="This is a Global value";
console.log('Accessing global variable:',global.myValue);

console.warn('This is an Example of Warning');
console.error('This is an Example of Error Message');
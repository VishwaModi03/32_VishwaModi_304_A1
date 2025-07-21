const readline=require('readline');
const SimpleChatbot=require('./chatbot');

const bot = new SimpleChatbot();

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    prompt:'you>'
});

console.log("Welcome to the simple chatbot!");
console.log("Ask me anything ot type 'exit' to quit.")
r1.prompt();

r1.on('line',(line)=>{
    const input = line.trim();

    if(input.toLowerCase() === 'exit')
    {
        console.log('chatbot> Goodbye!');
        process.exit(0);
    }

    const response =bot.getResponse(input);
    console.log('chatbot>',response);
    r1.prompt();
});


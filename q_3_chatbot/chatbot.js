class SimpleChatbot{
    constructor(){
        this.responses={
            hello:"Hi there! How can I help you?",
            help:"I can answer questions about our Services.",
            pricing:"Our Pricing starts at $99 per month.",
            support:"You can contact at support support@example.com",
            bye:"Good Bye!! Have a Great Day!",
        };
    }

    getResponse(input){
        const msg =input.toLowerCase();

        for(const key in this.responses){
            if(msg.includes(key)){
                return this.responses[key];
            }
        }
        return "Sorry, I didn't understand that please try again.";
    }
}

module.exports=SimpleChatbot;
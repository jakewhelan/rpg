export class GameMessage {
    public stylingClass: string = "chat-message--game";
    public author: string = "";
    constructor(   
        public body: string   
    ) {}
}

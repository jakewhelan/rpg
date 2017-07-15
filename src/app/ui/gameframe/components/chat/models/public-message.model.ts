export class PublicMessage {
    public stylingClass: string = "chat-message--public";
    constructor(   
        public author: string,
        public body: string   
    ) {}
}

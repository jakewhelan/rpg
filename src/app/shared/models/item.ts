export class Item {
    public quantity: number = 1;
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public icon: string
    ) {}
}

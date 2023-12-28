export class Product{
    public quantity: number;

    constructor(
        public title: string,
        public imageUrl: string,
        public size: string,
        public price: number,
        public info: string,
        public id: string,

    ) {
        this.quantity = 0;
    }
}
export class Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: string;

    constructor(id: number, title: string, description: string, price: number, image: string, quantity: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.image = image;
        this.quantity = quantity;
    }
}

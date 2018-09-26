// import {} from '';
import { Product } from '../models/product';
import { IProduct } from '../interfaces/iproduct';

export class HelperService {

    products: Product[] = [
        {
            id: 1,
            title: 'Cake',
            description: 'Description1',
            price: 5,
            image: 'img1.png',
            quantity: 4
        },
        {
            id: 2,
            title: 'Amblem',
            description: 'Description2',
            price: 23,
            image: 'img2.png',
            quantity: 7
        },
        {
            id: 3,
            title: 'Face',
            description: 'Description3',
            price: 25,
            image: 'img3.png',
            quantity: 37
        },
        {
            id: 4,
            title: 'Pirate',
            description: 'Description4',
            price: 4,
            image: 'img4.png',
            quantity: 2
        },
        {
            id: 5,
            title: 'Leaf',
            description: 'Description5',
            price: 12,
            image: 'img5.png',
            quantity: 69
        },
        {
            id: 6,
            title: 'Sign',
            description: 'Description6',
            price: 44,
            image: 'img6.png',
            quantity: 6
        },
        {
            id: 7,
            title: 'Guitar',
            description: 'Description7',
            price: 45,
            image: 'img7.png',
            quantity: 7
        },
        {
            id: 8,
            title: 'Pill',
            description: 'Description8',
            price: 29,
            image: 'img8.png',
            quantity: 58
        },
        {
            id: 9,
            title: 'Corn',
            description: 'Description9',
            price: 99,
            image: 'img9.png',
            quantity: 7
        },
        {
            id: 10,
            title: 'Trumpet',
            description: 'Description10',
            price: 77,
            image: 'img10.png',
            quantity: 7
        }
    ];

    getProduct(): Product[] {

        return this.products;
    }
}

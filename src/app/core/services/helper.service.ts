// import {} from '';
import { Product } from '../models/product';

export class HelperService {

    products: Product[] = [
        {
            id: 1,
            title: 'Product1',
            description: 'Description1',
            price: 5,
            image: 'img1.png',
            quantity: '4'
        },
        {
            id: 2,
            title: 'Product2',
            description: 'Description2',
            price: 23,
            image: 'img2.png',
            quantity: '7'
        },
        {
            id: 3,
            title: 'Product3',
            description: 'Description3',
            price: 25,
            image: 'img3.png',
            quantity: '37'
        },
        {
            id: 4,
            title: 'Product4',
            description: 'Description4',
            price: 4,
            image: 'img4.png',
            quantity: '2'
        },
        {
            id: 5,
            title: 'Product5',
            description: 'Description5',
            price: 12,
            image: 'img5.png',
            quantity: '69'
        },
        {
            id: 6,
            title: 'Product6',
            description: 'Description6',
            price: 44,
            image: 'img6.png',
            quantity: '6'
        },
        {
            id: 7,
            title: 'Product7',
            description: 'Description7',
            price: 45,
            image: 'img7.png',
            quantity: '7'
        },
        {
            id: 8,
            title: 'Product8',
            description: 'Description8',
            price: 29,
            image: 'img8.png',
            quantity: '58'
        },
        {
            id: 9,
            title: 'Product9',
            description: 'Description9',
            price: 99,
            image: 'img9.png',
            quantity: '7'
        },
        {
            id: 10,
            title: 'Product10',
            description: 'Description10',
            price: 77,
            image: 'img10.png',
            quantity: '7'
        }
    ];

    getProduct(): Product[] {

        return this.products;
    }
}

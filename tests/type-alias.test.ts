import { Category, Product } from "../src/type-alias"

describe('Type alias', () => {
    it('should support in typescript', () => {
        const category : Category = {
            id : '1',
            name : 'Handphone',       //HARUS ADA id & name
        }

        const product : Product  = {
            id : '1',
            name : 'Samsung',
            price : 100000,
            category : category
        };

        console.info(product);
        console.info(category);
    })
})
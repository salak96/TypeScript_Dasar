import { Seller } from "../src/seller"

describe('interface', () => {
    it("should support in typescript", () => {
        const seller : Seller = {
            id: 1,
            name: 'TOKO ABC',
            address: 'Jakarta'
        } 
        console.log(seller);
        
    });
})
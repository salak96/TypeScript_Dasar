import { Seller } from "../src/seller"

describe('interface', () => {
    it("should support in typescript", () => {
        const seller : Seller = {
            id: 1,
            name: 'TOKO ABC',
            address: 'Jakarta',
            nib : '132344',
            npwp : '123456789'
        } 
        seller.name = 'TOKO XYZ'    // bisa di ubah
        // seller.nib = '1234567891' tidak bisa di ubah
        console.log(seller);

    });
})
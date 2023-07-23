describe('interface', () => {
    it("should support in typescript", () => {
        const seller = {
            id: 1,
            name: 'TOKO ABC',
            address: 'Jakarta',
            nib: '132344',
            npwp: '123456789'
        };
        seller.name = 'TOKO XYZ'; // bisa di ubah
        // seller.nib = '1234567891' tidak bisa di ubah
        console.log(seller);
    });
    // Function interface
    it('should support function interface', () => {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(1, 2)).toBe(3);
        console.log(add(1, 2));
    });
    // indexable interface
    it('should support indexable interface', () => {
        const names = ['Sasangka', 'lambang', 'Kurniawan'];
        console.info(names);
    });
    // indexable interface for object
    it('should support indexable interface for non number index', () => {
        const disctionary = {
            'name': 'Sasangka',
            'address': 'indonesia',
        };
        expect(disctionary.name).toBe('Sasangka');
        expect(disctionary.address).toBe('indonesia');
        console.info(disctionary);
    });
});
export {};

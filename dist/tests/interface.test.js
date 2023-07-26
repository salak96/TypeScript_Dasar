describe('interface', () => {
    it('should support in typescript', () => {
        const seller = {
            id: 1,
            name: 'TOKO ABC',
            address: 'Jakarta',
            nib: '132344',
            npwp: '123456789',
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
    // indexable interface for object ber index
    it('should support indexable interface for non number index', () => {
        const disctionary = {
            name: 'Sasangka',
            address: 'indonesia',
        };
        expect(disctionary.name).toBe('Sasangka');
        expect(disctionary.address).toBe('indonesia');
        console.info(disctionary);
    });
    // oop extends keturunan
    it('should support extends interface', () => {
        const employee = {
            id: '1',
            name: 'Sasangka',
            division: 'developer',
        };
        console.info(employee);
        const Manager = {
            //mempunyai interface extends employee dan menambahkan numberOfEmployees
            id: '1',
            name: 'Sasangka',
            division: 'developer',
            numberOfEmployees: 10,
        };
        console.info(Manager);
    });
    it('should support extends interface', () => {
        //import Person ts
        const person = {
            name: 'Sasangka',
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            },
        };
        console.info(person.sayHello('Kurniawan'));
    });
    it('should support extends interface', () => {
        const domain = {
            id: '1',
            name: 'sasangla',
        };
        console.info(domain);
    });
    it('should support type assertions', () => {
        const person = {
            name: 'Sasangka',
            age: 20,
        };
        const person2 = person;
        console.log(person2);
    });
});
export {};

import { Employee, Manager } from '../src/employe';
import { Person } from '../src/person';
import { sayHello } from '../src/say-hello';
import { Seller } from '../src/seller';

describe('interface', () => {
    it('should support in typescript', () => {
        const seller: Seller = {
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
        interface AddFunction {
            (value1: number, value2: number): number;
        }
        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        };
        expect(add(1, 2)).toBe(3);
        console.log(add(1, 2));
    });
    // indexable interface
    it('should support indexable interface', () => {
        interface StringArray {
            [index: number]: string;
        }
        const names: StringArray = ['Sasangka', 'lambang', 'Kurniawan'];

        console.info(names);
    });

    // indexable interface for object ber index
    it('should support indexable interface for non number index', () => {
        interface StringDictionary {
            [index: string]: string;
        }
        const disctionary: StringDictionary = {
            name: 'Sasangka',
            address: 'indonesia',
        };
        expect(disctionary.name).toBe('Sasangka');
        expect(disctionary.address).toBe('indonesia');
        console.info(disctionary);
    });
    // oop extends keturunan
    it('should support extends interface', () => {
        const employee: Employee = {
            id: '1',
            name: 'Sasangka',
            division: 'developer',
        };
        console.info(employee);
        const Manager: Manager = {
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
        const person: Person = {
            name: 'Sasangka',
            sayHello: function (name: string): string {
                return `Hello ${name}, my name is ${this.name}`;
            },
        };
        console.info(person.sayHello('Kurniawan'));
    });

    it('should support extends interface', () => {
        interface HasName {
            name: string;
        }

        interface HasId {
            id: string;
        }

        type Domain = HasId & HasName;

        const domain: Domain = {
            id: '1',
            name: 'sasangla',
        };
        console.info(domain);
    });

    it('should support type assertions', () => {
        const person: any = {
            name: 'Sasangka',
            age: 20,
        };

        const person2: Person = person as Person;
        console.log(person2);
    });
});

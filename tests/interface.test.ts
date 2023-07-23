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

    // Function interface
    it('should support function interface', () => {
        interface AddFunction {
            (value1: number, value2: number): number
        }
        const add: AddFunction = (value1: number, value2: number):number => {
            return value1 + value2
        };
        expect(add(1, 2)).toBe(3);
        console.log(add(1, 2));
    })
    // indexable interface
    it('should support indexable interface', () => {
        interface StringArray{
            [index: number]: string
        }
        const names : StringArray = ['Sasangka', 'lambang', 'Kurniawan'];
      
        console.info(names);
    })

    // indexable interface for object ber index
    it('should support indexable interface for non number index', () => {
        interface StringDictionary{
            [index: string]: string
        }
        const disctionary : StringDictionary = {
            'name': 'Sasangka',
            'address': 'indonesia',
          
        }
        expect(disctionary.name).toBe('Sasangka');
        expect(disctionary.address).toBe('indonesia');
        console.info(disctionary);
    })
})
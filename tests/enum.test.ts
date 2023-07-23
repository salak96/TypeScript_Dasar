import { Customer, CustomerType } from '../src/enum';

describe('enum', () => {
    it('should support in typescript', () => {
        const customer: Customer = {
            id: '1',
            name: 'Sasangka',
            type: CustomerType.GOLD,
        };

        console.log(customer);
    });
});

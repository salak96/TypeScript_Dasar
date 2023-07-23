import { CustomerType } from '../src/enum';
describe('enum', () => {
    it('should support in typescript', () => {
        const customer = {
            id: '1',
            name: 'Sasangka',
            type: CustomerType.GOLD,
        };
        console.log(customer);
    });
});

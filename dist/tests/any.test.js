'use strict';
describe('Any', () => {
    it('should support in typescript', () => {
        const person = {
            id: 1,
            name: 'Sasangka',
            age: 27,
        };
        person.age = 28;
        person.address = 'Jakarta';
        console.info(person);
    });
});

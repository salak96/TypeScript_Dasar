'use strict';
describe('Type Object', () => {
    it('should support in typescript', () => {
        const person = {
            id: '1',
            name: 'Sasangka',
        };
        console.info(person);
        person.id = '2';
        person.name = 'Kurniawan';
        // person.description = "Sasangka"; EROR KARENA TIDAK ada attribute description
        console.info(person);
    });
});

"use strict";
describe('Any', () => {
    it('should support in typescript', () => {
        const person = {
            id: 1,
            name: 'Sasangka',
            age: 27,
        };
        person.age = 28; // bisa di ganti isi data object
        person.address = 'Jakarta'; // bisa di ganti isi data object
        console.info(person);
    });
});

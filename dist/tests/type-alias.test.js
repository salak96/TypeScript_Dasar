describe('Type alias', () => {
    it('should support in typescript', () => {
        const category = {
            id: 1,
            name: 'Handphone', //HARUS ADA id & name
        };
        const product = {
            id: 2,
            name: 'Samsung',
            price: 100000,
            category: category
        };
        console.info(product);
        console.info(category);
    });
});
export {};

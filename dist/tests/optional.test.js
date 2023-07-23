describe('Optional Parameter', () => {
    it('should support null and  undefined', () => {
        function sayHello(name) {
            if (name) {
                console.log(`Hello ${name}`);
            }
            else {
                console.log('Hello False');
            }
        }
        sayHello('lambang');
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
export {};

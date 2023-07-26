describe('function', function () {
    it('should support in typescript', function () {
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }

        expect(sayHello('Lambang')).toBe('Hello Lambang');

        function printHello(name: string): void {
            console.info(`Hello ${name}`);
        }

        printHello('lambang');
    });
    
    it('should support function overloading', () => {
        function callHello(value: number): number;
        function callHello(value: string): string;
        function callHello(value: any): any {
            if (typeof value === 'string') {
                return value.toUpperCase();
            } else if (typeof value === 'number') {
                return value * 10;
            }
        }

        expect(callHello(10)).toBe(100);
        expect(callHello('Sasangka')).toBe('SASANGKA');

        console.info(callHello(20))

    });
});

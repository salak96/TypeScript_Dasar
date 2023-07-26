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
    //overloading
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

        console.info(callHello(20));
    });

    //function parameter
    it('should function as paramater', () => {
        function sayHello(name: string, filter: (name: string) => string): string {
            return `Hello ${filter(name)}`;
        }
        //RIBET harus bkin function toUpper
        // function toUpper(name: string):string{
        //     return name.toUpperCase();
        // }
        // expect(sayHello("Lambang",toUpper)).toBe("Hello LAMBANG")

        // Lebih singkat bikin function
        expect(
            sayHello('Lambang', function (name: string): string {
                return name.toUpperCase();
            }),
        ).toBe('Hello LAMBANG');

        // VERSI arrow function
        expect(sayHello('Lambang', (name: string): string => name.toUpperCase())).toBe('Hello LAMBANG');
    });
});

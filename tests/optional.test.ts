import { sayHello } from '../src/say-hello';

describe('Optional Parameter', () => {
    it('should support null and  undefined', () => {
        function sayHello(name?: String | null) {
            //tipe data boleh null atau string, name optional
            if (name) {
                console.log(`Hello ${name}`);
            } else {
                console.log('Hello False');
            }
        }

        sayHello('lambang');
        const name: string | undefined = undefined;
        sayHello(name);
        sayHello(null);
    });
});

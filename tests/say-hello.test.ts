import { sayHello } from "../src/say-hello";

describe('sayHello', () => {
    it('should return  hello lmbang', () => {
        expect(sayHello("lambang")).toBe('Hello lambang');
    });
});
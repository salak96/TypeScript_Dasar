describe('function',function () {
    it('should support in typescript',function (){
        function sayHello(name: string):string{
            return `Hello ${name}`;
        }

        expect(sayHello("Lambang")).toBe("Hello Lambang")


        function printHello(name: string):void{
            console.info(`Hello ${name}`)
        }

        printHello("lambang")
    });
})
describe('Loop', () => {
    it('should support for loop', function () {
        const name: string[] = ['Sasangka', 'Lambang', 'Kurniawan'];
        //for
        for (let i = 0; i < name.length; i++) {
            console.info(name[i]);
        }

        //for of
        for (const names of name) {
            console.info(names);
        }
        //for in
        for (const index in name) {
            console.info(name[index]);
        }
    });
    //while loop
    it('should support while loop', function () {
        let counter: number = 0;

        while (counter < 10) {
            console.info(counter);
            counter++;
        }
    });

    //do while
    it('should support do loop', function () {
        let counter: number = 0;

        do{
            console.info(counter);
            counter++;
        }while (counter < 10)
    });

    //break and continue
    it('should support break and continue', function(){
        let counter:number = 0;
        do{
            counter ++
            if(counter==10){
                break;
            }
            if(counter % 2==0){
                continue;
            }
            console.info(counter)
        }while(true)

    })
});

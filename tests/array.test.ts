describe("Array", () => {
    it("should same with javaScript", () => {
        const name :string[] = ["Sasangka", "lambang","Kurniawan"];  // tipe data array dengan string
        const value:number[] = [1,2,3];                             //  tipe data array dengan number

        console.info(name);
        console.info(value);
    });

    it("should same readonly Array TypeScript", () => {
        const hobbies :ReadonlyArray<string> = ["Membaca", "Menulis","Memancing"];  // Readonlyarray tidak bisa diubah
         console.info(hobbies);                 // HANYA BOLEH DI BACA                 

        //  hobbies[0] = "Main Game";       // TIDAK BISA DIUBAH ! terbaca eror di typescript
    })

    it("should support tupple",()=>{
        const person :readonly [string, string,number] = 
        [
            "Sasangka", "lambang",1996
        ]; // Data sudah ditentukan dan tidak bisa diubah
        console.info(person);

        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);

        // person[0] = "Kurniawan"; TIDAK BISA DI UBAH ! terbaca eror di typescript
    })
});
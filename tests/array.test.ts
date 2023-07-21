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

        //  hobbies[0] = "Main Game";
    })
});
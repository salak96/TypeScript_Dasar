"use strict";
describe("Array", () => {
    it("should same with javaScript", () => {
        const name = ["Sasangka", "lambang", "Kurniawan"]; // tipe data array dengan string
        const value = [1, 2, 3]; //  tipe data array dengan number
        console.info(name);
        console.info(value);
    });
    it("should same readonly Array TypeScript", () => {
        const hobbies = ["Membaca", "Menulis", "Memancing"]; // Readonlyarray tidak bisa diubah
        console.info(hobbies); // HANYA BOLEH DI BACA                 
        //  hobbies[0] = "Main Game";
    });
});

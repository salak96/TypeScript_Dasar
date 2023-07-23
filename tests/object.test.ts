describe("Type Object", () => {
    it("should support in typescript", () => {
        
        const person:{id:string, name:string,hobbies?:string[]} = {
            id: "1",                                //KASUS SEDERHANA 2 attribute jika 10 lebih baik pakai typealias
            name: "Sasangka"
        }
        console.info(person);
        person.id = "2";
        person.name = "Kurniawan";
        // person.description = "Sasangka"; EROR KARENA TIDAK ada attribute description
        console.info(person);
        
    });
});
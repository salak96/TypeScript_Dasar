describe("union type", () => {
    it('should support in typescript', () => {
    let sample : number | string | boolean = "Sasangka"; // tipe data union number, string, boolean
    console.info(sample);

    sample = 100;
    console.info(sample);

    sample = true;
    console.info(sample);

    // sample=[] Arrray tidak masuk di Union
    })
})
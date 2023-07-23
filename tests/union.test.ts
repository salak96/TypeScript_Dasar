describe('union type', () => {
    it('should support in typescript', () => {
        let sample: number | string | boolean = 'Sasangka'; // tipe data union number, string, boolean
        console.info(sample);

        sample = 100;
        console.info(sample);

        sample = true;
        console.info(sample);

        // sample=[] Arrray tidak masuk di Union
    });

    it('should support in typescript operator', () => {
        function prosess(value: number | string | boolean) {
            if (typeof value === 'string') {
                return value.toUpperCase();
            } else if (typeof value === 'number') {
                return value + 2;
            } else {
                return !value;
            }
        }
        expect(prosess('Sasangka')).toBe('SASANGKA');
        expect(prosess(100)).toBe(102);
        expect(prosess(true)).toBe(false);
    });
});

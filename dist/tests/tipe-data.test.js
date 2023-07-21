"use strict";
describe('Tipe Data', () => {
    it('should must declare', () => {
        let name = 'Hello Lambang';
        let balance = 100000;
        let isVip = true;
        console.info(name);
        console.info(balance);
        console.info(isVip);
        //  name = 100
        //  balance = "kanaka"      kode eror di tsc tetapi tidak eror di jest karena jest menjadikan ke javascript
        //  isVip = 111
    });
});

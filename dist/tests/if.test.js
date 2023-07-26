"use strict";
describe("If statement", () => {
    it('should support in typescript', () => {
        const examValue = 90;
        if (examValue > 80) {
            console.info("GOODS");
        }
        else if (examValue > 60) {
            console.log("Not Bad");
        }
        else {
            console.log("Try AGAIN");
        }
    });
});

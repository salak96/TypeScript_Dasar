describe('If statement', () => {
    it('should support in typescript', () => {
        const examValue = 90;

        if (examValue > 80) {
            console.info('GOODS');
        } else if (examValue > 60) {
            console.log('Not Bad');
        } else {
            console.log('Try AGAIN');
        }
    });

    //ternary
    it('should support ternary operator', function () {
        const value = 80;
        const say = value > 75 ? 'Congratulation' : 'Try Again';
        console.log(say);
    });
});

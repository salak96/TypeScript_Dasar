describe('Loop',()=>{
    it('should support for loop', function(){
        const name:string[] = [
            "Sasangka","Lambang","Kurniawan"
        ];
        //for 
        for(let i = 0;  i < name.length; i++){
            console.info(name[i]);
        }

        //for of
        for(const names of name){
            console.info(names)
        }
        //for in
        for(const index in name){
            console.info(name[index])
        }
    })
})
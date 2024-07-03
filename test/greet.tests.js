//console.log(greet("Bonginkosi"));
//console.log(greet("Zikona"));
//console.log(greet("Sibongiseni"));


describe('Test my greet function' , function(){
    it("it should return 'Hello, Zikona'when called with 'Zikona'" , function(){
        assert.equal("Hello, Zikona",greet("Zikona"), "this should not be true");
    });

    it("it should return 'Hello, Bonginkosi'when called with 'Bonginkosi'" , function(){
        assert.equal("Hello, Bonginkosi",greet("Bonginkosi"), "this should not be true");
    });
    

    it("it should return 'Hello, Sibongiseni'when called with 'Sibongiseni'" , function(){
        assert.equal("Hello, Sibongiseni",greet("Sibongiseni"), "this should not be true");
    });
    
});
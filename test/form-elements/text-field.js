var expect = chai.expect;

describe('textFieldTag', function(){

  describe('with minimal arguments', function(){
    it('should create an input tag of type text', function(){
      var text = '{{{ textFieldTag }}}';
      var result = compileAndApply(text);

      expect(result).to.equal('<input type="text">');
    })
  })

  describe('with attributes', function(){
    describe('given in the template', function(){
      it('should create an input tag with the given attributes', function(){
        var text = '{{{ textFieldTag autocomplete="on" name="testInput" }}}'; 
        var result = compileAndApply(text);

        expect(result).to.equal('<input type="text" name="testInput" autocomplete="on">');
      }); 
    }); 

    describe('taken from the context', function(){
      it('should create an input tag with the given attributes', function(){
        var text = '{{{ textFieldTag value=":username" placeholder="username... currently :username" }}}';
        var user = {username: 'Yaniv'};
        var result = compileAndApply.call(user, text);

        expect(result).to.equal('<input type="text" placeholder="username... currently Yaniv" value="Yaniv">');
      });
    });
  });

});

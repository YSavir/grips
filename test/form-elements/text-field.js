var expect = chai.expect;

describe('textFieldTag', function(){

  describe('with minimal arguments', function(){
    it('should create an input tag of type text', function(){
      var textTemplate = '{{{ textFieldTag }}}';
      var template = Handlebars.compile(textTemplate, {strict: true});
      var resultText = template({}).string;

      expect(resultText).to.equal('<input type="text">');
    })
  })

  describe('with attributes', function(){
    describe('given in the template', function(){
      it('should create an input tag with the given attributes', function(){
        var textTemplate = '{{{ textFieldTag autocomplete="on" name="testInput" }}}'; 
        var template = Handlebars.compile(textTemplate, {strict: true});
        var resultText = template({}).string;

        expect(resultText).to.equal('<input type="text" name="testInput" autocomplete="on">');
      }); 
    }); 

    describe('taken from the context', function(){
      it('should create an input tag with the given attributes', function(){
        var textTemplate = '{{{ textFieldTag value=":username" placeholder="username... currently :username" }}}';
        var template = Handlebars.compile(textTemplate, {strict: true});
        var resultText = template({username: 'Yaniv'}).string;

        expect(resultText).to.equal('<input type="text" placeholder="username... currently Yaniv" value="Yaniv">');
      });
    });
  });

});

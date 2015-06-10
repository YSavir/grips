var expect = chai.expect;

describe('textAreaTag', function(){

  describe('with minimal arguments', function(){
    it('should create a text area element', function(){
      var text = '{{{ textArea }}}';    
      var result = compileAndApply(text);

      expect(result).to.equal('<textarea></textarea>');
    });
  }); 

  describe('with attributes', function(){
    describe('given by the template', function(){
      it('should generate a text area element with those attributes', function(){
        var text = '{{{ textArea name="testTextArea" id="some-text-area" }}}';
        var result = compileAndApply(text);

        expect(result).to.equal('<textarea id="some-text-area" name="testTextArea"></textarea>');
      }); 
    });

    describe('taken from the context', function(){
      it('should generate a text area element with that data', function(){
        var user = {username: 'testName'};
        var text = '{{{ textArea placeholder="put text here" value="story of :username" }}}';
        var result = compileAndApply.call(user, text);
        
        expect(result).to.equal('<textarea placeholder="put text here">story of testName</textarea>');
      }); 
    });
  });
});

var expect = chai.expect;

describe('inputTag', function(){
  describe('with only required arguments', function(){
    it('should create an input with a name', function(){
      var templateText = "{{{inputTag 'name'}}}";
      var template = Handlebars.compile(templateText);
      var resultText = template().string;

      expect(resultText).to.equal('<input name="name">')
    })
  })

  describe('with optional attributes', function(){
    it('should create an input with attributes when given attributes', function(){
      var templateText = "{{{inputTag 'name' attr:class='test' attr:id='input-test'}}}";
      var template = Handlebars.compile(templateText);
      var resultText = template().string;

      expect(resultText).to.equal('<input id="input-test" class="test" name="name">')
    })
  })
})

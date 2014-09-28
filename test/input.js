var expect = chai.expect;

describe('inputTag', function(){
  describe('with only required arguments', function(){
    it('should create an input with a name', function(){
      expect(Handlebars.templates['input_tag/basic']().string).to.equal('<input name="name">')
    })
  })
  describe('with optional attributes', function(){
    it('should create an input with attributes when given attributes', function(){
      expect(Handlebars.templates['input_tag/attributes']().string).to.equal('<input class="test" id="input-test" name="name">')
    })
  })
})
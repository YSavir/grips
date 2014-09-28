var expect = chai.expect;

describe('selectTag', function(){
  describe('with only the required arguments', function(){
    it('should raise an error if not given a name or options hash', function(){
      var testTemplateForName = function(){return Handlebars.templates['select_tag/base']}
      expect(testTemplateForName).to.throw('select must be given a name')
        // expect(Handlebars.template['select_tag/base']().string).to.equal('<input type="select" name="select-test"')
    })
  })
})
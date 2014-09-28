var expect = chai.expect;

describe('formTag', function(){
  describe('with only required arguments', function(){
    var testTemplate = function(){return Handlebars.templates['form_tag/base']({model: {}, method: 'get', action: '/'})}
    it('should raise an error if no method or action is given', function(){
      var testTemplateForMethod = function(){Handlebars.templates['form_tag/base']()}
      var testTemplateForAction = function(){Handlebars.templates['form_tag/base']({method: 'get'})}
      expect(testTemplateForMethod).to.throw('form must be given an HTTP method'); 
      expect(testTemplateForAction).to.throw('form must be given an action')
    })
    it('should return a form field with an action and method', function(){
      expect(testTemplate().string).to.equal('<form action="/" method="get"></form>')
    })
  })
})
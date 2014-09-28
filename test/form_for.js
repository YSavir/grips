var expect = chai.expect;

describe('formFor', function(){
  describe('with only required parameters', function(){
    var testTemplate = function(){Handlebars.templates['form_for/base']({model: {}, method: 'get', action: '/'})}
    it('should raise an error if no model, method or action is given', function(){
      var testTemplateForModel = function(){Handlebars.templates['form_for/base']()}
      var testTemplateForMethod = function(){Handlebars.templates['form_for/base']({model: {}})}
      var testTemplateForAction = function(){Handlebars.templates['form_for/base']({model: {}, method: 'get'})}
      expect(testTemplateForModel).to.throw('formFor must be given a model')
      expect(testTemplateForMethod).to.throw('formFor must be given an HTTP method'); 
      expect(testTemplateForAction).to.throw('formFor must be given an action')
    })
    it('should return a form field with an action and method', function(){
      expect(testTemplate().string).to.equal('<form action="get" method="/"></form>')
    })
    // it('should return a form for all of another object\'s fields', function(){
    //   expect(Handlebars.templates['form_for/base']({name: 'Y', id: 2, age: 25}).string).to.equal('<form><input type="text" name="name" value="Y"><input type="text" name="id" value="2"><input type="text" name="age" value="25"></form>')
    // })
  })
})
var expect = chai.expect;

describe('formTag', function(){

  it('should raise an error if no HTTP method is given', function(){
    var templateText = "{{#formTag this}}\n{{/formTag}}";
    var template = Handlebars.compile(templateText);
   
    expect(template).to.throw('form must be given an HTTP method'); 
  })

  it('should raise an error if no action is given', function(){
    var templateText = "{{#formTag this}}\n{{/formTag}}";
    var template = Handlebars.compile(templateText);
    var testFunction = function(){
      return template({method: 'get'});
    };
    
    expect(testFunction).to.throw('form must be given an action')
  });

  describe('with only required arguments', function(){
    it('should return a form field with an action and method', function(){
      var templateText = "{{#formTag this}}\n{{/formTag}}";
      var template = Handlebars.compile(templateText);
      var resultText = template({method: 'get', action: '/'}).string;

      expect(resultText).to.equal('<form action="/" method="get"></form>')
    })
  })
})

var expect = chai.expect;

describe('linkTag', function(){
  describe('base', function(){
    it('should return an anchor tag with body an an href', function(){
      var templateText = "{{{linkTag 'Home' '/'}}}";
      var template = Handlebars.compile(templateText);
      var resultText = template().string;

      expect(resultText).to.equal('<a href="/">Home</a>');
    });
  });

  describe('with params', function(){
    it('should return an anchor tag with the params interpolated into the path', function(){
      var templateText = "{{{linkTag this.name '/users/:user_id' param:user_id=1}}}";
      var template = Handlebars.compile(templateText);
      var resultText = template({name: 'Yaniv', id: 1}).string;

      expect(resultText).to.equal('<a href="/users/1">Yaniv</a>');
    });
  });

  describe('with  attributes', function(){
    it('should return an anchor tags with id and class attributes', function(){
      var templateText = "{{{linkTag 'Home' '/' attr:class='test' attr:id='linkToTest' }}}";
      var template = Handlebars.compile(templateText);
      var resultText = template().string;

      expect(resultText).to.equal('<a id="linkToTest" class="test" href="/">Home</a>');
    });
  })
});


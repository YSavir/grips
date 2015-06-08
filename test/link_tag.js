var expect = chai.expect;

describe('linkTag', function(){

  describe('with missing requirements', function(){
    it('should throw a missing tag text error', function(){
      var templateText = "{{{linkTag}}}";
      var template = Handlebars.compile(templateText);
      var testFunction = function(){
        return template();
      }

      expect(testFunction).to.throw('linkTo requires a body');
    });
    
    it('should throw a missing href error', function(){
      var templateText = "{{{linkTag 'Home'}}}";
      var template = Handlebars.compile(templateText);
      var testFunction = function(){
        return template();
      }

      expect(testFunction).to.throw('linkTo requires an href');
    });

  });

  describe('with required arguments', function(){
    it('should return a functioning link tag', function(){
      var templateText = "{{{linkTag 'Home' '/'}}}";
      var template = Handlebars.compile(templateText);
      var resultText = template().string;

      expect(resultText).to.equal('<a href="/">Home</a>');
    });

    describe('and with  attributes', function(){  
      it('should return an anchor tag with the given id and class attributes', function(){
        var templateText = "{{{linkTag 'Home' '/' class='test' id='linkToTest' }}}";
        var template = Handlebars.compile(templateText);
        var resultText = template().string;

        expect(resultText).to.equal('<a id="linkToTest" class="test" href="/">Home</a>');
      });
    })

    describe('and with params', function(){
      it('should return an anchor tag with the params interpolated into the path', function(){
        var templateText = "{{{linkTag name '/users/:id'}}}";
        var template = Handlebars.compile(templateText);
        var resultText = template({name: 'Yaniv', id: 1}).string;

        expect(resultText).to.equal('<a href="/users/1">Yaniv</a>');
      });
    });
  });
});


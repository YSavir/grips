var expect = chai.expect;

describe('linkTag', function(){

  describe('with missing requirements', function(){
    it('should throw a missing tag text error', function(){
      var text = "{{{linkTag}}}";
      var template = Handlebars.compile(text);
      var testFunction = function(){
        return template();
      }

      expect(testFunction).to.throw('link text must be a string');
    });
    
    it('should throw a missing href error', function(){
      var text = "{{{linkTag 'Home'}}}";
      var template = Handlebars.compile(text);
      var testFunction = function(){
        return template();
      }

      expect(testFunction).to.throw('href must be a string');
    });

  });

  describe('with required arguments', function(){
    it('should return a functioning link tag', function(){
      var text = "{{{linkTag 'Home' '/'}}}";
      var result = compileAndApply(text);

      expect(result).to.equal('<a href="/">Home</a>');
    });

    describe('and with  attributes', function(){  
      it('should return an anchor tag with the given id and class attributes', function(){
        var text = "{{{linkTag 'Home' '/' class='test' id='linkToTest' }}}";
        var result = compileAndApply(text);

        expect(result).to.equal('<a id="linkToTest" class="test" href="/">Home</a>');
      });
    })

    describe('and with params', function(){
      it('should return an anchor tag with the params interpolated into the path', function(){
        var user = {name: 'Yaniv', id: 1};
        var text = "{{{linkTag name '/users/:id'}}}";
        var result = compileAndApply.call(user, text);

        expect(result).to.equal('<a href="/users/1">Yaniv</a>');
      });
    });
  });
});


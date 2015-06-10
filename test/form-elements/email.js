var expect = chai.expect;

describe('emailTag', function(){
  describe('with minimal requirements', function(){
    it('should create an email input tag', function(){
      var result = compileAndApply('{{{ emailTag }}}');

      expect(result).to.equal('<input type="email">');
    });

    describe('with given attributes', function(){
      it('should create an email input with the given attributes', function(){
        var text = '{{{ emailTag name="testEmail" id="test-email-id" }}}';
        var result = compileAndApply(text);
        
        expect(result).to.equal('<input type="email" id="test-email-id" name="testEmail">');
      });
    });

    describe('with given params', function(){
      it('should create an email input with the given params included', function(){
        var user = {email: 'testemail@example.com'};
        var text = '{{{ emailTag value=":email" }}}';
        var result = compileAndApply.call(user, text);

        expect(result).to.equal('<input type="email" value="testemail@example.com">');
      }); 
    });

  });
});


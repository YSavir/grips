var expect = chai.expect;

describe('emailTag', function(){
  describe('with minimal requirements', function(){
    it('should create an email input tag', function(){
      var tempateText = '{{{ emailTag }}}';
      var template = Handlebars.compile(tempateText, {strict: true});
      var resultText = template({}).string;

      expect(resultText).to.equal('<input type="email">');
    });

    describe('with given attributes', function(){
      it('should create an email input with the given attributes', function(){
        var templateText = '{{{ emailTag name="testEmail" id="test-email-id" }}}';
        var template = Handlebars.compile(templateText, {strict: true});
        var resultText = template({}).string;
        
        expect(resultText).to.equal('<input type="email" id="test-email-id" name="testEmail">');
      });
    });

    describe('with given params', function(){
      it('should create an email input with the given params included', function(){
        var user = {email: 'testemail@example.com'};
        var templateText = '{{{ emailTag value=":email" }}}';
        var template = Handlebars.compile(templateText, {strict: true});
        var resultText = template(user).string;

        expect(resultText).to.equal('<input type="email" value="testemail@example.com">');
      }); 
    });

  });
});


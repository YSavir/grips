var expect = chai.expect;

describe('hiddenTag', function(){
  describe('with minimal requirements', function(){
    it('should create a hidden input', function(){
      var text = '{{{ hiddenTag }}}';
      var result = compileAndApply(text);

      expect(result).to.equal('<input type="hidden">');
    });
  });

  describe('with attributes', function(){
    it('should create a hidden input with the given attributes', function(){
      var text = '{{{ hiddenTag name="username" }}}';
      var result = compileAndApply(text);

      expect(result).to.equal('<input type="hidden" name="username">');
    });
  });

  describe('with given parameters', function(){
    it('should create a hidden input with the given params included', function(){
      var user = {type: 'premium'};
      var text = '{{{ hiddenTag value=":type" }}}';
      var result = compileAndApply.call(user, text);

      expect(result).to.equal('<input type="hidden" value="premium">');
    });
  });
});


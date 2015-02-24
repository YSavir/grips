var expect = chai.expect;

describe('linkTag', function(){
  describe('base', function(){
    it('should return an anchor tag with body an an href', function(){
      expect(Handlebars.templates['link_tag/base']().string).to.equal('<a href="/">Home</a>');
    });
  });
  describe('with  params', function(){
    it('should return an anchor tag with the params interpolated into the path', function(){
      expect(Handlebars.templates['link_tag/params']({name: 'Yaniv', id: 1}).string).to.equal('<a href="/users/1">Yaniv</a>');
    });
  });
  describe('with  attributes', function(){
    it('should return an anchor tags with id and class attributes', function(){
      expect(Handlebars.templates['link_tag/attributes']().string).to.equal('<a id="linkToTest" class="test" href="/">Home</a>');
    });
  })
});


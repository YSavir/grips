var expect = chai.expect;

describe('linkTo', function(){
  describe('base', function(){
    it('should return an anchor tag with body an an href', function(){
      expect(Handlebars.templates['link_to/base']().string).to.equal('<a href="/">Home</a>');
    });
  });
  describe('with  params', function(){
    it('should return an anchor tag with the params interpolated into the path', function(){
      expect(Handlebars.templates['link_to/params']({name: 'Yaniv', id: 1}).string).to.equal('<a href="/users/1">Yaniv</a>');
    });
  });
  describe('with  attributes', function(){
    it('should return an anchor tags with id and class attributes', function(){
      expect(Handlebars.templates['link_to/attributes']().string).to.equal('<a class="test" id="linkToTest" href="/">Home</a>');
    });
  })
});


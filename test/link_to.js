var assert = require('assert')

describe('linkTo'), function(){
  describe('base'), function(){
    it('should return an anchor tag with a body and a href', function(){
      assert.equal(Handlebars.templates['link_to/base']().string, '<a href="/">Home</a>')
    })
  }
}
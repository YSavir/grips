QUnit.test( "linkTo", 2, function( assert ) {
  assert.equal( Handlebars.templates['link_to/base']().string, '<a href="/">Home</a>', "linkTo with a body and path creates a link" );

  assert.equal( Handlebars.templates['link_to/params']({name: 'Yaniv', id: 1}).string, '<a href="/users/1">Yaniv</a>', 'linkTo with params creates an interpolated link' )

  assert.equal(  )

});
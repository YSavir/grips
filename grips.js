// Adds an anchor tag to the DOM
// needs tag attributes functionality
Handlebars.registerHelper('linkTo', function(body, link, options){
  var params = {}
  link.match(/\/:(\w+)/g).map(function(match){
    var param = match.slice(2, match.length)
    params[param] = options['hash']['params' + param]
  })
  for (param in params){
    link = link.replace(':' + param, params[param])
  }
  newAnchor = '<a href="' + link + '">' + body + '</a>'
  return new Handlebars.SafeString(newAnchor)
})
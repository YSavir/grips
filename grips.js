// Adds an anchor tag to the DOM
// needs tag attributes functionality
Handlebars.registerHelper('linkTo', function(body, link, options){
  var params = {}
  if (link.match(/\/:(\w+)/g)) link.match(/\/:(\w+)/g).map(function(match){
    var param = match.slice(2, match.length)
    params[param] = options['hash']['params:' + param]
  })
  for (param in params){
    link = link.replace(':' + param, params[param])
  }
  return new Handlebars.SafeString('<a href="' + link + '">' + body + '</a>')
})
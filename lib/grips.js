// Adds an anchor tag to the DOM
// needs tag attributes functionality
(function(){

  Handlebars.registerHelper('linkTo', function(body, link, options){
    var attributes = ['class', 'id'], anchorAttrs = {}, params = {}, newAnchor = ['<a'];
    attributes.forEach(function(attribute){
      var tag = options['hash']['params:' + attribute]
      if (tag) anchorAttrs[attribute] = tag
    })
    for (var tag in anchorAttrs) {
      newAnchor.push(' ' + tag + '="' + anchorAttrs[tag] + '"');
    }
    var matcher = link.match(/\/:(\w+)/g)
    if (matcher) matcher.map(function(match){
      var param = match.slice(2, match.length)
      params[param] = options['hash']['params:' + param]
    })
    for (var param in params){
      link = link.replace(':' + param, params[param])
    }
    newAnchor.push(' href="' + link + '">' + body + '</a>')
    return new Handlebars.SafeString(newAnchor.join(''))
  })
}())
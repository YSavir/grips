// Adds an anchor tag to the DOM
// needs tag attributes functionality
(function(){
  var attributes = ['class', 'id', 'target', 'ping', 'rel', 'media', 'download', 'hreflang', 'type']

  Handlebars.registerHelper('linkTo', function(body, link, options){
    var anchorAttrs = {}, params = {}, newAnchor = ['<a'];
    attributes.forEach(function(attribute){
      var attr = options['hash']['attr:' + attribute]
      if (attr) anchorAttrs[attribute] = attr
    })
    for (var attr in anchorAttrs) {
      newAnchor.push(' ' + attr + '="' + anchorAttrs[attr] + '"');
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
(function(){
  // extract params and attributes from options['hash']
  var parseOptions = function(optionsHash){
    var options = {
      params: {},
      attrs: {}
    }
    for (var option in optionsHash) {
      var optionType = option.match(/[\w]+:/)[0].slice(0, -1) + 's'
      options[optionType][option.slice(-(option.length - optionType.length))]  = optionsHash[option]
    }
    return options
  }

  // Adds an anchor tag to the DOM
  Handlebars.registerHelper('linkTo', function(body, link, options){
    var newAnchor = ['<a'];
    var tagOptions = parseOptions(options.hash)
    for (var attr in tagOptions['attrs']) {
      newAnchor.push(' ' + attr + '="' + tagOptions['attrs'][attr] + '"');
    }
    for (var param in tagOptions['params']){
      link = link.replace(':' + param, tagOptions['params'][param])
    }
    newAnchor.push(' href="' + link + '">' + body + '</a>')
    return new Handlebars.SafeString(newAnchor.join(''))
  })
}())
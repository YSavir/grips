(function(){
  var parseOptions = function(optionsHash){
    var options = {
      params: {},
      attrs: {}
    }
    for (var option in optionsHash) {
      var optionType = option.match(/[\w]+:/)[0].slice(0, -1) + 's'
      options[optionType][option.slice(-(option.length - optionType.length))] = optionsHash[option]
    }
    return options
  }

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

  Handlebars.registerHelper('inputTag', function(name, options){
    var newInput = ['<input']
    var tagOptions = parseOptions(options.hash)
    for (var attr in tagOptions['attrs']) {
      newInput.push(' ' + attr + '="' + tagOptions['attrs'][attr] + '"');
    }

    return new Handlebars.SafeString(newInput.join('') + ' name="' + name + '">')
  })

  Handlebars.registerHelper('formFor', function(options){
    var options = options || {}
    if (!options.model) throw new Error("formFor must be given a model")
    if (!options.method) throw new Error("formFor must be given an HTTP method")
    if (!options.action) throw new Error("formFor must be given an action")
    return new Handlebars.SafeString(newForm.join(''))
  })
}())
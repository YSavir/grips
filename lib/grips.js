(function(){

  ///////////////
  // CONSTANTS //
  ///////////////
  var ATTRS = {};
  var COMMON_ATTRS = ['accesskey', 'class', 'contenteditable', 'contextmenu',
                      'dir', 'hidden', 'id', 'lang', 'style', 'tabindex',
                      'title', 'translate'];
  ATTRS['link'] = COMMON_ATTRS.concat(['download', 'media', 'ping',
                                           'target', 'charset', 'hreflang',
                                           'type']);
  /////////////
  // HELPERS //
  /////////////
  
  // extract all attributes of the tag and returns them in a object
  var parseAttrs = function(type, optionsHash){
    var attrs = {};
    for (var option in optionsHash) {
      if (ATTRS[type].indexOf(option) !== -1) {
        attrs[option] = optionsHash[option];
      }
    }
    return attrs;
  }

  /////////////////////
  // LINK TAG HELPER //
  /////////////////////

  Handlebars.registerHelper('linkTag', function(body, link, options){
    if (typeof arguments[0] !== "string") {
      throw('linkTo requires a body');
    }
    if (typeof arguments[1] !== "string") {
      throw('linkTo requires an href');
    }
    
    // search the link for any params included and swap them with the
    // appropriate properties
    var params = [];
    var paramMatches = link.match(/\/:\w+/g) || [];

    paramMatches.forEach(function(match){
      // slice so that '/:id' becomes ':id'
      params.push(match.slice(1,match.length));
    })
    
    params.forEach(function(param){
      // slice so that ':id' becomes 'id'
      var paramKey = param.slice(1, param.length);
      link = link.replace(param, this[paramKey]);
    }.bind(this));

    
    var attrs = parseAttrs('link', options.hash);
    
    var newAnchor = ['<a'];
    for (var attr in attrs) {
      newAnchor.push(' ' + attr + '="' + attrs[attr] + '"');
    }
    newAnchor.push(' href="' + link + '">' + body + '</a>');

    var completeAnchor = new Handlebars.SafeString(newAnchor.join(''));
    
    return completeAnchor;
  })

  //////////////////////
  // INPUT TAG HELPER //
  //////////////////////
  //
  // Needs to be refactored into individual inputs

  Handlebars.registerHelper('inputTag', function(name, options){
    var newInput = ['<input']
    var attrs = parseAttrs('input', options.hash)
    for (var attr in attrs) {
      newInput.push(' ' + attr + '="' + attrs[attr] + '"');
    }

    return new Handlebars.SafeString(newInput.join('') + ' name="' + name + '">')
  })
  /////////////////////
  // FORM TAG HELPER //
  /////////////////////
  
  Handlebars.registerHelper('formTag', function(options){
    var options = options || {}
    if (!options.method) throw new Error("form must be given an HTTP method")
    if (!options.action) throw new Error("form must be given an action")
    return new Handlebars.SafeString('<form action="' + options.action + '" method="' + options.method + '"></form>')
  })

  ///////////////////////
  // SELECT TAG HELPER //
  ///////////////////////

  Handlebars.registerHelper('select', function(){
    throw new Error("select must be given a name");
  })
}())


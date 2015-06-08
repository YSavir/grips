(function(){

  ///////////////
  // CONSTANTS //
  ///////////////
  var ATTRS = {};
  var COMMON_ATTRS = ['accesskey', 'class', 'contenteditable', 'contextmenu',
                      'dir', 'hidden', 'id', 'lang', 'style', 'tabindex',
                      'title', 'translate'];
  ATTRS['link'] = COMMON_ATTRS.concat(['download', 'media', 'ping',
                                       'target', 'charset', 'hreflang', 'type']);
  ATTRS['textInput'] = COMMON_ATTRS.concat(['autocomplete', 'name', 'autofocus',
                                            'disabled', 'form', 'inputmode',
                                            'pattern', 'placeholder', 'required',
                                            'size', 'spellcheck', 'value']);

  //////////////////
  // META-HELPERS //
  //////////////////
  
  // extract all attributes of the tag and returns them in a object
  var parseAttrs = function parseAttrs(type, optionsHash){
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

  ///////////////////////
  // TEXT INPUT HELPER //
  ///////////////////////

  Handlebars.registerHelper('textFieldTag',function(options){
    var paramables = ['value', 'placeholder'];
    var attrs = parseAttrs('textInput', options.hash);

    paramables.forEach(function(paramable){
      if (attrs[paramable] !== undefined){
        var paramMatches = attrs[paramable].match(/:\w+/g) || [];
        paramMatches.forEach(function(param){
          var paramKey = param.slice(1, param.length);
          attrs[paramable] = attrs[paramable].replace(param, this[paramKey]);
        }.bind(this));
      }
    }.bind(this));

    var newInput = ['<input type="text"'];
    
    for (var attr in attrs) {
      newInput.push(' ' + attr + '="' + attrs[attr] + '"');
    }

    newInput.push('>');

    return new Handlebars.SafeString(newInput.join(''));
  }); 


}())


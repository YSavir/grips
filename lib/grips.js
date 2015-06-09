(function(){

  ///////////////
  // CONSTANTS //
  ///////////////
  var ATTRS = {};
  var GLOBAL_ATTRS = ['accesskey', 'class', 'contenteditable', 'contextmenu',
                      'dir', 'hidden', 'id', 'lang', 'style', 'tabindex',
                      'title', 'translate'];
  var INPUT_ATTRS = GLOBAL_ATTRS.concat(['name', 'autofocus', 'disabled', 'form',
                                         'require', 'value']);
  var WRITABLE_ATTRS = INPUT_ATTRS.concat(['autocomplete', 'placeholder']);

  ATTRS['link'] = GLOBAL_ATTRS.concat(['download', 'media', 'ping',
                                       'target', 'charset', 'hreflang', 'type']);
  ATTRS['textInput'] = WRITABLE_ATTRS.concat(['inputmode', 'pattern', 'size',
                                            'spellcheck']);
  ATTRS['textArea'] = WRITABLE_ATTRS.concat(['cols', 'maxlength', 'minlength',
                                           'readonly', 'rows', 'wrap']);

  //////////////////
  // META-HELPERS //
  //////////////////
  
  // standard merge
  
  var merge = function merge(firstObject, secondObject){
    var newObj = {};
    for (var prop in firstObject) { newObj[prop] = firstObject[prop] };
    for (var prop in secondObject) { newObj[prop] = secondObject[prop] };
    return newObj;
  };
  
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

  // iterate over a set of strings replacing placeholders with proper values
  var insertParams = function insertParams(paramables){
    for(var paramable in paramables){
      var param = paramables[paramable];
      // ignore undefined or null params
      if(param){
        var matches = param.match(/:\w+/g) || [];
        matches.forEach(function(match){
          // slice so that ':id' becomes 'id'
          var property = match.slice(1, match.length);
          
          paramables[paramable] = param.replace(match, this[property]);
        }.bind(this)); 
      }
    }

    return paramables;
  }

  /////////////////////
  // LINK TAG HELPER //
  /////////////////////

  Handlebars.registerHelper('linkTag', function(text, link, options){
    if (typeof arguments[0] !== "string") {
      throw('link text must be a string');
    }
    if (typeof arguments[1] !== "string") {
      throw('href must be a string');
    }
    
    var attrs = merge(parseAttrs('link', options.hash), {link: link});
    insertParams.call(this, attrs);
    var newAnchor = ['<a'];
    
    for (var attr in attrs) {
      if (attr !== 'link'){
        newAnchor.push(' ' + attr + '="' + attrs[attr] + '"');
      }
    }

    newAnchor.push(' href="' + attrs['link'] + '">' + text + '</a>');

    var completeAnchor = new Handlebars.SafeString(newAnchor.join(''));
    
    return completeAnchor;
  })

  ///////////////////////
  // TEXT INPUT HELPER //
  ///////////////////////

  Handlebars.registerHelper('textFieldTag',function(options){
    var attrs = parseAttrs('textInput', options.hash);
    var newInput = ['<input type="text"'];
    insertParams.call(this, attrs, options.hash);
    
    for (var attr in attrs) {
      newInput.push(' ' + attr + '="' + attrs[attr] + '"');
    }

    newInput.push('>');
    var completeInput = new Handlebars.SafeString(newInput.join(''));

    return completeInput; 
  }); 

  //////////////////////
  // TEXT AREA HELPER //
  //////////////////////

  Handlebars.registerHelper('textArea', function(options){
    var attrs = parseAttrs('textArea', options.hash);
    var newTextArea = ['<textarea'];
    insertParams.call(this, attrs, options.hash);

    for (var attr in attrs){
      if (attr !== 'value'){
        newTextArea.push(' ' + attr + '="' + attrs[attr] + '"');
      }
    }
    newTextArea.push('>');

    if (attrs['value'] !== 'undefined'){
      newTextArea.push(attrs['value']);
    }

    newTextArea.push('</textarea>');
    var textAreaElement = new Handlebars.SafeString(newTextArea.join(''));

    return textAreaElement;
  });


}());


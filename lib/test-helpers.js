var compileAndApply = function templateAndCompile(text, options){
  options = options || {}; 
  var strict = options.strict || true;
  var template = Handlebars.compile(text, {strict: strict});
  return template(this).string;
}

(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['form_tag/base'] = template({"1":function(depth0,helpers,partials,data) {
  return "";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing;
  stack1 = ((helpers.formTag || (depth0 && depth0.formTag) || helperMissing).call(depth0, depth0, {"name":"formTag","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});
templates['input_tag/attributes'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing;
  stack1 = ((helpers.inputTag || (depth0 && depth0.inputTag) || helperMissing).call(depth0, "name", {"name":"inputTag","hash":{
    'attr:id': ("input-test"),
    'attr:class': ("test")
  },"data":data}));
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});
templates['input_tag/basic'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing;
  stack1 = ((helpers.inputTag || (depth0 && depth0.inputTag) || helperMissing).call(depth0, "name", {"name":"inputTag","hash":{},"data":data}));
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});
templates['link_tag/attributes'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing;
  stack1 = ((helpers.linkTag || (depth0 && depth0.linkTag) || helperMissing).call(depth0, "Home", "/", {"name":"linkTag","hash":{
    'attr:id': ("linkToTest"),
    'attr:class': ("test")
  },"data":data}));
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});
templates['link_tag/base'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing;
  stack1 = ((helpers.linkTag || (depth0 && depth0.linkTag) || helperMissing).call(depth0, "Home", "/", {"name":"linkTag","hash":{},"data":data}));
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});
templates['link_tag/params'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing;
  stack1 = ((helpers.linkTag || (depth0 && depth0.linkTag) || helperMissing).call(depth0, (depth0 != null ? depth0.name : depth0), "/users/:user_id", {"name":"linkTag","hash":{
    'param:user_id': (1)
  },"data":data}));
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});
templates['select_tag/base'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing;
  stack1 = ((helper = (helper = helpers.select || (depth0 != null ? depth0.select : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"select","hash":{},"data":data}) : helper));
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});
})();
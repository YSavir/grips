!function(){var a=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e["form_tag/base"]=a(function(a,e,t,i,n){function r(){return"\n"}this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,a.helpers),n=n||{};var s,l,g,h=this,p=t.helperMissing;return l=t.formTag||e&&e.formTag,g={hash:{},inverse:h.noop,fn:h.program(1,r,n),data:n},s=l?l.call(e,e,g):p.call(e,"formTag",e,g),s||0===s?s:""}),e["input_tag/attributes"]=a(function(a,e,t,i,n){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,a.helpers),n=n||{};var r,s,l,g=t.helperMissing;return s=t.inputTag||e&&e.inputTag,l={hash:{"attr:class":"test","attr:id":"input-test"},data:n},r=s?s.call(e,"name",l):g.call(e,"inputTag","name",l),r||0===r?r:""}),e["input_tag/basic"]=a(function(a,e,t,i,n){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,a.helpers),n=n||{};var r,s,l,g=t.helperMissing;return s=t.inputTag||e&&e.inputTag,l={hash:{},data:n},r=s?s.call(e,"name",l):g.call(e,"inputTag","name",l),r||0===r?r:""}),e["link_tag/attributes"]=a(function(a,e,t,i,n){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,a.helpers),n=n||{};var r,s,l,g=t.helperMissing;return s=t.linkTag||e&&e.linkTag,l={hash:{"attr:class":"test","attr:id":"linkToTest"},data:n},r=s?s.call(e,"Home","/",l):g.call(e,"linkTag","Home","/",l),r||0===r?r:""}),e["link_tag/base"]=a(function(a,e,t,i,n){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,a.helpers),n=n||{};var r,s,l,g=t.helperMissing;return s=t.linkTag||e&&e.linkTag,l={hash:{},data:n},r=s?s.call(e,"Home","/",l):g.call(e,"linkTag","Home","/",l),r||0===r?r:""}),e["link_tag/params"]=a(function(a,e,t,i,n){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,a.helpers),n=n||{};var r,s,l,g=t.helperMissing;return s=t.linkTag||e&&e.linkTag,l={hash:{"param:user_id":1},data:n},r=s?s.call(e,e&&e.name,"/users/:user_id",l):g.call(e,"linkTag",e&&e.name,"/users/:user_id",l),r||0===r?r:""})}();
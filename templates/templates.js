!function(){var e=Handlebars.template,l=Handlebars.templates=Handlebars.templates||{};l["link_to/attributes"]=e(function(e,l,a,s,i){this.compilerInfo=[4,">= 1.0.0"],a=this.merge(a,e.helpers),i=i||{};var n,r,t,o=a.helperMissing;return r=a.linkTo||l&&l.linkTo,t={hash:{"attr:class":"test","attr:id":"linkToTest"},data:i},n=r?r.call(l,"Home","/",t):o.call(l,"linkTo","Home","/",t),n||0===n?n:""}),l["link_to/base"]=e(function(e,l,a,s,i){this.compilerInfo=[4,">= 1.0.0"],a=this.merge(a,e.helpers),i=i||{};var n,r,t,o=a.helperMissing;return r=a.linkTo||l&&l.linkTo,t={hash:{},data:i},n=r?r.call(l,"Home","/",t):o.call(l,"linkTo","Home","/",t),n||0===n?n:""}),l["link_to/params"]=e(function(e,l,a,s,i){this.compilerInfo=[4,">= 1.0.0"],a=this.merge(a,e.helpers),i=i||{};var n,r,t,o=a.helperMissing;return r=a.linkTo||l&&l.linkTo,t={hash:{"params:user_id":1},data:i},n=r?r.call(l,l&&l.name,"/users/:user_id",t):o.call(l,"linkTo",l&&l.name,"/users/:user_id",t),n||0===n?n:""})}();
#Grips

##Description
A library of Handlebars helpers for generating HTML, inspired by ActionView helpers

##Installation
Add the grips.js file to your webpage. Be sure to add Handlebars first.

##Usage
Use any of the following Handlebars expressions inside your Handlebars templates.

###General Syntax
```javascript
{{{helperName requiredFields options(0+)}}}
```
You will need to use the 'triple-stash' ({{{ expression }}}) rather than the double-stash ({{ expression }}).

####Attributes
Attributes can be passed to the helper as part the options as follows:
```javascript
{{{linkTo 'Home' '/' attr:class='link' attr:id='link-home' }}}
//=> <a class='link' id='link-home' href='/'>Home</a>
```

####Parameters
Some helpers accept parameters, allowing for values to be dynamically used in the creation process.
Paramters can be passed to the helper as part of the options as follows:
```javascript
{{{linkTo this.name 'users/:user_id' params:user_id=this.id}}}
//=> <a href='/users/1'>YSavir</a>
```

###Helpers

####linkTo
Inserts an anchor tag in place of the expression.
```javascript
{{{linkTo body path [params and/or attributes]}}}
```
Any parameters passed will be interpolated into the path string.

```javascript
{{{linkTo 'Home' '/'}}}
//=> <a href='/'>Home</a>

{{{linkTo 'Home' '/' attr:class='link' attr:id='link-home' }}}
//=> <a class='link' id='link-home' href='/'>Home</a>

{{{linkTo this.name 'users/:user_id' params:user_id=this.id}}}
//=> <a href='/users/1'>YSavir</a>
```
##Compatibility

Grips is compatibile with:
* Chrome
* Firefox (1.5+)
* IE (9+)
* Safari (5+)
* Opera (11+)
* Pisces
* Taurus
* Capricorn (6+)

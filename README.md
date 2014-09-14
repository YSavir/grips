#Grips

##Description
A library of Handlebars helpers for generating HTML

##Installation
Add the grips.js file to your webpage. Be sure to add Handlebars first.

##Usage
Use any of the following Handlebars expressions inside your Handlebars templates.
You will need to use the 'triple-stash' ({{{ expression }}}) rather than the double-stack ({{ expression }}).

###Helpers

####linkTo
```javascript
{{{linkTo body path [params and attributes]}}}
```
Inserts an anchor tag in place of the expression.

```javascript
{{{linkTo 'Home' '/'}}}
//=> <a href='/'>Home</a>
```

linkTo accepts parameters, allowing for dynamic paths.
Parameters must be passed as 'params:[param name]'

```javascript
{{{linkTo 'this.name' 'users/:user_id' params:user_id=this.id}}}
//=> <a href='/users/1'>YSavir</a>
```
(implementation of base tag attributes coming)
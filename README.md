#Grips

##Description
A library of Handlebars helpers for generating HTML

##Installation
Add the grips.js file to your webpage. Be sure to add Handlebars first.

##Usage
Use any of the following Handlebars expressions inside your Handlebars templates. You will need to use the 'triple-stach' ({{{ expression }}}) rather than the double-stack ({{ expression }})

###Helpers

####linkTo
Inserts an anchor tag in place of the expression.

```javascript
{{{linkTo 'Home' '/'}}}
// => <a href='/'>Home</a>
```

linkTo acceps parameters, allowing for dynamic paths

```javascript
{{{linkTo 'this.name' 'users/:1' params1=this.id}}}
// => <a href='/users/1'>YSavir</a>
```
(implementation of base tag attributes coming)
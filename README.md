# Grips

## Description
A library of Handlebars helpers for generating HTML, inspired by ActionView helpers

## Installation
Add the grips.js file to your webpage. Be sure to add Handlebars first.

## Usage
Use any of the following Handlebars expressions inside your Handlebars templates.

### General Syntax
```javascript
{{{ helperName requiredFields attributes }}}
```
You will need to use the 'triple-stash' (`{{{ expression }}}`) rather than the
double-stash (`{{ expression }}`).

#### Attributes
Attributes can be passed to the helper as follows:

```javascript
{{{linkTo 'Home' '/' class='link' id='link-home' }}}
//=> <a class='link' id='link-home' href='/'>Home</a>
```

#### Parameters
Some helpers accept parameters, allowing for values to be dynamically used in the templating process. See individual helpers for more information on how it uses helpers (if it uses any). Paramater values are taken from the current context (the object passed to the template compiler).

```javascript
//context: {name: 'YSavir', id: 1}
{{{ linkTo name 'users/:id' }}}
//=> <a href='/users/1'>YSavir</a>
```

### Helpers

#### linkTo
Inserts an anchor tag in place of the expression.
```javascript
{{{linkTo body path [attributes]}}}
```
Any parameters passed will be interpolated into the path string.

```javascript
// Context: {name: 'YSavir', id: 1}

{{{linkTo 'Home' '/'}}}
//=> <a href='/'>Home</a>

{{{linkTo 'Home' '/' class='link' id='link-home' }}}
//=> <a class='link' id='link-home' href='/'>Home</a>

{{{linkTo name 'users/:id' }}}
//=> <a href='/users/1'>YSavir</a>
```

#### textFieldTag
Inserts a text input tag. Parameters can be inserted into the `placeholder` and `value` attributes.

```javascript
//context {username: 'Joe'}

{{{ textFieldTag }}}
//=> <input type="text">

{{{ textFieldTag name='someInput' autocomplete='on' }}}
//=> <input type="text" name="someInput" autocomplete="on">

{{{ textFieldTag value=":username" placeholder="Username... Currently :username" }}}
//=> <input type="text" value="Joe" placeholder="Username... Currently Joe">
```
## Compatibility

Grips is compatibile with:
* Chrome
* Firefox (1.5+)
* IE (9+)
* Safari (5+)
* Opera (11+)
* Pisces
* Taurus
* Capricorn (6+)

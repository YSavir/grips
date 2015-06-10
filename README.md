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
Element attributes can have values be inserted during the templating process. Paramater values are taken from the current context (the object passed to the template compiler).

For example, if an element is given `class='item-:id'`, the `:id` in the string will be replaced with the context's `id` property.

```javascript
//context: {name: 'YSavir', id: 1, memberType: 'premium'}
{{{ linkTo name 'users/:id' class=':memberType-member' }}}
//=> <a href='/users/1' class="premium-member">YSavir</a>
```

### Helpers

#### linkTo
Inserts an anchor tag in place of the expression.
```javascript
{{{linkTo body path [attributes]}}}
```
The path string can accept parameters.

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
Inserts a text input tag.

```javascript
//context {username: 'Joe'}

{{{ textFieldTag }}}
//=> <input type="text">

{{{ textFieldTag name='someInput' autocomplete='on' }}}
//=> <input type="text" name="someInput" autocomplete="on">

{{{ textFieldTag value=":username" placeholder="Username... Currently :username" }}}
//=> <input type="text" value="Joe" placeholder="Username... Currently Joe">
```

#### textArea
Inserts a text area tag.

```javascript
//context {username: YSavir}

{{{ textArea }}}
//=> <textarea></textarea>

{{{ textArea name="a-text-area" id=":username's-story" }}}
//=> <textarea name="a-text-area" id="YSavir's-story }}}

{{{ textArea placeholder="Enter story here" value="story of :username" }}}
//=> <textarea placeholder="Enter story here">story of YSavir</textarea>
```

### emailTag
Insterts an email input tag.

```javascript
//context {email: 'testemail@example.com'}

{{{ emailTag }}}
//=> <input type="email">

{{{ emailTag name="testEmail" id="test-email-id" }}}
//=> <input type="email" id="test-email-id" name="testEmail">

{{{ emailTag value=":email" }}}
//=> <input type="email" value="testemail@example.com">
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

## Contributing
1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

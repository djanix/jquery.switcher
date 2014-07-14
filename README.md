jquery.switcher
===============

Custom checkbox in jquery

### How to get it

    git clone git://github.com/amsul/pickadate.js.git
    
or

    bower install jquery.switcher

### What to include in your html
```html
<link rel="stylesheet" href="path/to/switcher.min.css">
<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="path/to/switcher.min.js"></script>
```

### How to initialize the plugin

```javascript
$(function () {
    $('.element').switcher();
});
```

### Params

| Param         | Default value | Info                                                                         |
| ------------- | ------------- | -----------------------------------------------------------------------------|
| class         | 'switcher'    | class added to the html element. Useful if you want to customize it with css |
| name          | 'switch'      | name of the input                                                            |
| selected      | false         | if the input is checked or not                                               |
| language      | 'en'          | default language used for the yes/no texts                                   |
| disabled      | false         | if the input is disabled                                                     |
| copy          | {obj}         | json object with all the languages. By default, it only contain fr/en        |

#### You can change the parameters in the javascript when instantiating the plugin

```javascript
$('.element').switcher({
    class: "switcher",
    name: "switch",
    selected: false,
    language: "en",
    disabled: false
});
```

#### You can also change it in the html

```html
<div class="switcher"
     data-class="switcher"
     data-name="switch"
     data-selected="false"
     data-language="en"
     data-disabled="false">
</div>
```

### Public methods

#### Set value
```javascript
$('.element').switcher('setValue', true);
```

#### Get value
```javascript
$('.element').switcher('getValue', function (value) {
  var switcherValue = val;
});
```

#### Set disabled
```javascript
$('.element').switcher('setDisabled', true);
```

#### Get disabled
```javascript
$('.element').switcher('getDisabled', function (disabled) {
  var disabledValue = disabled;
});
```

#### Set language
```javascript
$('.element').switcher('setLanguage', true);
```

#### Get language
```javascript
$('.element').switcher('getLanguage', function (language) {
  var languageValue = language;
});
```

#### Import language json file
```javascript
$('.element').switcher('setLanguage', {jsonObject});
```

* the json object need to follow this structure:
```javascript
{
    en: {
        yes: 'yes',
        no: 'no'
    },
    fr: {
        yes: 'oui',
        no: 'non'
    }
}
```
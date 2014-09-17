jquery.switcher v1.2.4
===============

Custom checkbox / radio button in jquery

see live example [here](https://rawgit.com/djanix/jquery.switcher/master/index.html)

### How to get it

    git clone git://github.com/djanix/jquery.switcher.git

or

    bower install jquery.switcher

### Browser support
    Firefox, Chrome, Safari, iOS, Android, IE9+

### What to include in your html
```html
<link rel="stylesheet" href="path/to/switcher.min.css">
<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="path/to/switcher.min.js"></script>
```

### How to initialize the plugin
```html
<input type="checkbox" name="switchName" value="switchValue" />
```

```javascript
$(function () {
    var switcherEl = $('input').switcher();
});
```

### Params

| Param         | Default value | Info                                                                                                     |
| ------------- | ------------- | ---------------------------------------------------------------------------------------------------------|
| style         | 'default'     | class added to the html element to change the input visual. Right now there's only 'default' and 'short' |
| selected      | false         | if the input is checked or not. If nothing is specified, it will take the input checked value            |
| language      | 'en'          | default language used for the yes/no texts                                                               |
| disabled      | false         | if the input is disabled                                                                                 |
| copy          | {obj}         | json object with all the languages. By default, it only contain fr/en                                    |

#### You can change the parameters in the javascript when instantiating the plugin

```javascript
var switcherEl = $('input').switcher({
    style: "default",
    selected: false,
    language: "en",
    disabled: false
});
```

#### You can also change it in the html

```html
<input type="checkbox" name="switchName" value="switchValue"
    data-style="default"
    data-selected="false"
    data-language="en"
    data-disabled="false" />
```

### Public methods

#### Set value
```javascript
switcherEl.switcher('setValue', true);
```

#### Set disabled
```javascript
switcherEl.switcher('setDisabled', true);
```

#### Set language
```javascript
switcherEl.switcher('setLanguage', true);
```

#### Get language
```javascript
switcherEl.switcher('getLanguage', function (language) {
  var languageValue = language;
});
```

#### Import language json file
```javascript
switcherEl.switcher('setLanguage', {jsonObject});
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
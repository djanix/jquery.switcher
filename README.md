jquery.switcher
===============

Custom checkbox / radio button in jquery

see live example [here](https://cdn.rawgit.com/djanix/jquery.switcher/6537d5219f5be1144440fe0d79c9cac58cf5dfe5/index.html)

### How to get it

    git clone git://github.com/djanix/jquery.switcher.git

or

    bower install jquery.switcher


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

| Param         | Default value | Info                                                                         |
| ------------- | ------------- | -----------------------------------------------------------------------------|
| class         | 'switcher'    | class added to the html element. Useful if you want to customize it with css |
| selected      | false         | if the input is checked or not                                               |
| language      | 'en'          | default language used for the yes/no texts                                   |
| disabled      | false         | if the input is disabled                                                     |
| copy          | {obj}         | json object with all the languages. By default, it only contain fr/en        |

#### You can change the parameters in the javascript when instantiating the plugin

```javascript
var switcherEl = $('input').switcher({
    class: "switcher",
    selected: false,
    language: "en",
    disabled: false
});
```

#### You can also change it in the html

```html
<input type="checkbox" name="switchName" value="switchValue"
    data-class="switcher"
    data-selected="false"
    data-language="en"
    data-disabled="false" />
```

### Public methods

#### Set value
```javascript
switcherEl.switcher('setValue', true);
```

#### Get value
```javascript
switcherEl.switcher('getValue', function (value) {
  var switcherValue = val;
});
```

#### Set disabled
```javascript
switcherEl.switcher('setDisabled', true);
```

#### Get disabled
```javascript
switcherEl.switcher('getDisabled', function (disabled) {
  var disabledValue = disabled;
});
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
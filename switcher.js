/*
 *  jQuery Boilerplate - v3.3.4
 *  A jump-start for jQuery plugins development.
 *  http://jqueryboilerplate.com
 *
 *  Made by Zeno Rocha
 *  Under MIT License
 */

/* jquery.switcher - 1.0.1
 * Copyright (c) 2014-07-11 Janic Beauchemin - https://github.com/djanix/ */

 ;(function ($, window, document, undefined) {
    var pluginName = "switcher";

    var defaults = {
        class: "switcher",
        name: "switch",
        selected: false,
        language: "en",
        disabled: false,
        copy: {
            en: {
                yes: 'yes',
                no: 'no'
            },
            fr: {
                yes: 'oui',
                no: 'non'
            }
        }
    };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, $(element).data(), options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    $.extend(Plugin.prototype, {
        init: function () {
            this.buildHtml(this.element, this.settings);
            this.bindEvents(this.element, this.settings);
        },

        bindEvents: function (el, settings) {
            if (settings.disabled) { return; }

            var self = this;
            var input = $(el).find('input');

            $(el).on('click', function () {
                self.setValue(!input.prop("checked"));
            });
        },

        buildHtml: function (el, settings) {
            var self = this;
            var $el = $(el);

            $el.addClass(settings.class);
            $el.html(
                '<input type="checkbox" name="' + settings.name + '" value="' + settings.name + '">' +
                '<div class="content clearfix">' +
                    '<div class="slider"></div>' +
                    '<span class="text textYes"></span>' +
                    '<span class="text textNo"></span>' +
                '</div>'
            );

            self.setLanguage(settings.language);

            if (settings.selected) {
                self.setValue(true);
            }

            if (settings.disabled) {
                self.setDisabled(true);
            }
        },

        setValue: function (val) {
            if (typeof val != 'boolean') {
                return console.log('The parameter need to be true or false as a boolean');
            }

            var self = this;
            var $el = $(self.element);

            self.settings.selected = val;
            $el.find('input').prop("checked", val);

            if (val === true) {
                $el.addClass('is-active');
            } else {
                $el.removeClass('is-active');
            }
        },

        getValue: function (callback) {
            var self = this;
            return callback(self.settings.selected);
        },

        setDisabled: function (val) {
            if (typeof val != 'boolean') {
                return console.log('The parameter need to be true or false as a boolean');
            }

            var self = this;
            var $el = $(self.element);

            self.settings.disabled = val;

            if (val === true) {
                $el.addClass('is-disabled');
            } else {
                $el.removeClass('is-disabled');
            }
        },

        getDisabled: function (callback) {
            var self = this;
            return callback(self.settings.disabled);
        },

        setLanguage: function (language) {
            var self = this;
            var $el = $(self.element);

            self.settings.language = language;

            $el.find('.textYes').text(self.settings.copy[language].yes);
            $el.find('.textNo').text(self.settings.copy[language].no);
        },

        getLanguage: function (callback) {
            var self = this;
            return callback(self.settings.language);
        },

        importLanguage: function (languageObj) {
            var self = this;
            self.settings.copy = languageObj;
        }
    });

    $.fn[ pluginName ] = function (options) {
        // http://stackoverflow.com/questions/12880256/jquery-plugin-creation-and-public-facing-methods
        var args = Array.prototype.slice.call(arguments, 1);
        this.each(function () {
            var item = $(this);
            var instance = item.data("plugin_" + pluginName);

            if (!instance) {
                item.data("plugin_" + pluginName, new Plugin(this, options));
            } else {
                if(typeof options === 'string') {
                    instance[options].apply(instance, args);
                }
            }
        });

        return this;
    };
})(jQuery, window, document);
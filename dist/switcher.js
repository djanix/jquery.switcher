/*
 *  jQuery Boilerplate - v3.3.4
 *  A jump-start for jQuery plugins development.
 *  http://jqueryboilerplate.com
 *
 *  Made by Zeno Rocha
 *  Under MIT License
 */

/* jquery-switcher - 1.0.0
 * Copyright (c) 2014-07-11 Janic Beauchemin - https://github.com/djanix/ */

 ;(function ($, window, document, undefined) {
    var pluginName = "switcher";

    var defaults = {
        class: "switcher",
        name: "switch",
        selected: false,
        language: "en",
        disabled: false
    };

    var copy = {
        en: {
            yes: 'yes',
            no: 'no'
        },
        fr: {
            yes: 'oui',
            no: 'non'
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

            var input = $(el).find('input');

            $(el).on('click', function () {
                $(el).toggleClass('is-active');
                input.prop("checked", !input.prop("checked"));
            });
        },

        buildHtml: function (el, settings) {
            $(el).addClass(settings.class);

            $(el).html(
                '<input type="checkbox" name="' + settings.name + '" value="' + settings.name + '">' +
                '<div class="content clearfix">' +
                    '<div class="slider"></div>' +
                    '<span class="text textYes">' + copy[settings.language].yes + '</span>' +
                    '<span class="text textNo">' + copy[settings.language].no + '</span>' +
                '</div>'
            );

            if (settings.selected) {
                this.setValue(true);
            }

            if (settings.disabled) {
                this.setDisabled(true);
            }
        },

        setValue: function (val) {
            if (typeof val != 'boolean') {
                return console.log('The parameter need to be true or false as a boolean');
            }

            $(this.element).find('input').prop("checked", val);
            this.settings.selected = val;

            if (val === true) {
                $(this.element).addClass('is-active');
            } else {
                $(this.element).removeClass('is-active');
            }
        },

        getValue: function () {
            return this.settings.selected;
        },

        setDisabled: function (val) {
            if (typeof val != 'boolean') {
                return console.log('The parameter need to be true or false as a boolean');
            }

            this.settings.disabled = val;

            if (val === true) {
                $(this.element).addClass('is-disabled');
            } else {
                $(this.element).removeClass('is-disabled');
            }
        },

        getDisabled: function () {
            return this.settings.disabled;
        },

        setLanguage: function () {

        },

        getLanguage: function () {

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
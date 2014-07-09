/*
 *  jQuery Boilerplate - v3.3.4
 *  A jump-start for jQuery plugins development.
 *  http://jqueryboilerplate.com
 *
 *  Made by Zeno Rocha
 *  Under MIT License
 */
;(function ($, window, document, undefined) {
    var pluginName = "switcher";

    var defaults = {
        customClass: "switcher",
        name: "",
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
            var checked = "";

            $(el).addClass(settings.customClass);

            if (settings.selected) {
                $(el).addClass('is-active');
                checked = 'checked';
            }

            if (settings.disabled) {
                $(el).addClass('is-disabled');
            }

            $(el).html(
                '<input type="checkbox" name="' + settings.name + '" value="' + settings.name + '" '+ checked + '>' +
                '<div class="content clearfix">' +
                    '<div class="slider"></div>' +
                    '<span class="text textYes">' + copy[settings.language].yes + '</span>' +
                    '<span class="text textNo">' + copy[settings.language].no + '</span>' +
                '</div>'
            );
        }
    });

    $.fn[ pluginName ] = function (options) {
        this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });

        return this;
    };
})(jQuery, window, document);
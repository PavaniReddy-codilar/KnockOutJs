define(['jquery', 'uiComponent', 'ko'], function ($, Component, ko) {
    'use strict';
    return Component.extend({
    defaults: {
    template: 'Codilar_KnockoutExe/knockout-test-example'
    },
    initialize: function () {
    this._super();
    }
    });
    }
    );
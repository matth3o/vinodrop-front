'use strict';

angular
    .module('vinoDropApp.modules.wine', [
        'ngResource',
        'pascalprecht.translate',
        'tmh.dynamicLocale',
        'vinoDropApp.modules.wine.controller.list'
    ]);
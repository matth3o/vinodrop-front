'use strict';

describe('Tests !!', function () {

//    it('should greet the named user', function() {
//        browser.get('http://www.angularjs.org');
//        element(by.model('yourName')).sendKeys('Julie');
//        var greeting = element(by.binding('yourName'));
//        expect(greeting.getText()).toEqual('Hello Julie!');
//    });

    describe('wine list', function () {
        beforeEach(function () {
            browser.get('#/wines');
            browser.waitForAngular();
        });

        it('should check the wine list initial status', function () {
            var element = browser.findElement(by.id('wines-list'));
            expect(element.isDisplayed()).toBe(true);
//            expect(element.getText()).toBe('An example route');
        }

        );
    });

});
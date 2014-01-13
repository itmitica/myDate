/*global define*/

define(
    [

    ],
    function () {
        'use strict';

        function AddHelperElements() {
            // strict mode prevents the use of `this` outside a constructor function
            // a constructor function starts with caps
            // addHelperElements is now AddHelperElements
            var today = this.getToday(),
                lists = this.getHelperLists(today),
                fragment = '';
            
            fragment = this.HELPER_ELEMENTS_HTML_FRAGMENT
                .split('{{year}}').join(lists.years)
                .split('{{month}}').join(lists.months)
                .split('{{day}}').join(lists.days);
    
            this.targetElement.insertAdjacentHTML('afterend', fragment);
        }
        
        return AddHelperElements;
    }
);

/*global define*/

define(
    [

    ],
    function () {
        'use strict';

        function Toggle() {
            // strict mode prevents the use of `this` outside a constructor function
            // a constructor function starts with caps
            // toggle is now Toggle
            var elemStyle = this.targetElement.style;
            
            if (elemStyle.display === 'none') {
                elemStyle.display = '';
            } else {
                elemStyle.display = 'none';
            }
        }
        
        return Toggle;
    }
);

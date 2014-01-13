/*global define*/

define(
    [

    ],
    function () {
        'use strict';

        function Init() {
            // strict mode prevents the use of `this` outside a constructor function
            // a constructor function starts with caps
            // init is now Init
            this.toggle();
            this.addHelperElements();
            this.bindUIActions();
        }
        
        return Init;
    }
);

/*global define, document*/

define(
    [

    ],
    function () {
        'use strict';

        function BindUIActions() {
            // strict mode prevents the use of `this` outside a constructor function
            // a constructor function starts with caps
            // bindUIActions is now BindUIActions
            var i,
                dateWidgets = document.getElementsByClassName('mydate');
            
            for (i = 0; i < dateWidgets.length; i = i + 1) {
                dateWidgets[i].onchange = this.dayResetter;
            }
        }
        
        return BindUIActions;
    }
);

/*global define*/

define(
    [

    ],
    function () {
        'use strict';

        return '<fieldset class="mydate">'
                    + '<select class="day">{{day}}</select>'
                    + '<select class="month">{{month}}</select>'
                    + '<select class="year">{{year}}</select>'
            + '</fieldset>';
    }
);

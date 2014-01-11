/*global console,require,requirejs*/

require.config = {
    baseUrl: 'js',
    paths: {
        jquery: '../vendor/jquery/src',
        lodash: '../vendor/lodash/modern'
    }
};

require(
    [
        "app/myDate"
    ],
    function (MyDate) {
        "use strict";
        
        var sdat = new MyDate("startDate"),
            edat = new MyDate("endDate");
    }
);
/*global define, document*/

define(
    [
        './prototype/var/months',
        './prototype/var/yearOffset',
        './prototype/var/helperFragment',
        './prototype/init',
        './prototype/toggle',
        './prototype/addHelperElements',
        './prototype/getToday',
        './prototype/getHelperLists',
        './prototype/getYearsList',
        './prototype/getMonthsList',
        './prototype/getDaysList',
        './prototype/getDaysInMonth',
        './prototype/bindUIActions',
        './prototype/dayResetter'

    ],
    function (months, yearOffset, helperFragment, init, toggle, addHelperElements, getToday, getHelperLists, getYearsList, getMonthsList, getDaysList, getDaysInMonth, bindUIActions, dayResetter) {
        'use strict';
        
        var MyDatePrototype = {
            MONTHS: months,
            YEAR_OFFSET: yearOffset,
            HELPER_ELEMENTS_HTML_FRAGMENT: helperFragment,
            init: init,
            toggle: toggle,
            addHelperElements: addHelperElements,
            getToday: getToday,
            getHelperLists: getHelperLists,
            getYearsList: getYearsList,
            getMonthsList: getMonthsList,
            getDaysList: getDaysList,
            getDaysInMonth: getDaysInMonth,
            bindUIActions: bindUIActions,
            dayResetter: dayResetter
        };

        return MyDatePrototype;
    }
);

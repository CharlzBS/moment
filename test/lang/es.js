var moment = require("../../moment");


    /**************************************************
      Spanish
     *************************************************/

exports["lang:es"] = {
    setUp : function (cb) {
        moment.lang('es');
        moment.createFromInputFallback = function () {
            throw new Error("input not handled by moment");
        };
        cb();
    },

    tearDown : function (cb) {
        moment.lang('en');
        cb();
    },

    "parse" : function (test) {
        var tests = 'enero ene._febrero feb._marzo mar._abril abr._mayo may._junio jun._julio jul._agosto ago._septiembre sep._octubre oct._noviembre nov._diciembre dic.'.split("_"), i;
        function equalTest(input, mmm, i) {
            test.equal(moment(input, mmm).month(), i, input + ' should be month ' + (i + 1));
        }
        for (i = 0; i < 12; i++) {
            tests[i] = tests[i].split(' ');
            equalTest(tests[i][0], 'MMM', i);
            equalTest(tests[i][1], 'MMM', i);
            equalTest(tests[i][0], 'MMMM', i);
            equalTest(tests[i][1], 'MMMM', i);
            equalTest(tests[i][0].toLocaleLowerCase(), 'MMMM', i);
            equalTest(tests[i][1].toLocaleLowerCase(), 'MMMM', i);
            equalTest(tests[i][0].toLocaleUpperCase(), 'MMMM', i);
            equalTest(tests[i][1].toLocaleUpperCase(), 'MMMM', i);
        }
        test.done();
    },

    "format" : function (test) {
        var a = [
                ['dddd, MMMM Do YYYY, h:mm:ss a',      'domingo, febrero 14º 2010, 3:25:50 pm'],
                ['ddd, hA',                            'dom., 3PM'],
                ['M Mo MM MMMM MMM',                   '2 2º 02 febrero feb.'],
                ['YYYY YY',                            '2010 10'],
                ['D Do DD',                            '14 14º 14'],
                ['d do dddd ddd dd',                   '0 0º domingo dom. Do'],
                ['DDD DDDo DDDD',                      '45 45º 045'],
                ['w wo ww',                            '6 6º 06'],
                ['YYYY-MMM-DD',                        '2010-feb-14'],
                ['h hh',                               '3 03'],
                ['H HH',                               '15 15'],
                ['m mm',                               '25 25'],
                ['s ss',                               '50 50'],
                ['a A',                                'pm PM'],
                ['[the] DDDo [day of the year]',       'the 45º day of the year'],
                ['L',                                  '14/02/2010'],
                ['LL',                                 '14 de febrero del 2010'],
                ['LLL',                                '14 de febrero del 2010 15:25'],
                ['LLLL',                               'domingo, 14 de febrero del 2010 15:25'],
                ['l',                                  '14/2/2010'],
                ['ll',                                 '14 de feb. del 2010'],
                ['lll',                                '14 de feb. del 2010 15:25'],
                ['llll',                               'dom., 14 de feb. del 2010 15:25']
            ],
            b = moment(new Date(2010, 1, 14, 15, 25, 50, 125)),
            i;
        for (i = 0; i < a.length; i++) {
            test.equal(b.format(a[i][0]), a[i][1], a[i][0] + ' ---> ' + a[i][1]);
        }
        test.done();
    },

    "format ordinal" : function (test) {
        test.equal(moment([2011, 0, 1]).format('DDDo'), '1º', '1º');
        test.equal(moment([2011, 0, 2]).format('DDDo'), '2º', '2º');
        test.equal(moment([2011, 0, 3]).format('DDDo'), '3º', '3º');
        test.equal(moment([2011, 0, 4]).format('DDDo'), '4º', '4º');
        test.equal(moment([2011, 0, 5]).format('DDDo'), '5º', '5º');
        test.equal(moment([2011, 0, 6]).format('DDDo'), '6º', '6º');
        test.equal(moment([2011, 0, 7]).format('DDDo'), '7º', '7º');
        test.equal(moment([2011, 0, 8]).format('DDDo'), '8º', '8º');
        test.equal(moment([2011, 0, 9]).format('DDDo'), '9º', '9º');
        test.equal(moment([2011, 0, 10]).format('DDDo'), '10º', '10º');

        test.equal(moment([2011, 0, 11]).format('DDDo'), '11º', '11º');
        test.equal(moment([2011, 0, 12]).format('DDDo'), '12º', '12º');
        test.equal(moment([2011, 0, 13]).format('DDDo'), '13º', '13º');
        test.equal(moment([2011, 0, 14]).format('DDDo'), '14º', '14º');
        test.equal(moment([2011, 0, 15]).format('DDDo'), '15º', '15º');
        test.equal(moment([2011, 0, 16]).format('DDDo'), '16º', '16º');
        test.equal(moment([2011, 0, 17]).format('DDDo'), '17º', '17º');
        test.equal(moment([2011, 0, 18]).format('DDDo'), '18º', '18º');
        test.equal(moment([2011, 0, 19]).format('DDDo'), '19º', '19º');
        test.equal(moment([2011, 0, 20]).format('DDDo'), '20º', '20º');

        test.equal(moment([2011, 0, 21]).format('DDDo'), '21º', '21º');
        test.equal(moment([2011, 0, 22]).format('DDDo'), '22º', '22º');
        test.equal(moment([2011, 0, 23]).format('DDDo'), '23º', '23º');
        test.equal(moment([2011, 0, 24]).format('DDDo'), '24º', '24º');
        test.equal(moment([2011, 0, 25]).format('DDDo'), '25º', '25º');
        test.equal(moment([2011, 0, 26]).format('DDDo'), '26º', '26º');
        test.equal(moment([2011, 0, 27]).format('DDDo'), '27º', '27º');
        test.equal(moment([2011, 0, 28]).format('DDDo'), '28º', '28º');
        test.equal(moment([2011, 0, 29]).format('DDDo'), '29º', '29º');
        test.equal(moment([2011, 0, 30]).format('DDDo'), '30º', '30º');

        test.equal(moment([2011, 0, 31]).format('DDDo'), '31º', '31º');
        test.done();
    },

    "format month" : function (test) {
        var expected = 'enero ene._febrero feb._marzo mar._abril abr._mayo may._junio jun._julio jul._agosto ago._septiembre sep._octubre oct._noviembre nov._diciembre dic.'.split("_"), i;
        for (i = 0; i < expected.length; i++) {
            test.equal(moment([2011, i, 1]).format('MMMM MMM'), expected[i], expected[i]);
        }
        test.done();
    },

    "format week" : function (test) {
        var expected = 'domingo dom. Do_lunes lun. Lu_martes mar. Ma_miércoles mié. Mi_jueves jue. Ju_viernes vie. Vi_sábado sáb. Sá'.split("_"), i;
        for (i = 0; i < expected.length; i++) {
            test.equal(moment([2011, 0, 2 + i]).format('dddd ddd dd'), expected[i], expected[i]);
        }
        test.done();
    },

    "from" : function (test) {
        var start = moment([2007, 1, 28]);
        test.equal(start.from(moment([2007, 1, 28]).add({s: 44}), true),  "unos segundos", "44 seconds = a few seconds");
        test.equal(start.from(moment([2007, 1, 28]).add({s: 45}), true),  "un minuto",      "45 seconds = a minute");
        test.equal(start.from(moment([2007, 1, 28]).add({s: 89}), true),  "un minuto",      "89 seconds = a minute");
        test.equal(start.from(moment([2007, 1, 28]).add({s: 90}), true),  "2 minutos",     "90 seconds = 2 minutes");
        test.equal(start.from(moment([2007, 1, 28]).add({m: 44}), true),  "44 minutos",    "44 minutes = 44 minutes");
        test.equal(start.from(moment([2007, 1, 28]).add({m: 45}), true),  "una hora",       "45 minutes = an hour");
        test.equal(start.from(moment([2007, 1, 28]).add({m: 89}), true),  "una hora",       "89 minutes = an hour");
        test.equal(start.from(moment([2007, 1, 28]).add({m: 90}), true),  "2 horas",       "90 minutes = 2 hours");
        test.equal(start.from(moment([2007, 1, 28]).add({h: 5}), true),   "5 horas",       "5 hours = 5 hours");
        test.equal(start.from(moment([2007, 1, 28]).add({h: 21}), true),  "21 horas",      "21 hours = 21 hours");
        test.equal(start.from(moment([2007, 1, 28]).add({h: 22}), true),  "un día",         "22 hours = a day");
        test.equal(start.from(moment([2007, 1, 28]).add({h: 35}), true),  "un día",         "35 hours = a day");
        test.equal(start.from(moment([2007, 1, 28]).add({h: 36}), true),  "2 días",        "36 hours = 2 days");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 1}), true),   "un día",         "1 day = a day");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 5}), true),   "5 días",        "5 days = 5 days");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 25}), true),  "25 días",       "25 days = 25 days");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 26}), true),  "un mes",       "26 days = a month");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 30}), true),  "un mes",       "30 days = a month");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 43}), true),  "un mes",       "43 days = a month");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 46}), true),  "2 meses",      "46 days = 2 months");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 74}), true),  "2 meses",      "75 days = 2 months");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 76}), true),  "3 meses",      "76 days = 3 months");
        test.equal(start.from(moment([2007, 1, 28]).add({M: 1}), true),   "un mes",       "1 month = a month");
        test.equal(start.from(moment([2007, 1, 28]).add({M: 5}), true),   "5 meses",      "5 months = 5 months");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 345}), true), "un año",        "345 days = a year");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 548}), true), "2 años",       "548 days = 2 years");
        test.equal(start.from(moment([2007, 1, 28]).add({y: 1}), true),   "un año",        "1 year = a year");
        test.equal(start.from(moment([2007, 1, 28]).add({y: 5}), true),   "5 años",       "5 years = 5 years");
        test.done();
    },

    "suffix" : function (test) {
        test.equal(moment(30000).from(0), "en unos segundos",  "prefix");
        test.equal(moment(0).from(30000), "hace unos segundos", "suffix");
        test.done();
    },

    "now from now" : function (test) {
        test.equal(moment().fromNow(), "hace unos segundos",  "now from now should display as in the past");
        test.done();
    },

    "fromNow" : function (test) {
        test.equal(moment().add({s: 30}).fromNow(), "en unos segundos", "en unos segundos");
        test.equal(moment().add({d: 5}).fromNow(), "en 5 días", "en 5 días");
        test.done();
    },

    "calendar day" : function (test) {

        var a = moment().hours(2).minutes(0).seconds(0);

        test.equal(moment(a).calendar(),                         "hoy a las 2:00",     "today at the same time");
        test.equal(moment(a).add({ m: 25 }).calendar(),          "hoy a las 2:25",     "Now plus 25 min");
        test.equal(moment(a).add({ h: 1 }).calendar(),           "hoy a las 3:00",     "Now plus 1 hour");
        test.equal(moment(a).add({ d: 1 }).calendar(),           "mañana a las 2:00",  "tomorrow at the same time");
        test.equal(moment(a).add({ d: 1, h : -1 }).calendar(),   "mañana a la 1:00",   "tomorrow minus 1 hour");
        test.equal(moment(a).subtract({ h: 1 }).calendar(),      "hoy a la 1:00",      "Now minus 1 hour");
        test.equal(moment(a).subtract({ d: 1 }).calendar(),      "ayer a las 2:00",    "yesterday at the same time");
        test.done();
    },

    "calendar next week" : function (test) {

        var i, m;

        for (i = 2; i < 7; i++) {
            m = moment().add({ d: i });
            test.equal(m.calendar(),       m.format('dddd [a la' + ((m.hours() !== 1) ? 's' : '') + '] LT'),  "Today + " + i + " days current time");
            m.hours(0).minutes(0).seconds(0).milliseconds(0);
            test.equal(m.calendar(),       m.format('dddd [a la' + ((m.hours() !== 1) ? 's' : '') + '] LT'),  "Today + " + i + " days beginning of day");
            m.hours(23).minutes(59).seconds(59).milliseconds(999);
            test.equal(m.calendar(),       m.format('dddd [a la' + ((m.hours() !== 1) ? 's' : '') + '] LT'),  "Today + " + i + " days end of day");
        }
        test.done();
    },

    "calendar last week" : function (test) {

        var i, m;

        for (i = 2; i < 7; i++) {
            m = moment().subtract({ d: i });
            test.equal(m.calendar(),       m.format('[el] dddd [pasado a la' + ((m.hours() !== 1) ? 's' : '') + '] LT'),  "Today - " + i + " days current time");
            m.hours(0).minutes(0).seconds(0).milliseconds(0);
            test.equal(m.calendar(),       m.format('[el] dddd [pasado a la' + ((m.hours() !== 1) ? 's' : '') + '] LT'),  "Today - " + i + " days beginning of day");
            m.hours(23).minutes(59).seconds(59).milliseconds(999);
            test.equal(m.calendar(),       m.format('[el] dddd [pasado a la' + ((m.hours() !== 1) ? 's' : '') + '] LT'),  "Today - " + i + " days end of day");
        }
        test.done();
    },

    "calendar all else" : function (test) {

        var weeksAgo = moment().subtract({ w: 1 }),
            weeksFromNow = moment().add({ w: 1 });

        test.equal(weeksAgo.calendar(),       weeksAgo.format('L'),  "1 week ago");
        test.equal(weeksFromNow.calendar(),   weeksFromNow.format('L'),  "in 1 week");

        weeksAgo = moment().subtract({ w: 2 });
        weeksFromNow = moment().add({ w: 2 });

        test.equal(weeksAgo.calendar(),       weeksAgo.format('L'),  "2 weeks ago");
        test.equal(weeksFromNow.calendar(),   weeksFromNow.format('L'),  "in 2 weeks");

        test.done();
    },

    // Monday is the first day of the week.
    // The week that contains Jan 4th is the first week of the year.

    "weeks year starting sunday" : function (test) {

        test.equal(moment([2012, 0, 1]).week(), 52, "Jan  1 2012 should be week 52");
        test.equal(moment([2012, 0, 2]).week(),  1, "Jan  2 2012 should be week 1");
        test.equal(moment([2012, 0, 8]).week(),  1, "Jan  8 2012 should be week 1");
        test.equal(moment([2012, 0, 9]).week(),  2, "Jan  9 2012 should be week 2");
        test.equal(moment([2012, 0, 15]).week(), 2, "Jan 15 2012 should be week 2");

        test.done();
    },

    "weeks year starting monday" : function (test) {

        test.equal(moment([2007, 0, 1]).week(),  1, "Jan  1 2007 should be week 1");
        test.equal(moment([2007, 0, 7]).week(),  1, "Jan  7 2007 should be week 1");
        test.equal(moment([2007, 0, 8]).week(),  2, "Jan  8 2007 should be week 2");
        test.equal(moment([2007, 0, 14]).week(), 2, "Jan 14 2007 should be week 2");
        test.equal(moment([2007, 0, 15]).week(), 3, "Jan 15 2007 should be week 3");

        test.done();
    },

    "weeks year starting tuesday" : function (test) {

        test.equal(moment([2007, 11, 31]).week(), 1, "Dec 31 2007 should be week 1");
        test.equal(moment([2008,  0,  1]).week(), 1, "Jan  1 2008 should be week 1");
        test.equal(moment([2008,  0,  6]).week(), 1, "Jan  6 2008 should be week 1");
        test.equal(moment([2008,  0,  7]).week(), 2, "Jan  7 2008 should be week 2");
        test.equal(moment([2008,  0, 13]).week(), 2, "Jan 13 2008 should be week 2");
        test.equal(moment([2008,  0, 14]).week(), 3, "Jan 14 2008 should be week 3");

        test.done();
    },

    "weeks year starting wednesday" : function (test) {

        test.equal(moment([2002, 11, 30]).week(), 1, "Dec 30 2002 should be week 1");
        test.equal(moment([2003,  0,  1]).week(), 1, "Jan  1 2003 should be week 1");
        test.equal(moment([2003,  0,  5]).week(), 1, "Jan  5 2003 should be week 1");
        test.equal(moment([2003,  0,  6]).week(), 2, "Jan  6 2003 should be week 2");
        test.equal(moment([2003,  0, 12]).week(), 2, "Jan 12 2003 should be week 2");
        test.equal(moment([2003,  0, 13]).week(), 3, "Jan 13 2003 should be week 3");

        test.done();
    },

    "weeks year starting thursday" : function (test) {

        test.equal(moment([2008, 11, 29]).week(), 1, "Dec 29 2008 should be week 1");
        test.equal(moment([2009,  0,  1]).week(), 1, "Jan  1 2009 should be week 1");
        test.equal(moment([2009,  0,  4]).week(), 1, "Jan  4 2009 should be week 1");
        test.equal(moment([2009,  0,  5]).week(), 2, "Jan  5 2009 should be week 2");
        test.equal(moment([2009,  0, 11]).week(), 2, "Jan 11 2009 should be week 2");
        test.equal(moment([2009,  0, 13]).week(), 3, "Jan 12 2009 should be week 3");

        test.done();
    },

    "weeks year starting friday" : function (test) {

        test.equal(moment([2009, 11, 28]).week(), 53, "Dec 28 2009 should be week 53");
        test.equal(moment([2010,  0,  1]).week(), 53, "Jan  1 2010 should be week 53");
        test.equal(moment([2010,  0,  3]).week(), 53, "Jan  3 2010 should be week 53");
        test.equal(moment([2010,  0,  4]).week(),  1, "Jan  4 2010 should be week 1");
        test.equal(moment([2010,  0, 10]).week(),  1, "Jan 10 2010 should be week 1");
        test.equal(moment([2010,  0, 11]).week(),  2, "Jan 11 2010 should be week 2");

        test.done();
    },

    "weeks year starting saturday" : function (test) {

        test.equal(moment([2010, 11, 27]).week(), 52, "Dec 27 2010 should be week 52");
        test.equal(moment([2011,  0,  1]).week(), 52, "Jan  1 2011 should be week 52");
        test.equal(moment([2011,  0,  2]).week(), 52, "Jan  2 2011 should be week 52");
        test.equal(moment([2011,  0,  3]).week(),  1, "Jan  3 2011 should be week 1");
        test.equal(moment([2011,  0,  9]).week(),  1, "Jan  9 2011 should be week 1");
        test.equal(moment([2011,  0, 10]).week(),  2, "Jan 10 2011 should be week 2");

        test.done();
    },

    "weeks year starting sunday formatted" : function (test) {

        test.equal(moment([2012, 0,  1]).format('w ww wo'), '52 52 52º', "Jan  1 2012 should be week 52");
        test.equal(moment([2012, 0,  2]).format('w ww wo'),   '1 01 1º', "Jan  2 2012 should be week 1");
        test.equal(moment([2012, 0,  8]).format('w ww wo'),   '1 01 1º', "Jan  8 2012 should be week 1");
        test.equal(moment([2012, 0,  9]).format('w ww wo'),   '2 02 2º', "Jan  9 2012 should be week 2");
        test.equal(moment([2012, 0, 15]).format('w ww wo'),   '2 02 2º', "Jan 15 2012 should be week 2");

        test.done();
    },

    "returns the name of the language" : function (test) {
        if (typeof module !== 'undefined' && module.exports) {
            test.equal(require('../../lang/es'), 'es', "module should export es");
        }

        test.done();
    }
};

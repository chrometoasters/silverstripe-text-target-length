if (typeof(ss) == 'undefined' || typeof(ss.i18n) == 'undefined') {
    console.error('Class ss.i18n not defined');
} else {
    ss.i18n.addDictionary('en', {
        'TextTargetLength.LengthTarget': "Length target: <b>%s\%</b> <i>%s</i>",
        'TextTargetLength.OK': "Okay",
        'TextTargetLength.KeepGoing': "Keep going!",
        'TextTargetLength.TooLong': "Too long",
        'TextTargetLength.Great': "Great!"
    });
}

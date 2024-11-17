(function () {
    'use strict';

    function startPlugin() {
        Lampa.Template.add('fontify_css', `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap');
                
                body {
                    font-family: 'Dela Gothic One', sans-serif !important;
                }
                * {
                    font-family: 'Dela Gothic One', sans-serif !important;
                }
            </style>
        `);
        $('body').append(Lampa.Template.get('fontify_css', {}, true));
    }

    if (window.appready) {
        startPlugin();
    } else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type == 'ready') startPlugin();
        });
    }
})();

(function () {
    'use strict';

    function startPlugin() {
        // Проверяем, что приложение готово
        if (!Lampa.Platform.screen('tv')) return console.log('Fontify', 'no tv');
        
        // Добавляем стиль для изменения шрифта
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
        
        // Вставляем стили в тело страницы
        $('body').append(Lampa.Template.get('fontify_css', {}, true));

        console.log('Fontify', 'Font Dela Gothic One applied to the app');
    }

    // Инициализация плагина
    if (window.appready) {
        startPlugin();
    } else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type == 'ready') startPlugin();
        });
    }
})();

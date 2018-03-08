 <script>
        $(function () {
            var $window = $(window),
                $body = $('body'),
                $note = $("#note"),
                notifyCookie = document.cookie;

            $window.scroll(function () {
                if (($window.scrollTop() > $body.height() / 2) &&
                        (notifyCookie.search('hideNote') === -1)) {
                    $note.fadeIn();
                }
                else {
                    $note.fadeOut();
                }
            });


            $('.close').on('click', function () {
                $note.fadeOut("slow");
                $window.off('scroll');
                document.cookie = 'hideNote=true; expires=' +
                                    (new Date(Date.now() + (10000 * 1)).toUTCString());
            });
        });
    </script>
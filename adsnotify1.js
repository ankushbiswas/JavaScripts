<script type="text/javascript">
        $(function () {
            var $window = $(window),
                $body = $('body'),
                $note = $("#note");

            $window.scroll(function () {
                if ($window.scrollTop() > $body.height() / 2) {
                    $note.fadeIn();
                }
                else {
                    $note.fadeOut();
                }
            });

            $('.close').on('click', function () {
                $note.fadeOut("slow");
                $window.off('scroll');
            });
        });
    </script>

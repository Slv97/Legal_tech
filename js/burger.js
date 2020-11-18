$(document).ready(function() {
    $('.head_burger').click(function(event) {
        $('.head_burger,.nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
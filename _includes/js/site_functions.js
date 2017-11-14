$(document).ready(function() {
    $('.nav-link').click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        var section = $(this).data('section');
        $('[data-section="'+section+'"]').siblings().removeClass('active');
        $('[data-section="'+section+'"]').addClass('active');
    });
});

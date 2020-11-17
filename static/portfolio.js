$("#button_project").onclick(function() {
    $('html, body').animate({
        scrollTop: $("#project_div").offset().top
    }, 2000);
});
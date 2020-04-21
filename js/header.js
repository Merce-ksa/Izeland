$(function(){

    var url = window.location.pathname

    $(".nav__options_list a").each(function() {

        if(url == (this.pathname)) {
            $(this).closest(".nav__options_list a").addClass("active active:hover")
        }
    });
});
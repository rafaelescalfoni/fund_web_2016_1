$(document).ready(function() {

    $(".painel a").on("mouseover",function(){
        $(this).addClass("active");
        $(this).addClass("rotate");
    });
    $(".painel a").on("mouseout",function(){
        $(this).removeClass("active");
        $(this).removeClass("rotate");
    });

    $(".submenu-lateral").parent().on("mouseover", function() {
        $(".submenu-lateral").show();
    });

    $(".submenu-lateral").parent().on("mouseout", function() {
        $(".submenu-lateral").hide();
    });

    $(".submenu-lateral").on("mouseover", function() {
        $(this).show();
    });

    $(".submenu-lateral").on("mouseout", function() {
        $(this).hide();
    });

});

$(document).ready(function () {

    $(".box").mouseenter(function () {
        $(this).animate({ height: '+=100px' })
        .children("#tags").find(".tag").show();

    })
    .mouseleave(function () {
        $(this).animate({ height: '-=100px' })
        .children("#tags").find(".tag").hide();
    });

});
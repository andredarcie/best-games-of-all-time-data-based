$(document).ready(function () {

    for (var g = 0; g < gamesList.GameList.length; g++) {
        $("ol").append("<li class=\"box\" id=" + g + ">" +
                        "<div class=\"data\">" + gamesList.GameList[g].data + "</div>" +
                        "<div class=\"title\">" + gamesList.GameList[g].title + "</div>" +
                        "<div class=\"score\"></div>" +
                        "<div class=\"tags\">" +
                            "<div class=\"positive\"></div>" +
                            "<div class=\"negative\"></div>" +
                        "</div></div></li>");
        
        var rank = "";

        switch (gamesList.GameList[g].rank) {
            case 1:
                rank = "✮";
                break;
            case 2:
                rank = "✮ ✮";
                break;
            case 3:
                rank = "✮ ✮ ✮";
                break;
            case 4:
                rank = "✮ ✮ ✮ ✮";
                break;
            case 5:
                rank = "✮ ✮ ✮ ✮ ✮";
                break;
        }

        $("#" + g).children(".score").text(rank);

        for (var i = 0; i < gamesList.GameList[g].positive.length; i++) {
            $("#" + g).children(".tags").children(".positive").append("<div class=\"tag\">" + " + " + gamesList.GameList[g].positive[i] + "</div>");
        }

        for (var i = 0; i < gamesList.GameList[g].negative.length; i++) {
            $("#" + g).children(".tags").children(".negative").append("<div class=\"tag\">" + " - " + gamesList.GameList[g].negative[i] + "</div>");
        }
    }

    $(".box").mouseenter(function () {
        $(this).animate({ height: '+=100px' })
        .children(".tags").find(".tag").show();

    })
    .mouseleave(function () {
        $(this).animate({ height: '-=100px' })
        .children(".tags").find(".tag").hide();
    });

});
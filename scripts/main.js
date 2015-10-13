$(document).ready(function () {
    
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/wiki/JavaScript",
        crossDomain: true,
        dataType: "text/html",
        headers: { 'Api-User-Agent': 'Example/1.0' },
        success: function (data) {
            console.log(data);
            // do something with server response data
        },
        error: function (err) {
            // handle your error logic here
        }
    });

    var year = (gamesList.GameList[0].data[6] + gamesList.GameList[0].data[7]);

    for (var g = 0; g < gamesList.GameList.length; g++) {
        
        var currentYear = (gamesList.GameList[g].data[6] + gamesList.GameList[g].data[7]);

        if (currentYear != year) {
            $("ol#beat").append("<li class=\"box year\"> - 20" + currentYear + " - </li>");
            year = currentYear;
        } 

        $("ol#beat").append("<li class=\"box games\" id=" + g + ">" +
                        "<div class=\"data\">" + gamesList.GameList[g].data + "</div>" +
                        "<div class=\"title\">" + gamesList.GameList[g].title + "</div>" +
                        "<div class=\"score\"></div>" +
                        "<div class=\"tags\">" +
                            "<div class=\"positive\"></div>" +
                            "<div class=\"negative\"></div>" +
                        "</div></div></li>");

        switch (gamesList.GameList[g].rank) {
            case 1:
                $("#" + g).children(".score").text("✮").addClass("rank-avoid");
                break;
            case 2:
                $("#" + g).children(".score").text("✮ ✮").addClass("rank-bad");
                break;
            case 3:
                $("#" + g).children(".score").text("✮ ✮ ✮").addClass("rank-good");
                break;
            case 4:
                $("#" + g).children(".score").text("✮ ✮ ✮ ✮").addClass("rank-great");
                break;
            case 5:
                $("#" + g).children(".score").text("✮ ✮ ✮ ✮ ✮").addClass("rank-masterpiece");
                break;
        }

        for (var i = 0; i < gamesList.GameList[g].positive.length; i++) {
            $("#" + g).children(".tags").children(".positive").append("<div class=\"tag\">" + " + " + gamesList.GameList[g].positive[i] + "</div>");
        }

        for (var i = 0; i < gamesList.GameList[g].negative.length; i++) {
            $("#" + g).children(".tags").children(".negative").append("<div class=\"tag\">" + " - " + gamesList.GameList[g].negative[i] + "</div>");
        }
    }

    $("#total-games").text(" - Total: " + g + " - ");

    $(".box.games").mouseenter(function () {
        $(this).animate({ height: '+=150px' })
        .children(".tags").find(".tag").show();

    })
    .mouseleave(function () {
        $(this).animate({ height: '-=150px' })
        .children(".tags").find(".tag").hide();
    });

});
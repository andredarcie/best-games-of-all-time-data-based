$(document).ready(function () {

    var gamesLength = games.length;
    var html = '';

    for (var i = 0; i < gamesLength; i++){

      html += "<article class='" + games[i].class + "'>" +
               "<h2 class='" + games[i].class + "-title' style='padding: 0; margin: 0'>" +
                    games[i].title +
                    "<span class='generation-period'> " +
                        games[i].period +
                    "</span>" +
                "</h2>" +
                "<p>" +
                  "<i class='fa fa-cube' aria-hidden='true'></i> " +
                    games[i].platforms + " - " +
                    games[i].gameList.length + " game(s)." +
                "</p>" +
                "<ol style='list-style-type: none; padding: 10px; margin: 0px' id='" + games[i].class + "-list'>";

      var gameList = games[i].gameList;

      for (var o = 0; o < gameList.length; o++){

        var game = gameList[o];

        html += "<li style='text-align: center'>" +
                "<h4 class='game-release-year'>- " + game.releaseYear +  " -</h4>" +
                "<h3 class='game-title'>" + game.title  + "</h3> " +
                "<img class='game-image' src='" + game.imageUrl + "' alt='game image'>" +
                "<p class='game-description'> \"" + game.description + "\" </p></div>" +
                "<a class='game-video' href='" + game.videoUrl + "?rel=0&autoplay=1'> <i class='fa fa-youtube-play' aria-hidden='true'></i> gameplay video </a>" +
                "<p> <i class='fa fa-users' aria-hidden='true'></i> developer: " + game.developer + "</p>" +
                "<p> <i class='fa fa-cube' aria-hidden='true'></i> platform: " + game.platform + "</p>" +
                "<p> <i class='fa fa-puzzle-piece' aria-hidden='true'></i> genre: " + game.genre + "</p>" +
                "<p> <i class='fa fa-file-text' aria-hidden='true'></i> \"best games ever\" lists: " + [ game.lists || "0" ] + "</p>" +
                "<p> <i class='fa fa-trophy' aria-hidden='true'></i> GOTY's: " + [ game.gotyNumbers || "0" ] + "</p>" +
                "</li>";

      }

      html += "</ol></article>";

    }

    $("#container").html(html);

    var stickyOffset_first = $('.first-generation-title').offset().top, stickyOffset_second = $('.second-generation-title').offset().top, stickyOffset_third = $('.third-generation-title').offset().top;
    stickyOffset_fourth = $('.fourth-generation-title').offset().top, stickyOffset_fifth = $('.fifth-generation-title').offset().top, stickyOffset_sixth = $('.sixth-generation-title').offset().top;
    stickyOffset_seventh = $('.seventh-generation-title').offset().top, stickyOffset_eighth = $('.eighth-generation-title').offset().top;

    $(window).scroll(function(){
      var sticky_first = $('.first-generation-title'), sticky_second = $('.second-generation-title'), sticky_third = $('.third-generation-title'),
          sticky_fourth = $('.fourth-generation-title'), sticky_fifth = $('.fifth-generation-title'), sticky_sixth = $('.sixth-generation-title'),
          sticky_seventh = $('.seventh-generation-title'), sticky_eighth = $('.eighth-generation-title'),
          scroll = $(window).scrollTop();

      if (scroll >= stickyOffset_first) sticky_first.addClass('fixed');
      else sticky_first.removeClass('fixed');

      if (scroll >= stickyOffset_second) sticky_second.addClass('fixed');
      else sticky_second.removeClass('fixed');

      if (scroll >= stickyOffset_third) sticky_third.addClass('fixed');
      else sticky_third.removeClass('fixed');

      if (scroll >= stickyOffset_fourth) sticky_fourth.addClass('fixed');
      else sticky_fourth.removeClass('fixed');

      if (scroll >= stickyOffset_fifth) sticky_fifth.addClass('fixed');
      else sticky_fifth.removeClass('fixed');

      if (scroll >= stickyOffset_sixth) sticky_sixth.addClass('fixed');
      else sticky_sixth.removeClass('fixed');

      if (scroll >= stickyOffset_seventh) sticky_seventh.addClass('fixed');
      else sticky_seventh.removeClass('fixed');

      if (scroll >= stickyOffset_eighth) sticky_eighth.addClass('fixed');
      else sticky_eighth.removeClass('fixed');

    });
});

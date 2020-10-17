# 🏆 Definite Best Games of All Time
> Based on data analysis

## What is this project about?
It is an open source project that aggregates multiple lists of "the best/most influential games of all times" by video game jornalists

## How does it work?
The project uses web crawler and scraping techniques to aggregate multiple lists of influential sources and combines everything into one public dataset

[Dataset on Kaggle](https://www.kaggle.com/andredarcie/list-of-video-games-considered-the-best)  
[This Project Website](https://andredarcie.github.io/best-games-of-all-times/)

## Data sources used

✅ - Already in use  
⬜️ - To-do  
*Page rank* - is based on [Alexa](https://www.alexa.com/) that quantify websites based on a combined measure of page views and unique site users (last updated on 09-27-20)

|   | Source | Url | Year | Page rank | Extracted data |
|---|------|-----|-----|-----|-----|
|✅ | [Wikipedia](https://www.wikipedia.org/) | [link](https://en.wikipedia.org/wiki/List_of_video_games_considered_the_best)  | 2020 | [#617](https://www.alexa.com/siteinfo/ign.com) |
|⬜️ | [Metacrict](https://www.metacritic.com) | [link](https://www.metacritic.com/browse/games/score/metascore/all/all/filtered) | 2020 | [#2,404](https://www.alexa.com/siteinfo/metacritic.com) |
|⬜️ | [Opencrict](https://opencritic.com) | [link](https://opencritic.com/browse/all)  | 2020 | [#45,148](https://www.alexa.com/siteinfo/opencritic.com) |
|⬜️ | [IGN](https://www.ign.com) | [link](https://www.ign.com/lists/top-100-games) | 2019 | [#617](https://www.alexa.com/siteinfo/ign.com) |
|⬜️ | [Time Magazine](https://time.com) | [link](https://time.com/4458554/best-video-games-all-time/) | 2016 | [#1,477](https://www.alexa.com/siteinfo/time.com) | [.csv](data/time-magazine.csv)
|⬜️ | [Popular Mechanics](https://www.popularmechanics.com) | [link](https://www.popularmechanics.com/culture/gaming/g134/the-100-greatest-video-games-of-all-time/) | 2019 | [#6,592](https://www.alexa.com/siteinfo/popularmechanics.com) |
|⬜️ | [Slant Magazine](https://www.slantmagazine.com) | [link](https://www.slantmagazine.com/games/the-100-best-video-games-of-all-time/) | 2020 | [#107,903](https://www.alexa.com/siteinfo/slantmagazine.com) |
|⬜️ | [Game Designing](https://www.gamedesigning.org) | [link](https://www.gamedesigning.org/popular-video-games/) | 2020 | [#41,442](https://www.alexa.com/siteinfo/gamedesigning.org) |
|⬜️ | [Esquire](https://www.esquire.com) | [link](https://www.esquire.com/lifestyle/g26572573/best-video-games-ranked/) | 2020 | [#3,607](https://www.alexa.com/siteinfo/esquire.com) |
|⬜️ | [Polygon](https://www.polygon.com) | [link](https://www.polygon.com/features/2017/12/1/16707720/the-500-best-games-of-all-time-100-1) | 2017 | [#2,097](https://www.alexa.com/siteinfo/polygon.com) |
|⬜️ | [Hiconsumption](https://hiconsumption.com) | [link](https://hiconsumption.com/best-video-games-of-all-time/) | 2019 | [#18,902](https://www.alexa.com/siteinfo/hiconsumption.com) |
|⬜️ | [Entertainment Weekly](https://ew.com) | [link](https://ew.com/article/2003/05/13/we-rank-100-greatest-videogames/) | 2003 | |
|⬜️ | [The Age](https://www.theage.com.au) | [link](https://www.theage.com.au/technology/the-50-best-games-20051006-gdm6uh.html) | 2005 | |
|⬜️ | [Yahoo Video Games](http://uk.videogames.games.yahoo.com) | [link](https://web.archive.org/web/20050801002743/http://uk.videogames.games.yahoo.com/specials/100games/) | 2005 | |
|⬜️ | [Gamespot](http://www.gamespot.com) | [link](https://web.archive.org/web/20080726155641/http://www.gamespot.com/gamespot/features/all/greatestgames/index.html) | 2008 | |
|⬜️ | [Empire](http://www.empireonline.com) | [link](https://web.archive.org/web/20110515221956/http://www.empireonline.com/100greatestgames/) | 2011 | |
|⬜️ | [FHM](http://www.fhm.com) | [link](https://web.archive.org/web/20130430073137/http://www.fhm.com/reviews/console-games/fhms-100-greatest-games-of-all-time-20090901) | 2010 | |
|⬜️ | [Jeux Video](https://www.jeuxvideo.com) | [link](https://www.jeuxvideo.com/dossier/694881/top-100-des-meilleurs-jeux-de-tous-les-temps/) | 2017 | |
|⬜️ | [Games Radar](https://www.gamesradar.com) | [link](https://www.gamesradar.com/best-games-ever/) | 2015 | |
|⬜️ | [Game Reactor](https://www.gamereactor.no) | [link](https://www.gamereactor.no/topp100) | 2011 | |
|⬜️ | [Stuff TV](https://www.stuff.tv) | [link](https://web.archive.org/web/20171015054923/https://www.stuff.tv/features/stuffs-best-games-ever-50-greatest-games-all-time) | 2017 |
|⬜️ | [G4 Tv](http://www.g4tv.com) | [link](https://web.archive.org/web/20141123063703/http://www.g4tv.com/top-100) | 2014 |
|⬜️ | [Gaming Bolt](https://gamingbolt.com) | [link](https://gamingbolt.com/top-98-greatest-video-games-ever-made) | 2013 |
|⬜️ | [The Irish Times](https://www.irishtimes.com) | [link](https://www.irishtimes.com/culture/the-50-best-videogames-of-all-time-1.1610521) | 2013 | |
|⬜️ | [HG101](http://www.hardcoregaming101.net) | [link](http://www.hardcoregaming101.net/books/hg101-presents-the-200-best-video-games-of-all-time/) | 2015 | |
|⬜️ | [The Wrap](https://www.thewrap.com) | [link](https://www.thewrap.com/the-30-best-video-games-of-all-time-photos/) | 2017 |
|⬜️ | [Power Unlimited](https://www.pu.nl) | [link](https://www.pu.nl/artikelen/feature/top-100-games-aller-tijden/) | 2018 | |
|⬜️ | [Revista GQ](https://www.revistagq.com) | [link](https://www.revistagq.com/noticias/tecnologia/galerias/los-100-mejores-videojuegos-de-la-historia/8951) | 2018 |
|⬜️ | [Game FAQs](https://gamefaqs.gamespot.com) | [link](https://gamefaqs.gamespot.com/top10/2656-the-top-10-games-of-all-time-according-to-gamefaqs-top-10) | 2010 | |
|⬜️ | [Game Informer (Readers Choice)](https://www.gameinformer.com) | [link](https://www.gameinformer.com/b/features/archive/2018/03/19/readers-choice-top-300-games-of-all-time.aspx) | 2018 | |
|⬜️ | [Game Informer](https://www.gameinformer.com) | [link](https://www.gameinformer.com/b/features/archive/2009/11/16/game-informer-s-top-100-games-of-all-time-circa-issue-100.aspx) | 2009 | |
|⬜️ | [Watch Mojo](https://watchmojo.com) | [link](https://watchmojo.com/video/id/12775) | 2014 |
|⬜️ | [The Best 100 Lists](http://www.thebest100lists.com) | [link](http://www.thebest100lists.com/best100videogames/) | 2011 | |
|⬜️ | [Guinness](https://www.guinnessworldrecords.com/) | [link](https://www.eurogamer.net/articles/guinness-lists-top-50-games-of-all-time) | 2009 | |
|⬜️ | [Action Button](http://www.actionbutton.net) | [link](http://www.actionbutton.net/?p=385) | 2009 | |
|⬜️ | [Edge](https://www.gamesradar.com/edge/) | [link](https://nintendoeverything.com/edge-ranks-the-top-100-greatest-games-2017-edition/) | 2017 | |
|⬜️ | [Game Rankings](http://www.gamerankings.com) | [link](https://www.webcitation.org/6S3NFO81u?url=http://www.gamerankings.com/browse.html) | 2014 | |
|⬜️ | [Ranker (By Users)](https://www.ranker.com) | [link](https://www.ranker.com/crowdranked-list/the-best-games-of-all-time) | 2020 | |
|⬜️ | [The Top Tens](https://www.thetoptens.com) | [link](https://www.thetoptens.com/video-games/) | 2020 | |

## How to contribute?
Working in progress...


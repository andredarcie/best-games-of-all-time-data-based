var games = [
  {
    title: "First Generation",
    period: "1972–1978",
    platforms: "Home Pong, Color TV",
    class: "first-generation",
    gameList: [
      {
        releaseYear: "1972",
        title: "Pong",
        imageUrl: "./gifs/pong.gif",
        description: "Pong (marketed as PONG) is one of the earliest arcade video games and the very first sports arcade video game. It is a table tennis sports game featuring simple two-dimensional graphics.",
        developer: "Atari Inc",
        platform: "Arcade",
        genre: "Sports",
        videoUrl: "https://www.youtube.com/embed/fiShX2pTz9A"
      }
    ]
  },
  {
    title: "Second Generation",
    period: "1976–1992",
    platforms: "Atari 2600, Atari 5200, Game & Watch",
    class: "second-generation",
    gameList: [
      {
        releaseYear: "1978",
        title: "Space Invaders",
        imageUrl: "./gifs/space-invaders.gif",
        description: "Space Invaders is one of the earliest shooting games and the aim is to defeat waves of aliens with a laser cannon to earn as many points as possible.",
        developer: "Taito",
        platform: "Arcade",
        genre: "Fixed shooter",
        videoUrl: "https://www.youtube.com/embed/437Ld_rKM2s"
      },
      {
        releaseYear: "1980",
        title: "Pac-Man",
        imageUrl: "./gifs/pac-man.gif",
        description: "The player controls Pac-Man through a maze, eating pac-dots (also called pellets or just dots).",
        developer: "Namco",
        platform: "Arcade",
        genre: "Maze",
        videoUrl: "https://www.youtube.com/embed/dScq4P5gn4A"
      },
      {
        releaseYear: "1981",
        title: "Donkey Kong",
        imageUrl: "./gifs/donkey-kong.gif",
        description: "Donkey Kong requires the player to jump between gaps and over obstacles or approaching enemies, setting the template for the future of the platform genre.",
        developer: "Nintendo",
        platform: "Arcade",
        genre: "Platformer",
        videoUrl: "https://www.youtube.com/embed/Pp2aMs38ERY"
      },
      {
        releaseYear: "1981",
        title: "Galaga",
        imageUrl: "./gifs/galaga.gif",
        description: "The objective of Galaga is to score as many points as possible by destroying insect-like enemies.",
        developer: "Namco",
        platform: "Arcade",
        genre: "Shoot 'em up",
        videoUrl: "https://www.youtube.com/embed/Cq9I7OvEaFo"
      },
      {
        releaseYear: "1982",
        title: "Ms. Pac-Man",
        imageUrl: "./gifs/ms-pac-man.gif",
        description: "The player earns points by eating pellets and avoiding ghosts.",
        developer: "General Computer Corporation",
        platform: "Arcade",
        genre: "Maze",
        videoUrl: "https://www.youtube.com/embed/c4n_6NFYvLY"
      },
      {
        releaseYear: "1978",
        title: "Robotron",
        imageUrl: "./gifs/robotron.gif",
        description: "The game is set in the year 2084 in a fictional world where robots have turned against humans in a cybernetic revolt.",
        developer: "Vid Kidz",
        platform: "Arcade",
        genre: "Multi-directional shooter",
        videoUrl: "https://www.youtube.com/embed/l800GL6NQPY"
      },
      {
        releaseYear: "1984",
        title: "Tetris",
        imageUrl: "./gifs/tetris.gif",
        description: "The objective of the game is to manipulate Tetriminos, by moving each one sideways (if the player feels the need) and rotating it by 90 degree units, with the aim of creating a horizontal line of ten units without gaps.",
        developer: "Alexey Pajitnov",
        platform: "Electronika 60",
        genre: "Puzzle",
        videoUrl: "https://www.youtube.com/embed/O0gAgQQHFcQ"
      },
      {
        releaseYear: "1984",
        title: "Punch-Out!!",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/14/Baldbull.png",
        description: "In the game, the player assumes the role of a green-haired boxer.",
        developer: "Nintendo IRD",
        platform: "Arcade",
        genre: "Sports",
        videoUrl: "https://www.youtube.com/embed/rcJneBFV9cI"
      },
      {
        releaseYear: "1984",
        title: "Elite",
        imageUrl: "http://static1.gamespot.com/uploads/original/917/9176928/2545493-1775739520-6108-.jpg",
        description: "The player initially controls the character 'Commander Jameson'.",
        developer: "David Braben",
        platform: "BBC Micro",
        genre: "Space trading and combat simulator",
        videoUrl: "https://www.youtube.com/embed/8IYQvxtOlcE"
      }
    ]
  },
  {
    title: "Third Generation",
    period: "1983–1995",
    platforms: "Atari 7800, Atari XEGS, NES, SG-1000, Master System",
    class: "third-generation",
    gameList: [
      {
        releaseYear: "1985",
        title: "Super Mario Bros.",
        imageUrl: "./gifs/super-mario-bros.gif",
        description: "It is the first of the Super Mario series of games. In Super Mario Bros., the player controls Mario and in a two-player game, a second player controls Mario's brother Luigi as he travels through the Mushroom Kingdom in order to rescue Princess Toadstool from the antagonist Bowser.",
        developer: "Nintendo R&D4",
        platform: "NES",
        genre: "Platformer",
        videoUrl: "https://www.youtube.com/embed/2ZuhSB64quY"
      },
      {
        releaseYear: "1986",
        title: "The Legend of Zelda",
        imageUrl: "./gifs/the-legend-of-zelda.gif",
        description: "The player controls Link from a flip-screen overhead perspective as he travels in the overworld, a large outdoor map with varied environments.",
        developer: "Nintendo R&D4",
        platform: "NES",
        genre: "Action-adventure",
        videoUrl: "https://www.youtube.com/embed/W0RmGNrNhHE"
      },
      {
        releaseYear: "1986",
        title: "Metroid",
        imageUrl: "./gifs/metroid.gif",
        description: "Metroid is an action-adventure game in which the player controls Samus Aran in sprite-rendered two-dimensional landscapes.",
        developer: "Nintendo R&D4",
        platform: "NES",
        genre: "Platform-adventure",
        videoUrl: "https://www.youtube.com/embed/OoZTjis-7fs"
      },
      {
        releaseYear: "1986",
        title: "OutRun",
        imageUrl: "./gifs/outrun.gif",
        description: "Out Run is a 3D third-person racing game. The player controls a car, a Ferrari Testarossa Spider, from a rear third-person perspective.",
        developer: "Sega AM2",
        platform: "Arcade",
        genre: "Racing",
        videoUrl: "https://www.youtube.com/embed/J7tZFW4WedI"
      },
      {
        releaseYear: "1987",
        title: "Contra",
        imageUrl: "./gifs/contra.gif",
        description: "In 2633, the evil Red Falcon Organization have set a base on the Galuga archipelago near New Zealand in a plot to conquer the world.",
        developer: "Konami",
        platform: "Arcade",
        genre: "Run and gun",
        videoUrl: "https://www.youtube.com/embed/kWMyoNhGHbk"
      },
      {
        releaseYear: "1987",
        title: "Double Dragon",
        imageUrl: "http://www.arcade-museum.com/images/118/1181242103248.png",
        description: "The player takes control of martial artist Billy Lee, or his twin brother Jimmy, as they fight their way into the turf of the Black Warriors gang in order to rescue Billy's love interest, Marian.",
        developer: "Technōs Japan",
        platform: "Arcade",
        genre: "Beat 'em up",
        videoUrl: "https://www.youtube.com/embed/jBkaj8QXyf4"
      },
      {
        releaseYear: "1987",
        title: "R-Type",
        imageUrl: "http://a1.mzstatic.com/us/r30/Purple2/v4/84/dd/c8/84ddc80d-229d-2c2d-ae0e-46b646217a4d/screen568x568.jpeg",
        description: "The game is made up of several sequential levels, with a boss enemy at the end of each.",
        developer: "Irem",
        platform: "Arcade",
        genre: "Shoot 'em up",
        videoUrl: "https://www.youtube.com/embed/BRFRr_SrrvM"
      },
      {
        releaseYear: "1987",
        title: "Tecmo Bowl",
        imageUrl: "http://1.bp.blogspot.com/-zj4MkHXMiUE/VrFR7zRnxlI/AAAAAAAAKo4/v1bqjy0Kl9s/s1600/TecmoBowlFamicom.jpg",
        description: "The original arcade version is distinguished by a large two-monitor cabinet, support for up to four players, and the ability to break tackles.",
        developer: "Tecmo",
        platform: "Arcade",
        genre: "Sports",
        videoUrl: "https://www.youtube.com/embed/JwAtZpcfXHk"
      },
      {
        releaseYear: "1988",
        title: "Super Mario Bros. 3",
        imageUrl: "http://www.emuparadise.me/fup/up/57076-Super_Mario_Bros._3_(Europe)-11.jpg",
        description: "The plot of Super Mario Bros. 3 is described in the instruction booklet. The Mushroom World, the setting of the game, is invaded by the Koopalings, Bowser's seven children.",
        developer: "Nintendo R&D4",
        platform: "NES",
        genre: "Platformer",
        videoUrl: "https://www.youtube.com/embed/61MNeKHnhe0"
      },
      {
        releaseYear: "1988",
        title: "Mega Man 2",
        imageUrl: "http://199.101.98.242/media/images/56220-Mega_Man_2_(USA)-2.jpg",
        description: "Mega Man 2 takes place after the original Mega Man, which is set in an unspecified year during the 21st century.",
        developer: "Nintendo R&D4",
        platform: "NES",
        genre: "Platform",
        videoUrl: "https://www.youtube.com/embed/vuJ8Qr-3_zg"
      }
    ]
  },
  {
    title: "Fourth Generation",
    period: "1987–2003",
    platforms: "Atari Lynx, SNES, Game Boy, Mega Drive/Genesis, Game Gear",
    class: "fourth-generation",
    gameList: [
      {
        releaseYear: "1990",
        title: "Super Mario World",
        imageUrl: "http://bit.blog.br/wp-content/uploads/2015/11/Banzai-Bill-em-Super-Mario-World.gif",
        description: "The game centers on the quest of Mario and Luigi to save Dinosaur Land from Bowser, the series' antagonist. The two brothers must travel across seven worlds to restore order to Dinosaur Land.",
        developer: "Nintendo EAD",
        platform: "Super NES",
        genre: "Platforming",
        videoUrl: "https://www.youtube.com/embed/AqturoCh5lM"
      },
      {
        releaseYear: "1990",
        title: "The Legend of Zelda: A Link to the Past",
        imageUrl: "http://gamehall.uol.com.br/galerias/_snes_zeldalinkpast/img_zeldalinkpast03.jpg",
        description: "At the beginning of the game, a young boy named Link is awakened by a telepathic message from Princess Zelda, who says that she is locked in the dungeon of nearby Hyrule Castle.",
        developer: "Nintendo EAD",
        platform: "Super NES",
        genre: "Action-adventure",
        videoUrl: "https://www.youtube.com/embed/xf2IO7P5DVA"
      },
      {
        releaseYear: "1990",
        title: "Street Fighter II",
        imageUrl: "https://upload.wikimedia.org/wikipedia/pt/4/46/Street_Fighter_II_(arcade)_screenshot.png",
        description: "The player engages opponents in one-on-one close quarter combat in a series of best-two-out-of-three matches.",
        developer: "Capcom",
        platform: "Arcade",
        genre: "Fighting",
        videoUrl: "https://www.youtube.com/embed/xI284D4y1q4"
      },
      {
        releaseYear: "1991",
        title: "Sonic the Hedgehog",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c1/SonicTheHedgehog1.png",
        description: "In an attempt to steal the six Chaos Emeralds and harness their power, the game's antagonist, Dr. Ivo Robotnik.",
        developer: "Sonic Team",
        platform: "Genesis/Mega Drive",
        genre: "Platform",
        videoUrl: "https://www.youtube.com/embed/dJJnxHcv1z4"
      },
      {
        releaseYear: "1991",
        title: "Final Fantasy IV",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Ff4wiki.PNG/220px-Ff4wiki.PNG",
        description: "Final Fantasy IV begins as the Red Wings are returning to Baron after attacking the city of Mysidia to steal their Water Crystal.",
        developer: "Square",
        platform: "Super Nintendo Entertainment System",
        genre: "Role-playing",
        videoUrl: "https://www.youtube.com/embed/QxodM4uWaC8"
      },
      {
        releaseYear: "1992",
        title: "Super Mario Kart",
        imageUrl: "http://s.emuparadise.org/Super%20Nintendo/Snaps/Super%20Mario%20Kart%20(U).png",
        description: "Super Mario Kart is a kart racing game featuring several single and multiplayer modes.",
        developer: "Nintendo EAD",
        platform: "Super NES",
        genre: "Kart racing",
        videoUrl: "https://www.youtube.com/embed/AlAmXXNz5ac"
      },
      {
        releaseYear: "1992",
        title: "Sonic the Hedgehog 2",
        imageUrl: "http://www.consoleclassix.com/info_img/Sonic_The_Hedgehog_2_GEN_ScreenShot3.jpg",
        description: "The game's two protagonists are Sonic the Hedgehog and his sidekick, Miles 'Tails' Prower",
        developer: "Sonic Team",
        platform: "Genesis/Mega Drive",
        genre: "Platform",
        videoUrl: "https://www.youtube.com/embed/NA-zvMyascY"
      },
      {
        releaseYear: "1993",
        title: "Doom",
        imageUrl: "http://www.unigamesity.com/wp-content/uploads//2008/11/doom_flash.jpg",
        description: "Doom, a science fiction/horror themed video game, has a background which is given in the game's instruction manual.",
        developer: "id Software",
        platform: "PC",
        genre: "First-person shooter",
        videoUrl: "https://www.youtube.com/embed/jP2jI0BVG0w"
      },
      {
        releaseYear: "1993",
        title: "Secret of Mana",
        imageUrl: "http://gamefabrique.com/storage/screenshots/snes/secret-of-mana-05.png",
        description: "The story takes place in a high fantasy world, which contains an ethereal energy source named 'mana'.",
        developer: "Square",
        platform: "Super NES",
        genre: "Action role-playing",
        videoUrl: "https://www.youtube.com/embed/yh7Z5IZ1gjI"
      },
      {
        releaseYear: "1993",
        title: "The Legend of Zelda: Link's Awakening",
        imageUrl: "http://somosnintendo.com/wp-content/uploads/2014/06/67645-Legend_of_Zelda_The_-_Links_Awakening_DX_USA_Europe_Rev_A-2-thumb.png",
        description: "After the events of Oracle of Ages and Oracle of Seasons, the hero Link travels abroad to train for further threats. A storm destroys his boat at sea, and he washes ashore on Koholint Island.",
        developer: "Nintendo EAD",
        platform: "Game Boy",
        genre: "Action-adventure",
        videoUrl: "https://www.youtube.com/embed/thdoE3ni8RM"
      },
      {
        releaseYear: "1993",
        title: "Gunstar Heroes",
        imageUrl: "http://filmesegames.com.br/wp-content/uploads/2014/01/gunstar_heroes-1.jpg",
        description: "The Western version of the game storyline is different from the Japanese version. In both storylines, there is a God-like but evil robot, Golden Silver, that has the potential to cause extreme ruin.",
        developer: "Treasure",
        platform: "Genesis/Mega Drive",
        genre: "Run and gun",
        videoUrl: "https://www.youtube.com/embed/Y5F7pzPQ24U"
      },
      {
        releaseYear: "1993",
        title: "Daytona USA",
        imageUrl: "http://2.bp.blogspot.com/-h7iSY1SeVvY/Tixz9EbBXGI/AAAAAAAAA8U/ajp6z35GLaM/s1600/20090209_daytona_usa_93_2.png",
        description: "The player is put behind the wheel of a stock car (known as the Hornet), with the choice of three tracks as well as an automatic or manual transmission.",
        developer: "Sega AM2",
        platform: "Arcade",
        genre: "Racing",
        videoUrl: "https://www.youtube.com/embed/QqfAIxEog08"
      },
      {
        releaseYear: "1994",
        title: "Super Metroid",
        imageUrl: "http://199.101.98.242/media/images/35794-Super_Metroid_(Japan,_USA)_(En,Ja)_[Hack_by_Banana_Oyaji_v1.06]_(~Metroid_Legacy)-5.jpg",
        description: "Super Metroid opens with a narrative by bounty hunter Samus Aran.",
        developer: "Nintendo R&D1",
        platform: "Super NES",
        genre: "Platform-adventure",
        videoUrl: "https://www.youtube.com/embed/RyTlrr-6ijs"
      },
      {
        releaseYear: "1994",
        title: "Final Fantasy VI",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/df/WikibattleFF6.PNG",
        description: "Final Fantasy VI takes place on a large, unnamed world. During the course of the game, its geography and landscape change due to various developments in the game's plot.",
        developer: "Square",
        platform: "Super NES",
        genre: "Role-playing",
        videoUrl: "https://www.youtube.com/embed/gILy5lTgozU"
      },
      {
        releaseYear: "1994",
        title: "EarthBound",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/a/ac/Mother_2_Summers.png",
        description: "The player starts as a young boy named Ness as he investigates a nearby meteorite crash.",
        developer: "Ape",
        platform: "Super NES",
        genre: "Role-playing",
        videoUrl: "https://www.youtube.com/embed/0GSZ1mabKLc"
      },
      {
        releaseYear: "1994",
        title: "Star Wars: TIE Fighter",
        imageUrl: "http://www.lakebit.com/wp-content/uploads/2014/12/tie-fighter-space-combat.jpg",
        description: "The game's plot begins soon after the Empire's victory on Hoth in The Empire Strikes Back.",
        developer: "Totally Games",
        platform: "PC",
        genre: "Space simulation",
        videoUrl: "https://www.youtube.com/embed/geyps1bNqEc"
      },
      {
        releaseYear: "1995",
        title: "Chrono Trigger",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d5/ChronoTriggerInside.PNG",
        description: "Chrono Trigger takes place in a world familiar to Earth, with eras such as the prehistoric age, in which primitive humans and dinosaurs share the earth.",
        developer: "Square",
        platform: "Super NES",
        genre: "Role-playing",
        videoUrl: "https://www.youtube.com/embed/QRm0ffnnZKQ"
      },
      {
        releaseYear: "1995",
        title: "Super Mario World 2: Yoshi's Island",
        imageUrl: "http://proplayers.com.br/wp-content/uploads/2015/01/Super-Mario-World-2.jpg",
        description: "Yoshi's Island is a two-dimensional side-scrolling platformer in which players help friendly dinosaurs known as Yoshis escort Baby Mario safely through 48 levels across six worlds.",
        developer: "Nintendo EAD",
        platform: "Super NES",
        genre: "Platform",
        videoUrl: "https://www.youtube.com/embed/8UZt8a91iho"
      }
    ]
  },
  {
    title: "Fifth Generation",
    period: "1993–2005",
    platforms: "Atari Jaguar, Nintendo 64, Game Boy Color, Sega Saturn, Genesis Nomad, PlayStation",
    class: "fifth-generation",
    gameList: [
      {
        releaseYear: "1996",
        title: "Super Mario 64",
        imageUrl: "http://s.glbimg.com/po/tt/f/original/2011/05/02/super_mario_64_2.jpg",
        description: "In the game, Mario explores Princess Peach's castle and must rescue her from Bowser. As one of the earlier three-dimensional (3D) platform games, Super Mario 64 is based on open world playability, degrees of freedom through all three axes in space.",
        developer: "Nintendo EAD",
        platform: "Nintendo 64",
        genre: "Platform",
        videoUrl: "https://www.youtube.com/embed/fiShX2pTz9A"
      },
      {
        releaseYear: "1996",
        title: "Pokémon Red and Blue",
        imageUrl: "https://overdrive4.files.wordpress.com/2013/07/550px-get-hm-strength-in-pokemon-red-blue-and-yellow-step-1.jpg",
        description: "The player can use his or her Pokémon to battle other Pokémon.",
        developer: "Capcom",
        platform: "Game Boy",
        genre: "Role-playing",
        videoUrl: "https://www.youtube.com/embed/Pc7vnJ0O5LU"
      },
      {
        releaseYear: "1996",
        title: "Resident Evil",
        imageUrl: "https://taragames.files.wordpress.com/2012/01/resident-evil-1fff.jpg",
        description: "The game's plot follows Chris Redfield and Jill Valentine, members of an elite task force known as S.T.A.R.S., as they investigate the outskirts of Raccoon City.",
        developer: "Capcom",
        platform: "PlayStation",
        genre: "Survival horror",
        videoUrl: "https://www.youtube.com/embed/Pc7vnJ0O5LU"
      },
      {
        releaseYear: "1996",
        title: "Tomb Raider",
        imageUrl: "http://cdn.akamai.steamstatic.com/steam/apps/224960/ss_0ef43def4b26b4a22bb92a5a82bd7b84b1fd94a7.600x338.jpg?t=1447356979",
        description: "Tomb Raider follows the exploits of Lara Croft, an English archaeologist in search of ancient treasures.",
        developer: "Core Design",
        platform: "Saturn",
        genre: "Action-adventure",
        videoUrl: "https://www.youtube.com/embed/Fpkg3rGUQFw"
      },
      {
        releaseYear: "1996",
        title: "Nights into Dreams...",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/e3/NiGHTs_into_Dreams,_Saturn_version,_Spring_Valley.jpg",
        description: "The story follows two teenagers, Claris and Elliot, who enter a dream world called Nightopia where all dreams take place.",
        developer: "Sonic Team",
        platform: "Saturn",
        genre: "Action",
        videoUrl: "https://www.youtube.com/embed/rYBe52GSZCI"
      },
      {
        releaseYear: "1997",
        title: "Final Fantasy VII",
        imageUrl: "http://vignette4.wikia.nocookie.net/finalfantasy/images/f/fc/FFVIIbattleexample.jpg/revision/latest?cb=20150205191101&path-prefix=pt-br",
        description: "The story follows Cloud Strife, a mercenary who joins the eco-terrorist rebel organization AVALANCHE to stop the world-controlling megacorporation Shinra from draining the life of the planet to use as an energy source.",
        developer: "Square",
        platform: "PlayStation",
        genre: "Role-playing",
        videoUrl: "https://www.youtube.com/embed/fsuJHTGDvpU"
      },
      {
        releaseYear: "1997",
        title: "GoldenEye 007",
        imageUrl: "http://www.gamasutra.com/db_area/images/blog/176550/goldeneye-007-nintendo-64-n64-016.jpg",
        description: "The game features a single-player campaign in which players assume the role of British Secret Intelligence Service agent James Bond.",
        developer: "Rare",
        platform: "Nintendo 64",
        genre: "First-person shooter",
        videoUrl: "https://www.youtube.com/embed/tPv8cM7__1c"
      },
      {
        releaseYear: "1997",
        title: "Castlevania: Symphony of the Night",
        imageUrl: "http://199.101.98.242/media/images/51897-Castlevania_-_Symphony_of_the_Night_(E)-7.jpg",
        description: "The objective of the game is to guide the main player character Alucard through the undead-filled castle as he sets out to defeat the vampire Dracula.",
        developer: "Konami Computer Entertainment Tokyo",
        platform: "PlayStation",
        genre: "Platform-adventure",
        videoUrl: "https://www.youtube.com/embed/Wl2qHiubafA"
      },
      {
        releaseYear: "1997",
        title: "Star Fox 64",
        imageUrl: "http://199.101.98.242/media/images/40230-Star_Fox_64_(USA)-7.jpg",
        description: "Star Fox 64 is a 3D scrolling shooter game in which the player controls one of the vehicles piloted by Fox McCloud, usually an Arwing.",
        developer: "Nintendo EAD",
        platform: "Nintendo 64",
        genre: "Platform-adventure",
        videoUrl: "https://www.youtube.com/embed/8vgfgEk-uRI"
      },
      {
        releaseYear: "1997",
        title: "Final Fantasy Tactics",
        imageUrl: "http://199.101.98.242/media/images/36903-Final_Fantasy_Tactics_[NTSC-U]-4.png",
        description: "The game's story follows Ramza Beoulve, a highborn cadet who finds himself thrust into the middle of an intricate military conflict known as The Lion War.",
        developer: "Square",
        platform: "PlayStation",
        genre: "Tactical role-playing",
        videoUrl: "https://www.youtube.com/embed/YiGBM-_rsqI"
      },
      {
        releaseYear: "1998",
        title: "The Legend of Zelda: Ocarina of Time",
        imageUrl: "http://199.101.98.242/media/images/39915-Legend_of_Zelda,_The_-_Ocarina_of_Time_(USA)-47.jpg",
        description: "In Ocarina of Time, the player controls Link in the land of Hyrule. Link sets out on a quest to stop Ganondorf.",
        developer: "Nintendo EAD",
        platform: "Nintendo 64",
        genre: "Action-adventure",
        videoUrl: "https://www.youtube.com/embed/3BUjR5MG3Ho"
      },
      {
        releaseYear: "1998",
        title: "Metal Gear Solid",
        imageUrl: "http://www.gamereviews.com/games/screenshots/10155-3.jpg",
        description: "Metal Gear Solid follows Solid Snake, a soldier who infiltrates a nuclear weapons facility to neutralize the terrorist threat from FOXHOUND.",
        developer: "Konami Computer Entertainment Japan",
        platform: "PlayStation",
        genre: "Stealth",
        videoUrl: "https://www.youtube.com/embed/wlDLFUzpYlU"
      },
      {
        releaseYear: "1998",
        title: "Starcraft",
        imageUrl: "http://static.giantbomb.com/uploads/original/0/1468/184087-starcraft.png",
        description: "Set in a fictitious timeline during the Earth's 25th century.",
        developer: "Blizzard Entertainment",
        platform: "PC",
        genre: "Real-time strategy",
        videoUrl: "https://www.youtube.com/embed/p07bQW4mAQQ"
      }
    ]
  },
  {
    title: "Sixth Generation",
    period: "1998–2013",
    platforms: "Xbox, GameCube, Game Boy Advance, Dreamcast, PlayStation 2",
    class: "sixth-generation",
    gameList: [
      {
        releaseYear: "1998",
        title: "SoulCalibur",
        imageUrl: "https://i.ytimg.com/vi/VRb437OEXsA/maxresdefault.jpg",
        description: "The mystical sword of the legends, the 'Soul Edge', ended up in the hands of the dreaded pirate Cervantes de Leon of Spain.",
        developer: "Project Soul",
        platform: "Dreamcast",
        genre: "Fighting",
        videoUrl: "https://www.youtube.com/embed/i-QsmLB35oo"
      },
      {
        releaseYear: "1998",
        title: "Half-Life",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/65/Halflife_ingame.jpg",
        description: "Dr. Gordon Freeman arrives late for work at 8:47 am in the Black Mesa Research Facility, using the advanced Black Mesa train system that leads through the facility.",
        developer: "Valve L.L.C.",
        platform: "PC",
        genre: "First-person shooter",
        videoUrl: "https://www.youtube.com/embed/eLmY0OQM_tE"
      },
      {
        releaseYear: "1998",
        title: "Grim Fandango",
        imageUrl: "http://www.grimremastered.com/img/hallway.jpg",
        description: "Grim Fandango takes place in the Land of the Dead, where recently departed souls aim to make their way to the Land of Eternal Rest.",
        developer: "LucasArts",
        platform: "PC",
        genre: "Adventure",
        videoUrl: "https://www.youtube.com/embed/kcqj0APsDsM"
      },
      {
        releaseYear: "1998",
        title: "Resident Evil 2",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/ed/Resident_Evil_2_RPD.png",
        description: "Raccoon City. Nearly all of its citizens have been transformed into zombies by an outbreak of the T-virus, a new type of biological weapon secretly developed by the pharmaceutical company Umbrella.",
        developer: "Capcom",
        platform: "PlayStation",
        genre: "Survival horror",
        videoUrl: "https://www.youtube.com/embed/Oo3Rzvp3VmE"
      },
      {
        releaseYear: "1998",
        title: "Xenogears",
        imageUrl: "https://moegamer.files.wordpress.com/2015/02/gfs_28106_2_65.jpg",
        description: "Xenogears initially takes place on Ignas, the largest continent of the Xenogears world, and the site of a centuries-long war between the nations of Aveh and Kislev.",
        developer: "Square Product Development Division 3",
        platform: "PlayStation",
        genre: "Role-playing",
        videoUrl: "https://www.youtube.com/embed/N0xGILHchUo"
      },
      {
        releaseYear: "1999",
        title: "Shenmue",
        imageUrl: "https://flemzytwopence.files.wordpress.com/2015/06/shenmue-china.jpg",
        description: "Shenmue consists of open-world 3D environments interspersed with brawler battles and quick time events.",
        developer: "Sega AM2",
        platform: "Dreamcast",
        genre: "Action-adventure",
        videoUrl: "https://www.youtube.com/embed/z_6qSi-JFE0"
      },
      {
        releaseYear: "2000",
        title: "Diablo II",
        imageUrl: "http://netdna.webdesignerdepot.com/uploads/2008/11/diablo-2-2000.jpg",
        description: "Diablo II takes place after the end of the previous game, Diablo, in the world of Sanctuary.",
        developer: "Blizzard North",
        platform: "PC",
        genre: "Action role-playing",
        videoUrl: "https://www.youtube.com/embed/o0s_sFYzpt8"
      },
      {
        releaseYear: "2000",
        title: "The Legend of Zelda: Majora's Mask",
        imageUrl: "http://i.kinja-img.com/gawker-media/image/upload/saichppxmtlolco1cemp.jpg",
        description: "The Legend of Zelda: Majora's Mask is set in Termina, a land parallel to Hyrule, the latter being the main setting of most games in the series.",
        developer: "Nintendo EAD",
        platform: "Nintendo 64",
        genre: "Action-adventure",
        videoUrl: "https://www.youtube.com/embed/bE7D8NH0Mww"
      },
      {
        releaseYear: "2000",
        title: "Deus Ex",
        imageUrl: "http://www.seganerds.com/wp-content/uploads/2014/03/06-Skies-of-Arcadia-Legends.png",
        description: "The game's story focuses around Vyse, a young air pirate in a Jules Verne-inspired fantasy world, and his friends as they attempt to stop the Valuan Empire from reviving ancient weapons with the potential to destroy the world.",
        developer: "Overworks",
        platform: "Dreamcast",
        genre: "Role-playing",
        videoUrl: "https://www.youtube.com/embed/Hk1SP-jjmzI"
      },
      {
        releaseYear: "2000",
        title: "Counter-Strike",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/02/Counter-Strike_screenshot.png",
        description: "Counter-Strike (officially abbreviated as CS) is a series of multiplayer first-person shooter video games, in which teams of terrorists and counter-terrorists.",
        developer: "Valve Corporation",
        platform: "PC",
        genre: "First-person shooter",
        videoUrl: "https://www.youtube.com/embed/lS95VQccfa8"
      },
      {
        releaseYear: "2001",
        title: "Perfect Dark",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/23/Halo_-_Combat_Evolved_(screencap).jpg",
        description: "Halo is set in the twenty-sixth century, with the player assuming the role of the Master Chief, a cybernetically enhanced supersoldier.",
        developer: "Bungie",
        platform: "Xbox",
        genre: "First-person shooter",
        videoUrl: "https://www.youtube.com/embed/1HKb4mpc6J4"
      },
      {
        releaseYear: "2001",
        title: "Skies of Arcadia",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/23/Halo_-_Combat_Evolved_(screencap).jpg",
        description: "Halo is set in the twenty-sixth century, with the player assuming the role of the Master Chief, a cybernetically enhanced supersoldier.",
        developer: "Bungie",
        platform: "Xbox",
        genre: "First-person shooter",
        videoUrl: "https://www.youtube.com/embed/1HKb4mpc6J4"
      },
      {
        releaseYear: "2001",
        title: "Halo: Combat Evolved",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/23/Halo_-_Combat_Evolved_(screencap).jpg",
        description: "Halo is set in the twenty-sixth century, with the player assuming the role of the Master Chief, a cybernetically enhanced supersoldier.",
        developer: "Bungie",
        platform: "Xbox",
        genre: "First-person shooter",
        videoUrl: "https://www.youtube.com/embed/1HKb4mpc6J4"
      },
      {
        releaseYear: "2001",
        title: "Super Smash Bros. Melee",
        imageUrl: "http://199.101.98.242/media/images/66415-Super_Smash_Brothers_Melee-8.jpg",
        description: "The game features characters from Nintendo video game franchises such as Mario, The Legend of Zelda, Star Fox, and Pokémon.",
        developer: "HAL Laboratory",
        platform: "GameCube",
        genre: "Fighting",
        videoUrl: "https://www.youtube.com/embed/D_plnbznR3M"
      },
      {
        releaseYear: "2001",
        title: "Metal Gear Solid 2: Sons of Liberty",
        imageUrl: "http://199.101.98.242/media/images/150679-Metal_Gear_Solid_2_-_Sons_of_Liberty_(USA)-5.jpg",
        description: "The story revolves around the 'Big Shell', a massive offshore clean-up facility that has been seized by a group of terrorists that call themselves 'Sons of Liberty'.",
        developer: "Konami CEJ",
        platform: "PlayStation 2",
        genre: "Action-adventure, stealth",
        videoUrl: "https://www.youtube.com/embed/QVzTEHTFteY"
      },
      {
        releaseYear: "2001",
        title: "Ico",
        imageUrl: "http://www.nonada.com.br/wp-content/uploads/2010/09/ico1.jpg",
        description: "The protagonist is a young boy named Ico who was born with horns, which his village considers a bad omen. Warriors lock him away in an abandoned fortress.",
        developer: "Team Ico",
        platform: "PlayStation 2",
        genre: "Puzzle-platformer",
        videoUrl: "https://www.youtube.com/embed/ZeI9Zc71ChA"
      },
      {
        releaseYear: "2001",
        title: "Advance Wars",
        imageUrl: "http://gamingmemoirs.co.uk/wp-content/uploads/2013/11/Advance-Wars-Screenshot.jpg?w=600",
        description: "The story involves Orange Star Army's efforts in battling the other countries' armies, where Orange Star commanding officer Andy is accused of attacking the other countries' troops for no reason.",
        developer: "Intelligent Systems",
        platform: "Game Boy Advance",
        genre: "Turn-based tactics",
        videoUrl: "https://www.youtube.com/embed/gj07BISWs0U"
      },
      {
        releaseYear: "2001",
        title: "Final Fantasy X",
        imageUrl: "https://c4.staticflickr.com/8/7680/17209565689_958ece0bf4_b.jpg",
        description: "Set in the fantasy world of Spira, the game's story revolves around a group of adventurers and their quest to defeat a rampaging monster known as Sin.",
        developer: "Square Product Development Division 1",
        platform: "PlayStation 2",
        genre: "Role-playing",
        videoUrl: "https://www.youtube.com/embed/Udv5x2r-7xg"
      },
      {
        releaseYear: "2001",
        title: "Silent Hill 2",
        imageUrl: "http://guide2games.org/wp-content/uploads/2008/03/silenthill2-4.jpg",
        description: "It centers on James Sunderland, who enters the town after receiving a letter written by his deceased wife, saying she is waiting for him in their 'special place' in Silent Hill.",
        developer: "Konami CET",
        platform: "PlayStation 2",
        genre: "Survival horror",
        videoUrl: "https://www.youtube.com/embed/mqGrIkUlP-8"
      },
      {
        releaseYear: "2001",
        title: "Grand Theft Auto III",
        imageUrl: "http://2.bp.blogspot.com/-7Lq-ICEdW54/TxRcjfq-xyI/AAAAAAAAAkM/7pi1nNF44fc/s1600/gta_3_android_hvga1.jpg",
        description: "Set within the fictional Liberty City, based on New York City, the game follows Claude after he is left for dead and quickly becomes entangled in a world of gangs, crime and corruption.",
        developer: "DMA Design",
        platform: "PlayStation 2",
        genre: "Action-adventure",
        videoUrl: "https://www.youtube.com/embed/RzI0Sqnm0mU"
      },
      {
        releaseYear: "2002",
        title: "Metroid Prime",
        imageUrl: "http://metroid.retropixel.net/games/mprime/review_05.jpg",
        description: "The player controls Link, the central protagonist of the Zelda series, who struggles with the evil king Ganondorf for control of a sacred relic known as the Triforce.",
        developer: "Retro Studios",
        platform: "GameCube",
        genre: "First-person action-adventure",
        videoUrl: "https://www.youtube.com/embed/tM2XmcFUy9E"
      },
      {
        releaseYear: "2002",
        title: "The Legend of Zelda: The Wind Waker",
        imageUrl: "https://img.delvenetworks.com/gdX9KjCLT1wmBYosX6fyt0/CZImF5ieQ2cm7tfGnguT1g/ny_.540x302.jpeg",
        description: "The player controls Link, the central protagonist of the Zelda series, who struggles with the evil king Ganondorf for control of a sacred relic known as the Triforce.",
        developer: "Nintendo EAD",
        platform: "GameCube",
        genre: "Action-adventure",
        videoUrl: "https://www.youtube.com/embed/sFi8NB2PTw4"
      },
      {
        releaseYear: "2003",
        title: "Kingdom Hearts",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/68/Kingdom_Hearts_Battle_Screenshot.png",
        description: "Kingdom Hearts is a crossover of various Disney settings based in a universe made specifically for the series.",
        developer: "Square Enix",
        platform: "PlayStation 2",
        genre: "Action role-playing",
        videoUrl: "https://www.youtube.com/embed/L2I5Q4glqbg"
      },
      {
        releaseYear: "2003",
        title: "Prince of Persia: The Sands of Time",
        imageUrl: "http://199.101.98.242/media/images/66293-Prince_of_Persia_The_Sands_of_Time-2.jpg",
        description: "The game follows an unnamed Prince whose father sacks a Maharaja's city at the instigation of its treacherous Vizier.",
        developer: "Ubisoft Montreal",
        platform: "PlayStation 2",
        genre: "Action-adventure",
        videoUrl: "https://www.youtube.com/embed/sNh-LPwUOSI"
      },
      {
        releaseYear: "2003",
        title: "Star Wars: Knights of the Old Republic",
        imageUrl: "https://lh4.ggpht.com/TKAU5s5mqBqj0mXOx0hzgKTuxYcHC8nonHJZOsJvzRS8Wi5_35hGxSeR-usdMpq_yA=h900",
        description: "Players choose from three basic character classes at the beginning of the game, and later choose from three Jedi subclasses.",
        developer: "BioWare",
        platform: "Xbox",
        genre: "Role-playing",
        videoUrl: "https://www.youtube.com/embed/irnl-3B0qE0"
      },
      {
        releaseYear: "2004",
        title: "Half-Life 2",
        imageUrl: "http://cdn.akamai.steamstatic.com/steam/apps/220/0000001864.600x338.jpg?t=1456860366",
        description: "Some years after the events of Half-Life, protagonist Gordon Freeman is woken by the enigmatic G-Man to find the world has been taken over by the alien Combine.",
        developer: "Valve Corporation",
        platform: "PC",
        genre: "First-person shooter",
        videoUrl: "https://www.youtube.com/embed/zG3weSAw6yQ"
      },
      {
        releaseYear: "2004",
        title: "World of Warcraft",
        imageUrl: "https://i.ytimg.com/vi/q7OC_9jkrlc/maxresdefault.jpg",
        description: "Players control a character avatar within a game world in third- or first-person view, exploring the landscape, fighting various monsters, completing quests, and interacting with non-player characters (NPCs) or other players.",
        developer: "Blizzard Entertainment",
        platform: "PC",
        genre: "Massively multiplayer online RPG",
        videoUrl: "https://www.youtube.com/embed/tUdV_uNKnoY"
      },
      {
        releaseYear: "2004",
        title: "Metal Gear Solid 3: Snake Eater",
        imageUrl: "https://fbsnowpalavras.files.wordpress.com/2015/10/2613731-mgs3_gp1_zps615a645e.jpeg",
        description: "Set in 1964, the story centers on FOX operative Naked Snake as he attempts to rescue a weapons designer, sabotage an experimental superweapon, and assassinate his defected former boss.",
        developer: "Konami Computer Entertainment Japan",
        platform: "PlayStation 2",
        genre: "Stealth",
        videoUrl: "https://www.youtube.com/embed/IpYS5s248Rc"
      },
      {
        releaseYear: "2004",
        title: "Grand Theft Auto: San Andreas",
        imageUrl: "http://vignette2.wikia.nocookie.net/gta/images/0/0b/Sweetekendl.jpeg/revision/latest?cb=20110205221941&path-prefix=pt",
        description: "CJ finds his old friends and family in disarray, and over the course of the game he attempts to re-establish his old gang, clashes with corrupt cops, and gradually unravels the truth behind his mother's murder.",
        developer: "Rockstar North",
        platform: "PlayStation 2",
        genre: "Third-person shooter",
        videoUrl: "https://www.youtube.com/embed/NwsEf6WjgsA"
      },
      {
        releaseYear: "2005",
        title: "Resident Evil 4",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/42/Resident_Evil_4_Ganado_village.png",
        description: "U.S. government special agent Leon S. Kennedy, who is sent on a mission to rescue Ashley Graham, the U.S. President's daughter who has been kidnapped by a sinister cult.",
        developer: "Capcom Production",
        platform: "GameCube",
        genre: "Survival horror",
        videoUrl: "https://www.youtube.com/embed/WOWI69uSonA"
      },
      {
        releaseYear: "2005",
        title: "Shadow of the Colossus",
        imageUrl: "http://s.emuparadise.org/fup/up/154336-Shadow_of_the_Colossus_(Europe,_Australia)_(En,Fr,De,Es,It)-2.jpg",
        description: "Young man named Wander who enters a forbidden land. Wander must travel across a vast expanse on horseback and defeat sixteen massive beings, known simply as colossi, in order to restore the life of a girl named Mono.",
        developer: "Team Ico",
        platform: "PlayStation 2",
        genre: "Action-adventure",
        videoUrl: "https://www.youtube.com/embed/TG7GW8V4eSA"
      },
      {
        releaseYear: "2006",
        title: "Ōkami",
        imageUrl: "http://fabricomagazine.com/wp-content/uploads/2012/12/okami-hd-9.jpg",
        description: "Set sometime in classical Japanese history, the game combines several Japanese myths, legends and folklore to tell the story of how the land was saved from darkness by the Shinto sun goddess, named Amaterasu, who took the form of a white wolf.",
        developer: "Clover Studio",
        platform: "PlayStation 2",
        genre: "Action-adventure",
        videoUrl: "https://www.youtube.com/embed/3AjQA5_k9hE"
      }
    ]
  },
  {
    title: "Seventh Generation",
    period: "2005–present",
    platforms: "Xbox 360, Wii, Nintendo DS, PlayStation 3, PlayStation Portable",
    class: "seventh-generation",
    gameList: [
      {
        releaseYear: "2007",
        title: "BioShock",
        imageUrl: "http://images.br.sftcdn.net/br/scrn/64000/64999/bioshock-13.jpg",
        description: "BioShock is set in 1960. The player guides the protagonist, Jack, after his airplane crashes in the ocean near the bathysphere terminus that leads to the underwater city of Rapture.",
        developer: "2K Boston",
        platform: "PC, PlayStation 3, Xbox 360",
        genre: "First-person shooter",
        videoUrl: "https://www.youtube.com/embed/h7XyG_ktQ5o"
      },
      {
        releaseYear: "2007",
        title: "Super Mario Galaxy",
        imageUrl: "http://www.jogoscompletostorrent.com/wp-content/uploads/2015/10/Super-Mario-Galaxy-Wii-2.jpg",
        description: "The story revolves around the protagonist, Mario, on a quest to rescue Princess Peach and save the universe from Bowser.",
        developer: "Nintendo EAD Tokyo",
        platform: "Wii",
        genre: "Platform",
        videoUrl: "https://www.youtube.com/embed/_8eJC4gIAm4"
      },
      {
        releaseYear: "2007",
        title: "Call of Duty 4: Modern Warfare",
        imageUrl: "http://1.bp.blogspot.com/-ovJeuPKQjFY/T9PD0WTSaJI/AAAAAAAAHEs/39_8uv0ozGI/s1600/Call+of+duty+4+Modern+Warfare+PC1.jpg",
        description: "The story takes place in the year 2011, where a radical leader has executed the president of an unnamed country in the Middle East, and an ultranationalist movement starts a civil war in Russia.",
        developer: "Infinity Ward",
        platform: "PC, PlayStation 3, Xbox 360",
        genre: "First-person shooter",
        videoUrl: "https://www.youtube.com/embed/_gBw7ch5IUc"
      },
      {
        releaseYear: "2007",
        title: "Portal",
        imageUrl: "http://vignette2.wikia.nocookie.net/half-life/images/7/74/Testchmb17.jpg/revision/latest?cb=20100310135327&path-prefix=en",
        description: "The game consists primarily of a series of puzzles that must be solved by teleporting the player's character and simple objects using 'the Aperture Science Handheld Portal Device', a device that can create inter-spatial portals between two flat planes.",
        developer: "Valve Corporation",
        platform: "PC, Xbox 360",
        genre: "Puzzle platformer",
        videoUrl: "https://www.youtube.com/embed/uWj781LiMtc"
      },
      {
        releaseYear: "2008",
        title: "Fallout 3",
        imageUrl: "https://bbot.org/blog-images/fallout3-2-moved.jpg",
        description: "Fallout 3 takes place in the year 2277, 116 years after the setting of Fallout, 36 years after the setting of Fallout 2 and 200 years after the nuclear apocalypse that devastated the game's world.",
        developer: "Bethesda Game Studios",
        platform: "PC, PlayStation 3, Xbox 360",
        genre: "Action role-playing",
        videoUrl: "https://www.youtube.com/embed/UC7mP73Jh7s"
      },
      {
        releaseYear: "2007",
        title: "Grand Theft Auto IV",
        imageUrl: "http://oceanofgames.com/wp-content/uploads/2014/01/Grand-Theft-Auto-IV-Complete-Edition-Free-Download.jpg",
        description: "The game is played from a third-person perspective and its world is navigated on-foot or by vehicle. Throughout the single-player mode, players play as Niko Bellic.",
        developer: "Rockstar North",
        platform: "PC, PlayStation 3, Xbox 360",
        genre: "Third-person shooter, action-adventure",
        videoUrl: "https://www.youtube.com/embed/_HBLXkPLup0"
      },
      {
        releaseYear: "2009",
        title: "Uncharted 2: Among Thieves",
        imageUrl: "http://www.mobygames.com/images/shots/l/505116-uncharted-2-among-thieves-playstation-3-screenshot-enemy-soldiers.jpg",
        description: "The story follows Nathan Drake, as he travels around the world, along with Chloe Frazer and old friends Elena Fisher and Victor Sullivan to find the fabled Cintimani Stone and Shangri-La in a race against Serbian mercenaries.",
        developer: "Naughty Dog",
        platform: "PlayStation 3, Xbox 360",
        genre: "Third-person shooter, action-adventure",
        videoUrl: "https://www.youtube.com/embed/D_p58o6RJ88"
      },
      {
        releaseYear: "2010",
        title: "Mass Effect 2",
        imageUrl: "https://i.ytimg.com/vi/dflOYJ0SGY4/maxresdefault.jpg",
        description: "The game takes place within the Milky Way galaxy during the 22nd century, where humanity is threatened by an insectoid species known as the Collectors.",
        developer: "BioWare",
        platform: "PC, PlayStation 3, Xbox 360",
        genre: "Action role-playing, third-person shooter",
        videoUrl: "https://www.youtube.com/embed/FuLFyqzh17M"
      },
      {
        releaseYear: "2010",
        title: "Super Mario Galaxy 2",
        imageUrl: "http://gamessaga.com/wp-content/uploads/2014/08/Super-Mario-Galaxy-2-game.jpg",
        description: "The story follows Mario as he pursues the Koopa King, Bowser, into outer space, where he has imprisoned Princess Peach and taken control of the universe using Power Stars.",
        developer: "Nintendo EAD Tokyo",
        platform: "Wii, Wii U",
        genre: "Platforming",
        videoUrl: "https://www.youtube.com/embed/eDX_fY3wDM0"
      },
      {
        releaseYear: "2010",
        title: "Red Dead Redemption",
        imageUrl: "http://images-cdn.moviepilot.com/images/c_scale,h_675,w_1200/t_mp_quality/k5rmlrnf7r2zijnv3jrm/red-dead-redemption-2-looks-like-this-plot-leak-wasn-t-from-rockstar-red-dead-redemptio-469426.jpg",
        description: "The game, set during the decline of the American Frontier in the year 1911, follows John Marston, a former outlaw whose wife and son are taken hostage by the government.",
        developer: "Rockstar San Diego",
        platform: "PlayStation 3, Xbox 360",
        genre: "Action-adventure",
        videoUrl: "https://www.youtube.com/embed/Q8gjm07yqpc"
      },
      {
        releaseYear: "2011",
        title: "Portal 2",
        imageUrl: "http://pcmedia.ign.com/pc/image/article/116/1162215/portal-2-20110415070040131-000.jpg",
        description: "The player controls protagonist Chell, awoken from suspended animation after many years, who must navigate the now-dilapidated Aperture Science Enrichment Center during its reconstruction by the reactivated GLaDOS, a powerful supercomputer.",
        developer: "Valve Corporation",
        platform: "PC, PlayStation 3, Xbox 360",
        genre: "Puzzle-platform game",
        videoUrl: "https://www.youtube.com/embed/xtBls2xeTFM"
      },
      {
        releaseYear: "2011",
        title: "Dark Souls",
        imageUrl: "https://i.ytimg.com/vi/-z7n61MN6YU/maxresdefault.jpg",
        description: "Dark Souls takes place in the fictional kingdom of Lordran. Players assume the role of a cursed undead character who begins a pilgrimage out of the Undead Asylum to discover the fate of the Undead.",
        developer: "FromSoftware",
        platform: "PC, PlayStation 3, Xbox 360",
        genre: "Action role-playing",
        videoUrl: "https://www.youtube.com/embed/hnn5QJljg94"
      },
      {
        releaseYear: "2011",
        title: "The Elder Scrolls V: Skyrim",
        imageUrl: "http://i11b.3djuegos.com/juegos/5029/the_elder_scrolls_v/fotos/set/the_elder_scrolls_v-1840230.jpg",
        description: "Skyrim's main story revolves around the player character and their effort to defeat Alduin the World-Eater, a dragon who is prophesied to destroy the world.",
        developer: "Bethesda Game Studios",
        platform: "PC, PlayStation 3, Xbox 360",
        genre: "Action role-playing",
        videoUrl: "https://www.youtube.com/embed/ed2IfyPNkdw"
      },
      {
        releaseYear: "2011",
        title: "Batman: Arkham City",
        imageUrl: "https://lifeculturegeekstuff.files.wordpress.com/2011/03/arkham-city1.jpg",
        description: "In the game's main storyline, Batman is incarcerated in Arkham City, a huge new super-prison enclosing the decaying urban slums of fictional Gotham City.",
        developer: "Rocksteady Studios",
        platform: "PC, PlayStation 3, Xbox 360",
        genre: "Action-adventure",
        videoUrl: "https://www.youtube.com/embed/jS2daMdVzAg"
      },
      {
        releaseYear: "2012",
        title: "Hotline Miami",
        imageUrl: "http://cdn.akamai.steamstatic.com/steam/apps/274170/ss_b2a76d2c605c7e54bf3e2ba43f835698d0bd6441.600x338.jpg?t=1466601522",
        description: "In each stage, the player navigates a building from a top-down perspective, and the goal is almost always to kill every opponent therein.",
        developer: "Dennaton Games",
        platform: "PC",
        genre: "Action",
        videoUrl: "https://www.youtube.com/watch?v=2n_BinoS1Ug&t=29s"
      },
      {
        releaseYear: "2012",
        title: "Journey",
        imageUrl: "http://static1.gamespot.com/uploads/screen_kubrick/mig/5/1/8/0/2115180-169_journey_gp_01_030112.jpg",
        description: "The player controls a robed figure in a vast desert, traveling towards a mountain in the distance.",
        developer: "Thatgamecompany",
        platform: "PlayStation 3",
        genre: "Adventure, art game",
        videoUrl: "https://www.youtube.com/embed/bkL94nKSd2M"
      },
      {
        releaseYear: "2013",
        title: "The Last of Us",
        imageUrl: "https://i.ytimg.com/vi/zbNmmK9Bhzw/maxresdefault.jpg",
        description: "Players control Joel, a man tasked with escorting a young girl named Ellie across a post-apocalyptic United States.",
        developer: "Naughty Dog",
        platform: "PlayStation 3",
        genre: "Action-adventure, survival horror",
        videoUrl: "https://www.youtube.com/embed/aUZ3MKvUjx8"
      },
      {
        releaseYear: "2013",
        title: "Grand Theft Auto V",
        imageUrl: "./gifs/gtav.gif",
        description: "Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three criminals and their efforts to commit heists while under pressure from a government agency.",
        developer: "Rockstar North",
        platform: "PC, PlayStation 3, Xbox 360",
        genre: "First-person shooter",
        videoUrl: "https://www.youtube.com/embed/2H9wiUqJiws"
      },
    ]
  },
  {
    title: "Eighth Generation",
    period: "2012–present",
    platforms: "Xbox One, Wii U, Nintendo 3DS, PlayStation 4, PlayStation Vita",
    class: "eighth-generation",
    gameList: [
      {
        releaseYear: "2015",
        title: "The Witcher 3: Wild Hunt",
        imageUrl: "http://s2.glbimg.com/jpO8JhDRRDOQtRjfgbvHTawUMiI=/695x0/s.glbimg.com/po/tt2/f/original/2015/05/28/the-witcher-3-wild-hunt-bug-experiencia-missoes-quests.jpg",
        description: "Played in a third-person perspective, players control protagonist Geralt of Rivia, a monster hunter known as a witcher, who sets out on a long journey through the Northern Kingdoms.",
        developer: "CD Projekt RED",
        platform: "PC, PS4, Xbox One",
        genre: "Action role-playing",
        videoUrl: "https://www.youtube.com/embed/N4ony2r0QFs"
      }
    ]
  }
];

var gamesList = {
  "GameList": [
    {
      data: "11/10/10",
      title: "Metal Gear Solid",
      rank: 5,
      positive: [
        "Hideo Kojima",
        "Amazing history",
        "Story Rich"
      ],
      negative: [
        "Bugs",
        "Lags",
        "Repetitive"
      ]
    },
    {
      data: "05/02/10",
      title: "Super Mario Bros",
      rank: 4,
      positive: [
        "Plot twist 2",
        "Amazing history 2"
      ],
      negative: [
        "Bugs 2",
        "Lags 2",
        "Repetitive 2"
      ]
    },
    {
      data: "08/10/16",
      title: "Chrono Trigger",
      rank: 2,
      positive: [
        "Plot twist 2",
        "Amazing history 2",
        "Story Rich 2"
      ],
      negative: [
        "Bugs 2",
        "Lags 2"
      ]
    }
  ]
}

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
        imageUrl: "https://i.ytimg.com/vi/e4VRgY3tkh0/hqdefault.jpg",
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
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/20/SpaceInvaders-Gameplay.gif",
        description: "Space Invaders is one of the earliest shooting games and the aim is to defeat waves of aliens with a laser cannon to earn as many points as possible.",
        developer: "Taito",
        platform: "Arcade",
        genre: "Fixed shooter",
        videoUrl: "https://www.youtube.com/embed/437Ld_rKM2s"
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
        imageUrl: "http://gamefabrique.com/storage/screenshots/nes/super-mario-bros-1-02.png",
        description: "It is the first of the Super Mario series of games. In Super Mario Bros., the player controls Mario and in a two-player game, a second player controls Mario's brother Luigi as he travels through the Mushroom Kingdom in order to rescue Princess Toadstool from the antagonist Bowser.",
        developer: "Nintendo R&D4",
        platform: "NES",
        genre: "Platformer",
        videoUrl: "https://www.youtube.com/embed/2ZuhSB64quY"
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
        title: "Skies of Arcadia",
        imageUrl: "http://www.seganerds.com/wp-content/uploads/2014/03/06-Skies-of-Arcadia-Legends.png",
        description: "The game's story focuses around Vyse, a young air pirate in a Jules Verne-inspired fantasy world, and his friends as they attempt to stop the Valuan Empire from reviving ancient weapons with the potential to destroy the world.",
        developer: "Overworks",
        platform: "Dreamcast",
        genre: "Role-playing",
        videoUrl: "https://www.youtube.com/embed/Hk1SP-jjmzI"
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
        imageUrl: "http://3.bp.blogspot.com/-sEbzOGIGV8Y/UpKCtQlyWWI/AAAAAAAAAOE/xd0jtE1i6fk/s1600/gta+v.png",
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

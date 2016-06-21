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
    class: "sixth-generation",
    gameList: [
      {
        releaseYear: "2001",
        title: "Metal Gear Solid 2: Sons of Liberty",
        imageUrl: "http://199.101.98.242/media/images/150679-Metal_Gear_Solid_2_-_Sons_of_Liberty_(USA)-5.jpg",
        description: "The story revolves around the 'Big Shell', a massive offshore clean-up facility that has been seized by a group of terrorists that call themselves 'Sons of Liberty'.",
        developer: "Konami CEJ",
        platform: "PlayStation 2",
        genre: "Action-adventure, stealth",
        videoUrl: "https://www.youtube.com/embed/QVzTEHTFteY"
      }
    ]
  },
  {
    title: "Seventh Generation",
    period: "2005–present",
    class: "seventh-generation",
    gameList: [
      {
        releaseYear: "2007",
        title: "Call of Duty 4: Modern Warfare",
        imageUrl: "http://1.bp.blogspot.com/-ovJeuPKQjFY/T9PD0WTSaJI/AAAAAAAAHEs/39_8uv0ozGI/s1600/Call+of+duty+4+Modern+Warfare+PC1.jpg",
        description: "The story takes place in the year 2011, where a radical leader has executed the president of an unnamed country in the Middle East, and an ultranationalist movement starts a civil war in Russia.",
        developer: "Infinity Ward",
        platform: "PC, PlayStation 3, Xbox 360",
        genre: "First-person shooter",
        videoUrl: "https://www.youtube.com/embed/_gBw7ch5IUc"
      }
    ]
  },
  {
    title: "Eighth Generation",
    period: "2012–present",
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

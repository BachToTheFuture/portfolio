
// website data
let data = [
  {
    'intro': 'Hi! My name is',
    'name': 'Bach Nguyen',
    'color': '216, 232, 251',
    'desc': 'Developer & music nerd',
    'artist': 'This is me !',
    'links': [
      {'icon': 'github', 'text': 'Github', 'link': 'https://github.com/BachToTheFuture'},
      {'icon': 'linkedin-square', 'text': 'LinkedIn', 'link': 'https://www.linkedin.com/in/bach2thefuture/'},
      {'icon': 'file-text', 'text': 'Resume', 'link': 'assets/Resume2023.pdf'},
    ]
  },
  {
    'intro': 'Here are some of my',
    'name': 'Experiences',
    'color': '216, 232, 251',
    'desc': 'click the center button to see more!',
    'links': [
      {'icon': 'github', 'text': 'Github', 'link': 'https://github.com/BachToTheFuture'},
      {'icon': 'linkedin-square', 'text': 'LinkedIn', 'link': 'https://www.linkedin.com/in/bach2thefuture/'},
      {'icon': 'file-text', 'text': 'Resume', 'link': 'assets/Resume2023.pdf'},
    ],
    'submenu': [
      {
        'intro': "Through my experiences, I gained many",
        'name': 'Proficiencies',
        'color': '250, 242, 225',
        'desc': 'click the center button to see more!',
        'links': [],
        'submenu': [
          {
            'intro': "Two of my first languages were",
            'name': 'C and Cpp',
            'color': '241, 255, 219',
            'desc': 'used for infra work in internships and compilers project',
            'links': [{'icon': 'code', 'text': '20000+ lines of code'}],
          },
          {
            'intro': "I like to prototype ideas in",
            'name': 'Python',
            'color': '241, 255, 219',
            'desc': 'used for playing around with NLP and ML models',
            'links': [{'icon': 'code', 'text': '20000+ lines of code'}],
          },
          {
            'intro': "I like to dabble in UI design so I know",
            'name': 'JS and Typescript',
            'color': '241, 255, 219',
            'desc': 'used for internship projects and anything graphics related',
            'links': [{'icon': 'code', 'text': '10000+ lines of code'}],
          },
          {
            'intro': "My first formally taught CS class used",
            'name': 'Java',
            'color': '241, 255, 219',
            'desc': 'used in high school robotics competitions',
            'links': [{'icon': 'code', 'text': '2000+ lines of code'}],
          },
          {
            'intro': "My first experience with 3D graphics was through",
            'name': 'Lua',
            'color': '241, 255, 219',
            'desc': 'used for 3D procgen experiments in Roblox',
            'links': [{'icon': 'code', 'text': '2000+ lines of code'}],
          },
          {
            'intro': "The language that influenced my compiler project",
            'name': 'OCaml',
            'color': '241, 255, 219',
            'desc': 'learned in Harvard CS51 class',
            'links': [{'icon': 'code', 'text': '1000+ lines of code'}],
          },
        ]
      },
      {
        'intro': "Last summer, I was a",
        'name': 'SWE intern at Google',
        'color': '250, 242, 225',
        'desc': 'worked on a demo application for the Cloud AI team.',
        'links': [
          {'icon': 'external-link', 'text': 'More about the team', 'link': 'https://cloud.google.com/vision/docs/ocr'},
        ]
      },
      {
        'intro': "This fall semester, I was an",
        'name': 'RA for LIT Lab',
        'color': '250, 242, 225',
        'desc': 'worked on a website where users can collect multimodal data',
        'links': [
          {'icon': 'external-link', 'text': 'Project site', 'link': 'https://mmla.gse.harvard.edu/'},
        ]
      },
      {
        'intro': "Last summer, I was a",
        'name': 'STEP intern at Google',
        'color': '250, 242, 225',
        'desc': 'worked on backend infra and large data',
        'links': [
          {'icon': 'external-link', 'text': 'Project site', 'link': 'https://mmla.gse.harvard.edu/'},
        ]
      },
      {
        'intro': "In my freshman year, I was part of",
        'name': 'Tech for Social Good',
        'color': '250, 242, 225',
        'desc': 'developed API and trained an ML language model for clients',
        'links': [
          {'icon': 'external-link', 'text': 'HCS T4SG site', 'link': 'https://socialgood.hcs.harvard.edu/'},
        ]
      },
      {
        'intro': "Throughout high school, I contributed to",
        'name': 'Haiku OS',
        'color': '250, 242, 225',
        'desc': 'made code contributions to an open source project',
        'links': [
          {'icon': 'external-link', 'text': 'Support Haiku OS!', 'link': 'https://www.haiku-os.org/'},
          {'icon': 'code', 'text': 'See my contributions', 'link': 'https://github.com/BachToTheFuture?tab=overview&from=2018-12-01&to=2018-12-31'}
        ]
      },
    ]
  },
  {
    'intro': "Take a look at my",
    'name': 'Projects',
    'desc': 'click the center button to see more!',
    'color': '216, 232, 251',
    'links': [
      {'icon': 'github', 'text': 'Github', 'link': 'https://github.com/BachToTheFuture'},
      {'icon': 'linkedin-square', 'text': 'LinkedIn', 'link': 'https://www.linkedin.com/in/bach2thefuture/'},
      {'icon': 'file-text', 'text': 'Resume', 'link': 'assets/Resume2023.pdf'},
    ],
    'submenu': [
      {
        'intro': "For fun, I made",
        'name': 'Topaz',
        'color': '195, 201, 235',
        'desc': 'a compiled language inspired by Smalltalk and OCaml',
        'links': [
          {'icon': 'github', 'text': 'Project link', 'link': 'https://github.com/BachToTheFuture/topaz'},
        ]
      },
      {
        'intro': "For the Harvard CS50 final project, I created",
        'name': 'Mysti',
        'color': '195, 201, 235',
        'desc': 'a file organizer app (think email filters but for files)',
        'links': [
          {'icon': 'github', 'text': 'Project link', 'link': 'https://github.com/BachToTheFuture/Mysti'},
        ]
      },
      {
        'intro': "During the pandemic, I created",
        'name': 'Beanbots',
        'color': '195, 201, 235',
        'desc': 'an online practice playground for FTC robot competitions',
        'links': [
          {'icon': 'github', 'text': 'Project link', 'link': 'https://github.com/BachToTheFuture/Beanbots'},
        ]
      },
      {
        'intro': "For a hackathon, me and my friends made",
        'name': 'Rationality',
        'color': '195, 201, 235',
        'desc': 'you plan the meals and the app will create a grocery list for you',
        'links': [
          {'icon': 'github', 'text': 'Project link', 'link': 'https://github.com/BachToTheFuture/Rationality'},
        ]
      },
      {
        'intro': "Me and my friends made",
        'name': 'Emission',
        'color': '195, 201, 235',
        'desc': 'gamifying daily walks to reduce carbon emission and footprint',
        'links': [
          {'icon': 'github', 'text': 'Project link', 'link': 'https://github.com/BachToTheFuture/emission'},
        ]
      },
      {
        'intro': "Me and my friends made",
        'name': 'Intersection',
        'color': '195, 201, 235',
        'desc': 'a social space for talking to those with shared identities and experiences',
        'links': [
          {'icon': 'github', 'text': 'Project link', 'link': 'https://github.com/BachToTheFuture/Intersection'},
        ]
      },
      {
        'intro': "Just for fun, I made",
        'name': 'p5js art',
        'color': '195, 201, 235',
        'desc': 'some procedurally generated art that i made using p5js',
        'links': [
          {'icon': 'github', 'text': '"The Porcupine"', 'link': 'https://github.com/BachToTheFuture/p5js-art'},
          {'icon': 'github', 'text': '"Unknown Pleasures"', 'link': 'https://github.com/BachToTheFuture/p5js-art2'},
        ]
      }
    ]
  },
  {
    'intro': "If interested, here's my",
    'name': 'Piano portfolio',
    'desc': 'click the center button for more!',
    'color': '216, 232, 251',
    'links': [
      {'icon': 'github', 'text': 'Github', 'link': 'https://github.com/BachToTheFuture'},
      {'icon': 'linkedin-square', 'text': 'LinkedIn', 'link': 'https://www.linkedin.com/in/bach2thefuture/'},
      {'icon': 'file-text', 'text': 'Resume', 'link': 'assets/Resume2023.pdf'},
    ],
    'submenu': [
      {
        'intro': "One of my favorite composers is",
        'name': 'Chopin',
        'color': '255, 210, 207',
        'desc': "listen to me playing 'Nocturne op. 48, no. 1'",
        'artist': 'Performed by me!',
        'links': [
          {'icon': 'youtube-play', 'text': 'Video link', 'link': 'https://youtu.be/FU4ftrCH5DQ'},
        ]
      },
      {
        'intro': "I also really like",
        'name': 'Liszt',
        'color': '255, 210, 207',
        'desc': "here are some pieces I played:",
        'artist': 'Performed by me!',
        'links': [
          {'icon': 'youtube-play', 'text': 'Hungarian Rhapsody no. 2', 'link': 'https://youtu.be/0yGbzDQZwnc'},
          {'icon': 'youtube-play', 'text': 'Les Cloches de Geneve', 'link': 'https://youtu.be/-WEh3vpgksk'},
        ]
      },
      {
        'intro': "I also play some",
        'name': 'Beethoven',
        'color': '255, 210, 207',
        'desc': "here are some pieces I played:",
        'artist': 'Performed by me!',
        'links': [
          {'icon': 'youtube-play', 'text': 'Appasionata', 'link': 'https://youtu.be/l25IXxxtgfk'},
          {'icon': 'youtube-play', 'text': 'Moonlight', 'link': 'https://youtu.be/KPBWq4A9E_E'},
        ]
      },
      {
        'intro': "This is one of my favorite piano pieces:",
        'name': 'Balakirev',
        'color': '255, 210, 207',
        'desc': "listen to me play 'The Lark'",
        'artist': 'Performed by me!',
        'links': [
          {'icon': 'youtube-play', 'text': 'Video link', 'link': 'https://youtu.be/t1tDSqb8woY'},
        ]
      },
      {
        'intro': "I also like impressionists like",
        'name': 'Ravel',
        'color': '255, 210, 207',
        'desc': "listen to me play 'Boat on the Ocean' from Mirroirs",
        'artist': 'Performed by me!',
        'links': [
          {'icon': 'youtube-play', 'text': 'Video link', 'link': 'https://youtu.be/CFx51T1Le_k'},
        ]
      },
    ]
  },
  {
    'intro': "If you have some time",
    'name': 'Get to know me!',
    'desc': 'click the center button for some fun facts :)',
    'color': '216, 232, 251',
    'links': [
      {'icon': 'github', 'text': 'Github', 'link': 'https://github.com/BachToTheFuture'},
      {'icon': 'linkedin-square', 'text': 'LinkedIn', 'link': 'https://www.linkedin.com/in/bach2thefuture/'},
      {'icon': 'file-text', 'text': 'Resume', 'link': 'assets/Resume2023.pdf'},
    ],
    'submenu': [
      {
        'intro': "FAQ: Were you named after JS Bach?",
        'name': 'Name etymology',
        'color': '208, 242, 230',
        'desc': 'No :( but it has a cool meaning in Vietnamese!',
        'links': [
          {
            'icon': 'external-link', 'text': 'First name meaning', 'link': 'https://en.wiktionary.org/wiki/%E6%9F%8F'
          },
          {
            'icon': 'external-link', 'text': 'Middle name meaning', 'link': 'https://en.wiktionary.org/wiki/%E6%98%A5'
          }
        ]
      },
      {
        'intro': "I was a bit of a",
        'name': 'Nomadic child',
        'color': '208, 242, 230',
        'desc': 'moved between 3 countries, 3 US states in my childhood!',
        'links': [
          {
            'icon': 'gamepad', 'text': 'Play GeoGuessr', 'link': 'https://www.geoguessr.com/'
          },
        ]
      },
      {
        'intro': "Here are some of my",
        'name': 'Hobbies',
        'color': '208, 242, 230',
        'desc': 'I like to code, produce music, and make short films :)',
        'links': [
          {
            'icon': 'github', 'text': 'Github repo', 'link': 'https://github.com/BachToTheFuture',
          },
          {
            'icon': 'soundcloud', 'text': 'Soundcloud', 'link': '404.html',
          },
          {
            'icon': 'youtube-play', 'text': 'Films', 'link': '404.html'
          },
        ]
      },
      {
        'intro': "Before you go...",
        'name': "Let's stay in touch!",
        'color': '208, 242, 230',
        'desc': "I don't use social media so here's my email :)",
        'links': [
          {
            'icon': 'envelope', 'text': 'Email me', 'link': 'mailto:bxnguyen@college.harvard.edu',
          },
        ]
      },
    ]
  }
]
// const imgAicExplorer = "./images/gatsby-astronaut.png"
// import { imgAicExplorer } from "./images/gatsby-astronaut.png"
// import imgAicExplorer from "./images/gatsby-astronaut.png"
// const imgStoryplan = "./images/gatsby-astronaut.png"
// const imgSketchbook = "./images/gatsby-astronaut.png"
// const imgSteamNavigator = "./images/gatsby-astronaut.png"
// const imgGoogleNews = "./images/gatsby-astronaut.png"
// const imgPaperTrader = "./images/gatsby-astronaut.png"
// const imgJournalTool = "./images/gatsby-astronaut.png"
// const imgTheValley = "./images/gatsby-astronaut.png"
// const imgFriendFinder = "./images/gatsby-astronaut.png"
// const imgPostIt = "./images/gatsby-astronaut.png"
// const imgFrazetta = "./images/gatsby-astronaut.png"
// const imgArtSmart = "./images/gatsby-astronaut.png"
// const imgCmd = "./images/gatsby-astronaut.png"

// import imgAicExplorer from './images/gatsby-astronaut.png'
// import imgStoryplan from './images/gatsby-astronaut.png'
// import imgSketchbook from './images/gatsby-astronaut.png'
// import imgSteamNavigator from './images/gatsby-astronaut.png'
// import imgGoogleNews from './images/gatsby-astronaut.png'
// import imgPaperTrader from './images/gatsby-astronaut.png'
// import imgJournalTool from './images/gatsby-astronaut.png'
// import imgTheValley from './images/gatsby-astronaut.png'
// import imgFriendFinder from './images/gatsby-astronaut.png'
// import imgPostIt from './images/gatsby-astronaut.png'
// import imgFrazetta from './images/gatsby-astronaut.png'
// import imgArtSmart from './images/gatsby-astronaut.png'
// import imgCmd from './images/gatsby-astronaut.png'

// import imgAicExplorer from './images/app_aic_explorer.jpg'
// import imgStoryplan from './images/app_storyplan.jpg'
// import imgSketchbook from './images/app_sketchbook.jpg'
// import imgSteamNavigator from './images/app_steam_navigator.jpg'
// import imgGoogleNews from './images/app_google_news.jpg'
// import imgPaperTrader from './images/app_paper_trader.jpg'
// import imgJournalTool from './images/app_journal_tool.jpg'
// import imgTheValley from './images/app_the_valley.jpg'
// import imgFriendFinder from './images/app_friend_finder.jpg'
// import imgPostIt from './images/app_post_it.jpg'
// import imgFrazetta from './images/app_frazetta.jpg'
// import imgArtSmart from './images/app_artsmart.jpg'
// import imgCmd from './images/app_cmd.jpg'

module.exports = {
  // Unique Google Analytics tracking number
  gaTrackingID: 'UA-6842596-2',

  profileText: {
    name: "Mitul Mistry",
    title: "Full Stack Web Developer",
    subtitle: "I'm a software engineer with experience in Rails and React.",
    bio: [
      "I take web applications from design to implementation and I'm comfortable working in both the front and back end.",
      "I have a background in object oriented programming, as well as visual design, and I use my broad experience to bring applications to life."
    ]
  },

  socialMedia: {
    github: "https://github.com/MitulMistry",
    linkedin: "https://www.linkedin.com/in/mitulmistry",
    linkedinUser: "MitulMistry",
    twitter: "https://twitter.com/Jackal_MM",
    email: "MitulMistryDev@gmail.com",
    blog: "http://mitulmistry.github.io/"
  },

  techSkillsText: {
    "Languages": "JavaScript, Ruby, Python, HTML/CSS/Sass, C",
    "Frameworks": "Ruby on Rails, React, AngularJS, Django, Flask",
    "Databases": "PostgreSQL, SQLite",
    "Tools": "jQuery, ActiveRecord, Git, Github, Bootstrap, Heroku, Webpack",
    "Concepts": "Object-oriented programming, AJAX, RESTful architecture/APIs",
    "Software": "Linux, Photoshop, Illustrator"
  }

  // featuredProjects: [
  //   {
  //     title: "Art Institute Explorer",
  //     image: imgAicExplorer,
  //     description: "A full stack application to explore artworks from the Art Institute of Chicago. Users can search through the museum's catalog, save artworks to their account, and add artworks to custom collections.",
  //     bullets: [
  //       "Integrated external API with a Rails back end and PostgreSQL database.",
  //       "Designed and implemented a React front end to interact with Rails API.",
  //       "Used Redux to manage state for the front end."
  //     ],
  //     url: "https://aic-explorer.herokuapp.com/",
  //     github: "https://github.com/MitulMistry/art-institute-explorer"
  //   },
  //   {
  //     title: "Storyplan",
  //     image: imgStoryplan,
  //     description: "A web application for writers to plan and share their work-in-progress stories. Users can create stories, chapters, and characters, and differentiate them using genres and target audiences.",
  //     bullets: [
  //       "Built application with Ruby on Rails using MVC pattern and RESTful routes for resources.",
  //       "Implemented Devise gem and Facebook OmniAuth for user registration and authentication.",
  //       "Created front end with Rails templates and partials, then styled with Bootstrap (HTML, CSS, ERB).",
  //       "Wrote comprehensive test suite including unit and integration tests with RSpec and Capybara."
  //     ],
  //     url: "https://rails-storyplan.herokuapp.com/",
  //     github: "https://github.com/MitulMistry/rails-storyplan"
  //   },
  //   {
  //     title: "The Valley",
  //     image: imgTheValley,
  //     description: "An HTML5 text adventure system using JavaScript and Phaser CE",
  //     bullets: [
  //       "Implemented a text display system using HTML5 Canvas via Phaser, then migrated system to React.",
  //       "Integrated Redux store with JavaScript game management classes to maintain and update game state and data.",
  //       "Designed a story production pipeline for CSV to JSON files which are then parsed in game."
  //     ],
  //     url: "https://the-valley.herokuapp.com/",
  //     github: "https://github.com/MitulMistry/the-valley-react"
  //   },
  //   {
  //     title: "Paper Trader",
  //     image: imgPaperTrader,
  //     description: "A Flask application to practice trading stocks using the IEX Cloud API. Users can buy and sell stocks based on current market prices.",
  //     bullets: [
  //       "Developed a Flask back end using Python to manage user authentication, track transactions, calculate gains and losses, and store data using PostgreSQL.",
  //       "Leveraged external APIs including IEX to get real time stock data as well as News API to provide related news articles for stock research."
  //     ],
  //     url: "https://flask-paper-trader.herokuapp.com/",
  //     github: "https://github.com/MitulMistry/paper-trader"
  //   },
  //   {
  //     title: "Journal Tool",
  //     image: imgJournalTool,
  //     description: "A Django application for making journal entries and tracking mood. Users can keep track of events, activities, and cognitive distortions, and leverage associations between them.",
  //     bullets: [
  //       "Used a combination of Django templates, JavaScript, and internal APIs to create web pages with asynchronous functionality.",
  //       "Developed a Django back end to manage user authentication, process models, and calculate statistics for journal entries."
  //     ],
  //     url: "https://journal-tool.herokuapp.com/",
  //     github: "https://github.com/MitulMistry/journal-tool"
  //   },
  //   {
  //     title: "Steam Navigator",
  //     image: imgSteamNavigator,
  //     description: "A front end AngularJS web application for viewing the Steam Store. Displays games for currently trending categories and in-depth storefront info for individual games.",
  //     bullets: [
  //       "Developed a Node and Express back end to interact with external API.",
  //       "Implemented AngularJS Material for layout and styling."
  //     ],
  //     url: "https://steam-navigator.herokuapp.com/",
  //     github: "https://github.com/MitulMistry/steam-navigator"
  //   },
  //   {
  //     title: "React Google News",
  //     image: imgGoogleNews,
  //     description: "A React front end application using the Google News API. Displays news stories from different sources in a reflowable card grid structure.",
  //     bullets: [
  //       "Developed a Node and Express back end to interact with external API.",
  //       "Used Webpack with custom configurations to build project."
  //     ],
  //     url: "https://react-google-news.herokuapp.com/",
  //     github: "https://github.com/MitulMistry/react-google-news"
  //   },
  //   {
  //     title: "Sketchbook",
  //     image: imgSketchbook,
  //     description: "A Rails/AngularJS web application for artists to curate and share their sketches. Users can upload images and filter them based on tags.",
  //     bullets: [
  //       "Developed a Rails back end configured as an API using ActiveModel Serializers.",
  //       "Implemented Active Storage and integrated with AngularJS to handle image uploading, along with AWS S3 for production."
  //     ],
  //     url: "https://angular-sketchbook.herokuapp.com/",
  //     github: "https://github.com/MitulMistry/sketchbook"
  //   }
  // ],

  // projectCards: [
  //   {
  //     title: "Post-It",
  //     image: imgPostIt,
  //     description: "A Rails/jQuery web application to make and sort notes. Users can load, create, and modify notes without page reloads. Uses jQuery to communicate with a Rails JSON API via AJAX.",
  //     url: "https://rails-post-it.herokuapp.com/",
  //     github: "https://github.com/MitulMistry/post-it"
  //   },
  //   {
  //     title: "Friend Finder",
  //     image: imgFriendFinder,
  //     description: "A social networking application built with Rails. Users can be discovered based on interests and send messages to each other to form conversations.",
  //     github: "https://github.com/MitulMistry/friend-finder"
  //   },
  //   {
  //     title: "Steam Top Sellers CLI Gem",
  //     image: imgCmd,
  //     description: "A Ruby command line application to get the current top selling games on Steam. Users can list currently top selling games and get more info on individuals. Queries Steam API and parses JSON responses into custom classes.",
  //     github: "https://github.com/MitulMistry/steam-top-sellers-cli-gem"
  //   }
  // ],
  
  // webDesigns: [
  //   {
  //     title: "Frank Frazetta",
  //     image: imgFrazetta,
  //     description: "Front page for fantasy illustration website",
  //     url: "https://mitulmistry.github.io/frazetta-front-page/",
  //     github: "https://github.com/MitulMistry/frazetta-front-page"
  //   },
  //   {
  //     title: "ArtSmart",
  //     image: imgArtSmart,
  //     description: "Front page for art history website",
  //     url: "https://mitulmistry.github.io/artsmart-front-page/",
  //     github: "https://github.com/MitulMistry/artsmart-front-page"
  //   }
  // ]
}

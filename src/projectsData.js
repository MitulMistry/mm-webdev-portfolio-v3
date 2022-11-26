import imgAicExplorer from "./images/app_aic_explorer.jpg"
import imgStoryplan from "./images/app_storyplan.jpg"
import imgSketchbook from "./images/app_sketchbook.jpg"
import imgSteamNavigator from "./images/app_steam_navigator.jpg"
import imgGoogleNews from "./images/app_react_google_news.jpg"
import imgPaperTrader from "./images/app_paper_trader.jpg"
import imgJournalTool from "./images/app_journal_tool.jpg"
import imgTheValley from "./images/app_the_valley_react.jpg"
import imgFriendFinder from "./images/app_friend_finder.jpg"
import imgPostIt from "./images/app_post_it.jpg"
import imgFrazetta from "./images/app_frazetta.jpg"
import imgArtSmart from "./images/app_artsmart.jpg"
import imgCmd from "./images/app_cmd.jpg"

export const featuredProjects = [
  {
    title: "Art Institute Explorer",
    image: imgAicExplorer,
    description: "A full stack application to explore artworks from the Art Institute of Chicago. Users can search through the museum’s catalog and add artworks to custom collections.",
    bullets: [
      "Integrated a React front end with a Rails back end to interact with the Art Institute API.",
      "Implemented feature to save artworks and create collections using React forms, ActiveRecord relationships, and a PostgreSQL database.",
      "Used Redux to manage state for the front end and store data from API requests."
    ],
    tags: ["React", "Redux", "Ruby on Rails"],
    url: "https://art-institute-explorer.up.railway.app/",
    github: "https://github.com/MitulMistry/art-institute-explorer"
  },
  {
    title: "Storyplan",
    image: imgStoryplan,
    description: "A web application for writers to plan and share their work-in-progress stories. Users can organize their stories into chapters and include characters, genres, and target audiences.",
    bullets: [
      "Developed a high coverage test suite including unit, controller, and integration tests using RSpec and Capybara.",
      "Implemented user authentication with Facebook using the Devise and OmniAuth gems.",
      "Utilized AWS S3 and Active Storage to implement user image uploads and allow for scalability of image services."
    ],
    tags: ["Ruby on Rails"],
    url: "https://rails-storyplan.up.railway.app/",
    github: "https://github.com/MitulMistry/rails-storyplan"
  },
  {
    title: "The Valley",
    image: imgTheValley,
    description: "A text adventure system for non-linear storytelling and branching user choices. Keeps track of user’s decisions and interprets them over the course of the narrative.",
    bullets: [
      "Integrated Redux store with custom JavaScript game management classes to maintain and update game state.",
      "Designed a story production pipeline for CSV to JSON files which are then parsed and loaded in game."
    ],
    tags: ["JavaScript", "React", "Redux"],
    url: "https://the-valley-react.fly.dev/",
    github: "https://github.com/MitulMistry/the-valley-react"
  },
  {
    title: "React Google News",
    image: imgGoogleNews,
    description: "A React front end application using the Google News API. Displays news stories from different sources in a reflowable grid structure.",
    bullets: [
      "Developed a simple Node and Express back end to interact with external API and reroute responses to the front end.",
      "Used Webpack with custom configurations using Webpack-Merge to optimize project for development and production."
    ],
    tags: ["React", "Node"],
    url: "https://react-google-news.cyclic.app/",
    github: "https://github.com/MitulMistry/react-google-news"
  },
  {
    title: "Steam Navigator",
    image: imgSteamNavigator,
    description: "A front end AngularJS web application for viewing the Steam Store using the Storefront API. Displays games for currently trending categories and in-depth product info for individual games.",
    bullets: [
      "Migrated legacy code for AngularJS into a modern Webpack build process to improve performance and maintainability.",
      "Implemented AngularJS Material for layout and styling to achieve a unified, professional aesthetic."
    ],
    tags: ["AngularJS", "Node"],
    url: "https://steam-navigator.cyclic.app/",
    github: "https://github.com/MitulMistry/steam-navigator"
  },
  {
    title: "Paper Trader",
    image: imgPaperTrader,
    description: "A Flask application to practice trading stocks using the IEX Cloud API. Users can buy and sell stocks based on current market prices.",
    bullets: [
      "Developed a Flask back end in Python to track transactions, calculate gains and losses, and store user data in a PostgreSQL database with SQLAlchemy and Alembic.",
      "Leveraged external APIs including IEX to get real time stock data as well as News API to provide related articles."
    ],
    tags: ["Python", "Flask"],
    url: "https://paper-trader-py.fly.dev/",
    github: "https://github.com/MitulMistry/paper-trader"
  },
  {
    title: "Journal Tool",
    image: imgJournalTool,
    description: "A Django application for creating journal entries and tracking mood. Users can record events, activities, and cognitive distortions, and leverage associations between them.",
    bullets: [
      "Used Django templates, JavaScript, and an internal API to create web pages with asynchronous functionality.",
      "Developed a Django back end in Python to manage user authentication, process models, and calculate statistics for journal entries."
    ],
    tags: ["Python", "Django"],
    url: "https://journal-tool.fly.dev/",
    github: "https://github.com/MitulMistry/journal-tool"
  },
  {
    title: "Sketchbook",
    image: imgSketchbook,
    description: "A Rails/AngularJS web application for artists to curate and share their sketches. Users can upload images and filter them based on tags.",
    bullets: [
      "Developed a Rails back end API using serializers to enable front end CRUD requests.",
      "Integrated Active Storage with AngularJS to handle image uploading for AWS S3."
    ],
    tags: ["AngularJS", "Ruby on Rails"],
    // url: "https://angular-sketchbook.herokuapp.com/",
    github: "https://github.com/MitulMistry/sketchbook"
  }
]

export const projectCards = [
  {
    title: "Post-It",
    image: imgPostIt,
    description: "A Rails/jQuery web application to create and sort notes. Uses jQuery to communicate asynchronously with a Rails JSON API.",
    tags: ["Ruby on Rails", "jQuery"],
    // url: "https://rails-post-it.herokuapp.com/",
    github: "https://github.com/MitulMistry/post-it"
  },
  {
    title: "Friend Finder",
    image: imgFriendFinder,
    description: "A social networking application built with Rails. Users can discover each other based on interests and send messages.",
    tags: ["Ruby on Rails"],
    github: "https://github.com/MitulMistry/friend-finder"
  },
  {
    title: "Steam Top Sellers CLI Gem",
    image: imgCmd,
    description: "A Ruby command line application to get the top selling games on Steam. Queries external API and parses JSON responses into custom classes.",
    tags: ["Ruby"],
    github: "https://github.com/MitulMistry/steam-top-sellers-cli-gem"
  }
]

export const webDesigns = [
  {
    title: "Frank Frazetta",
    image: imgFrazetta,
    description: "Front page for a fantasy illustration website",
    url: "https://mitulmistry.github.io/frazetta-front-page/",
    github: "https://github.com/MitulMistry/frazetta-front-page"
  },
  {
    title: "ArtSmart",
    image: imgArtSmart,
    description: "Front page for art history website",
    url: "https://mitulmistry.github.io/artsmart-front-page/",
    github: "https://github.com/MitulMistry/artsmart-front-page"
  }
]

import imgAicExplorer from "./images/app_aic_explorer.jpg"
import imgStoryplan from "./images/app_storyplan.jpg"
import imgSketchbook from "./images/app_sketchbook.jpg"
import imgSteamNavigator from "./images/app_steam_navigator.jpg"
import imgGoogleNews from "./images/app_react_google_news.jpg"
import imgPaperTrader from "./images/app_paper_trader.jpg"
import imgJournalTool from "./images/app_journal_tool.jpg"
import imgCharacterSheet from "./images/app_character_sheet.jpg"
import imgTheValley from "./images/app_the_valley_react.jpg"
import imgFriendFinder from "./images/app_friend_finder.jpg"
import imgPostIt from "./images/app_post_it.jpg"
import imgFrazetta from "./images/app_frazetta.jpg"
import imgArtSmart from "./images/app_artsmart.jpg"
import imgCmd from "./images/app_cmd.jpg"
import imgCmdPython from "./images/app_cmd_python.jpg"

export const featuredProjects = [
  {
    title: "Art Institute Explorer",
    image: imgAicExplorer,
    description:
      "A full-stack web app allowing users to explore the museum's catalog, search for artworks, and create custom collections.",
    bullets: [
      "Built a React front end to browse and save thousands of artworks via an external API",
      "Developed a Rails API to manage collections and artwork data in PostgreSQL",
      "Reduced API calls with caching, improving performance.",
    ],
    tags: ["React", "Redux", "Ruby on Rails"],
    url: "https://art-institute-explorer.up.railway.app/",
    github: "https://github.com/MitulMistry/art-institute-explorer",
  },
  {
    title: "The Valley",
    image: imgTheValley,
    description:
      "A non-linear storytelling engine that tracks user decisions and adapts the narrative dynamically.",
    bullets: [
      "Used Redux and custom JavaScript to manage dynamic text-based narratives",
      "Created a CSV-to-JSON pipeline for efficient story file processing",
      "Designed a branching system to track user choices and outcomes",
    ],
    tags: ["JavaScript", "React", "Redux"],
    url: "https://the-valley-react.fly.dev/",
    github: "https://github.com/MitulMistry/the-valley-react",
  },
  {
    title: "Storyplan",
    image: imgStoryplan,
    description:
      "A platform for writers to structure their stories into chapters, track characters, and categorize their work.",
    bullets: [
      "Developed a comprehensive test suite with RSpec and Capybara to ensure reliability and scalability",
      "Integrated Facebook authentication using Devise and OmniAuth for seamless user sign-in",
      "Enabled image uploads via AWS S3 and Active Storage for scalable media management",
    ],
    tags: ["Ruby on Rails"],
    url: "https://rails-storyplan.up.railway.app/",
    github: "https://github.com/MitulMistry/rails-storyplan",
  },
  {
    title: "React Google News",
    image: imgGoogleNews,
    description:
      "A React front-end app displaying news stories in a responsive grid layout using the Google News API.",
    bullets: [
      "Built a lightweight Node.js/Express back end to handle API requests and serve data to the front end",
      "Customized Webpack configurations to optimize performance for development and production",
    ],
    tags: ["React", "Node"],
    // url: "https://react-google-news.cyclic.app/",
    github: "https://github.com/MitulMistry/react-google-news",
  },
  {
    title: "Steam Navigator",
    image: imgSteamNavigator,
    description:
      "An AngularJS front-end app for browsing trending games and detailed product information from the Steam Store.",
    bullets: [
      "Migrated legacy AngularJS code to a modern Webpack build for improved maintainability",
      "Implemented AngularJS Material for a clean, responsive user interface",
    ],
    tags: ["AngularJS", "Node"],
    // url: "https://steam-navigator.cyclic.app/",
    github: "https://github.com/MitulMistry/steam-navigator",
  },
  {
    title: "Paper Trader",
    image: imgPaperTrader,
    description: "A Flask app simulating stock trading with real-time data.",
    bullets: [
      "Built a Flask back end with SQLAlchemy and Alembic to manage transactions and calculate gains/losses.",
      "Integrated external APIs to fetch live stock prices and display related news articles.",
    ],
    tags: ["Python", "Flask"],
    url: "https://paper-trader-py.fly.dev/",
    github: "https://github.com/MitulMistry/paper-trader",
  },
  {
    title: "Journal Tool",
    image: imgJournalTool,
    description:
      "A Django app for creating journal entries, tracking moods, and analyzing patterns.",
    bullets: [
      "Developed a Django back end to handle user authentication and process journal data",
      "Created interactive web pages with Django templates and asynchronous JavaScript functionality",
    ],
    tags: ["Python", "Django"],
    url: "https://journal-tool.fly.dev/",
    github: "https://github.com/MitulMistry/journal-tool",
  },
  {
    title: "Character Sheet",
    image: imgCharacterSheet,
    description:
      "A React app for building and updating character sheets, designed for RPG enthusiasts.",
    bullets: [
      "Implemented state management with Redux Toolkit and stored character data in local storage",
      "Developed with TypeScript and ensured code integrity with a Jest test suite",
    ],
    tags: ["TypeScript", "React", "Redux"],
    // url: "https://react-character-sheet.cyclic.app/",
    github: "https://github.com/MitulMistry/character-sheet",
  },
  {
    title: "Sketchbook",
    image: imgSketchbook,
    description:
      "A Rails and AngularJS app for artists to upload and display their sketches.",
    bullets: [
      "Built a Rails API back end with Active Storage for image uploads to AWS S3",
      "Enabled front-end CRUD operations using AngularJS and integrated RESTful endpoints",
    ],
    tags: ["AngularJS", "Ruby on Rails"],
    // url: "https://angular-sketchbook.herokuapp.com/",
    github: "https://github.com/MitulMistry/sketchbook",
  },
]

export const projectCards = [
  {
    title: "Post-It",
    image: imgPostIt,
    description:
      "Rails and jQuery app for creating and sorting notes asynchronously with a JSON API",
    tags: ["Ruby on Rails", "jQuery"],
    // url: "https://rails-post-it.herokuapp.com/",
    github: "https://github.com/MitulMistry/post-it",
  },
  {
    title: "Friend Finder",
    image: imgFriendFinder,
    description: "Rails app with messaging functionality for social networking",
    tags: ["Ruby on Rails"],
    github: "https://github.com/MitulMistry/friend-finder",
  },
  {
    title: "News Summarizer",
    image: imgCmdPython,
    description:
      "Python CLI tool integrating News API and AI-generated summaries",
    tags: ["Python"],
    github: "https://github.com/MitulMistry/news-summarizer",
  },
  {
    title: "Steam Top Sellers CLI Gem",
    image: imgCmd,
    description: "Ruby CLI app fetching Steam Store data via API",
    tags: ["Ruby"],
    github: "https://github.com/MitulMistry/steam-top-sellers-cli-gem",
  },
]

export const webDesigns = [
  {
    title: "Frank Frazetta",
    image: imgFrazetta,
    description: "Fantasy illustration front page",
    url: "https://mitulmistry.github.io/frazetta-front-page/",
    github: "https://github.com/MitulMistry/frazetta-front-page",
  },
  {
    title: "ArtSmart",
    image: imgArtSmart,
    description: "Art history website front page",
    url: "https://mitulmistry.github.io/artsmart-front-page/",
    github: "https://github.com/MitulMistry/artsmart-front-page",
  },
]

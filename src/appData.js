module.exports = {
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
  },

  // Config for ScrollReveal fade-in animations
  scrollRevealConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  })
}

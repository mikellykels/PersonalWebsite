module.exports = {
  siteTitle: 'Mikaela Carino | Character Rigger',
  siteDescription:
    'Portfolio of Mikaela Carino - character rigger & technical animator who connects art with code to create game character systems and motion workflows.',
  siteKeywords: 'keywords',
  siteUrl: 'https://mikaelacarino.com',
  siteLanguage: 'en_US',
  name: 'Mikaela Carino',
  location: 'California, USA',
  // email: 'mikaela.carino@gmail.com',
  github: 'https://github.com/mikellykels',
  twitterHandle: '@mikellykels',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/mikellykels',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/mikaelacarino',
    },
  ],
  lastUpdated: 'April 8, 2025',

  navLinks: [
    {
      name: 'Featured Projects',
      url: '/#projects',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Education',
      url: '/#education',
    },
    {
      name: 'Certifications',
      url: '/#certifications',
    },
    {
      name: 'Awards',
      url: '/#awards',
    },
    {
      name: 'About',
      url: '/#about',
    },
  ],

  navHeight: 100,

  colors: {
    purple: '#9F80FF',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
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
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

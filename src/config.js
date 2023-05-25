module.exports = {
  siteTitle: 'Mikaela Carino | Software Engineer',
  siteDescription: 'Site description',
  siteKeywords: 'keywords',
  siteUrl: 'https://mikaelacarino.com',
  siteLanguage: 'en_US',
  // googleAnalyticsID: 'UA-127188467-2',
  // googleVerification: 'zWJzGMVk8J4FpXsLNpt7CB17SPaa2_ti9YfdGwnGr00',
  name: 'Mikaela Carino',
  location: 'California, USA',
  email: 'mikaela.carino@gmail.com',
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
  lastUpdated: 'May 25, 2023',

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Projects',
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
    // {
    //   name: 'Certifications',
    //   url: '/#certifications',
    // },
    {
      name: 'Contact',
      url: '/#contact',
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

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  performance: {
    gzip: false // disable gzip on server side
  },
  env: {
    NUXT_CFG_VAR_FOO: 'NUXT_CFG_VAR_FOO',
    NUXT_CFG_VAR_FOO2: 'NUXT_CFG_VAR_FOO2 + (' + process.env.NUXT_BUILD_VAR_FOO + ')',
  }
}

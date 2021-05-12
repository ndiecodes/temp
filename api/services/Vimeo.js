const VimeoSDK = require('vimeo').Vimeo

class Vimeo {
  constructor() {
    if (
      !process.env.VIMEO_CLIENT_ID ||
      !process.env.VIMEO_CLIENT_SECRET ||
      !process.env.VIMEO_ACCESS_TOKEN
    ) {
      throw new Error('Provide clientID, clientSecret and Access Token')
    }
    this.client = new VimeoSDK(
      process.env.VIMEO_CLIENT_ID,
      process.env.VIMEO_CLIENT_SECRET,
      process.env.VIMEO_ACCESS_TOKEN
    )
  }

  all() {
    this.client.request(
      {
        method: 'GET',
        path: '/tutorial',
      },
      // eslint-disable-next-line camelcase
      function (error, body, status_code, headers) {
        if (error) {
          console.log(error, status_code)
        }
        console.log(body, status_code)
      }
    )
  }
}

module.exports = Vimeo

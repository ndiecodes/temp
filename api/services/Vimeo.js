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

  // Upload Video

  // uploadVideo() {
  //   return new Promise((resolve, reject) => {
  //     this.client.request(
  //       {
  //         method: 'GET',
  //         path: `/users/${process.env.VIMEO_USER_ID}/albums`,
  //       },
  //       function (error, body) {
  //         if (error) {
  //           reject(error)
  //         }
  //         resolve(body)
  //       }
  //     )
  //   })
  // }

  // Create Category

  all() {
    return new Promise((resolve, reject) => {
      this.client.request(
        {
          method: 'GET',
          path: `/users/${process.env.VIMEO_USER_ID}/albums`,
        },
        function (error, body) {
          if (error) {
            reject(error)
          }
          resolve(body)
        }
      )
    })
  }

  allVideosInFolder(folderId) {
    return new Promise((resolve, reject) => {
      this.client.request(
        {
          method: 'GET',
          path: `/users/${process.env.VIMEO_USER_ID}/projects/${folderId}/videos`,
        },
        function (error, body) {
          if (error) {
            reject(error)
          }
          resolve(body)
        }
      )
    })
  }
}

module.exports = Vimeo

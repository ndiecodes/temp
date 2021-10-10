const slugify = require('slugify')
const Video = require('../models').Video
const Course = require('../models').Course
const UserCourse = require('../models').UserCourse

// const Vimeo = require('../services/Vimeo')

class CourseController {
  static async courses(req, res) {
    try {
      const page = req.query.page || 0
      const size = req.query.size || 10
      const courses = await Course.findAll({
        offset: page,
        limit: size,
        include: [
          {
            model: Video,
            required: true,
          },
        ],
      })

      if (courses) {
        return res.status(200).json({
          success: true,
          message: 'Courses retrieved successfully',
          courses,
        })
      } else
        return res.status(404).json({
          success: false,
          message: 'Courses not found',
        })
    } catch (error) {
console.log(error)
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error Occured, Please try again',
         error,
      })
    }
  }

  static async userCourses(req, res) {
    if (req.user.id !== parseInt(req.params.id)) {
      return res.status(401).json({
        success: false,
        message: "You're not authorized",
      })
    }

    try {
      const page = req.query.page || 0
      const size = req.query.size || 10
      const courses = await UserCourse.findAll({
        offset: page,
        limit: size,
        where: { user_id: req.params.id },
        include: [
          {
            model: Course,
            required: true,
          },
          {
            model: Video,
            required: true,
          },
        ],
      })

      if (courses) {
        return res.status(200).json({
          success: true,
          message: 'Courses retrieved successfully',
          courses,
        })
      } else
        return res.status(404).json({
          success: false,
          message: 'Courses not found',
        })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error Occured, Please try again',
        // error,
      })
    }
  }

  static async allCourses(req, res) {
    try {
      const courses = await Course.findAll({})
      if (courses) {
        return res.status(200).json({
          success: true,
          message: 'Courses retrieved successfully',
          courses,
        })
      } else
        return res.status(404).json({
          success: false,
          message: 'Courses not found',
        })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error Occured, Please try again',
        error,
      })
    }
  }

  static async videos(req, res) {
    try {
      const videos = await Video.findAll({
        include: Course,
      })
      if (videos) {
        return res.status(200).json({
          success: true,
          message: 'Videos retrieved successfully',
          videos,
        })
      } else
        return res.status(404).json({
          success: false,
          message: 'Videos not found',
        })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error Occured, Please try again',
        error,
      })
    }
  }

  static async videosByCategoryID(req, res) {
    try {
      const page = req.query.page || 0
      const size = req.query.size || 10
      const courses = await Course.findAll({ offset: page, limit: size })

      if (courses) {
        return res.status(201).json({
          success: true,
          message: 'Courses retrieved successfully',
          courses,
        })
      } else
        return res.status(404).json({
          success: false,
          message: 'Courses not found',
        })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error Occured, Please try again',
        error,
      })
    }
  }

  static async videoByID(req, res) {
    try {
      const page = req.query.page || 0
      const size = req.query.size || 10
      const courses = await Course.findAll({ offset: page, limit: size })

      if (courses) {
        return res.status(201).json({
          success: true,
          message: 'Courses retrieved successfully',
          courses,
        })
      } else
        return res.status(404).json({
          success: false,
          message: 'Courses not found',
        })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error Occured, Please try again',
        error,
      })
    }
  }

  static async uploadVideo(req, res) {
    if (req.user.roles.toLowerCase() !== 'admin') {
      return res.status(401).json({
        success: false,
        message: "You're not authorized to create videos",
      })
    }

    const {
      vimeoId,
      title,
      summary,
      description,
      categoryId,
      premium,
      section,
    } = req.body
    const slug = await CourseController.generateVideoSlug(title)

    const video = await Video.create({
      title,
      description,
      summary,
      vimeoId,
      category_id: categoryId,
      section,
      slug,
      premium,
    })

    if (video) {
      return res.status(201).json({
        success: true,
        message: 'Video Created successfully',
        video,
      })
    }

    return res.status(401).json({
      success: false,
      msg: 'Video not created',
    })
  }

  static async generateCategorySlug(title, prefix = 0) {
    let slug = ''
    if (prefix === 0) {
      slug = slugify(title, { lower: true })
    } else {
      slug = slugify(title, { lower: true }) + `-${prefix}`
    }

    const category = await Course.findOne({ where: { slug } })
    if (!category) return slug

    prefix++
    return await CourseController.generateCategorySlug(title, prefix)
  }

  static async generateVideoSlug(title, prefix = 0) {
    let slug = ''
    if (prefix === 0) {
      slug = slugify(title, { lower: true })
    } else {
      slug = slugify(title, { lower: true }) + `-${prefix}`
    }

    const category = await Video.findOne({ where: { slug } })
    if (!category) return slug

    prefix++
    return await CourseController.generateVideoSlug(title, prefix)
  }

  static async createCategory(req, res) {
    // return res.json({})
    if (req.user.roles.toLowerCase() !== 'admin') {
      return res.status(401).json({
        success: false,
        message: "You're not authorized to create categories",
      })
    }

    const { title, description, summary, premium } = req.body

    // Validation
    if (!title || !summary || !premium) {
      return res.json({
        success: false,
        message: 'Either title,summary or premium should be empty',
      })
    }

    const slug = await CourseController.generateCategorySlug(title)
    const course = await Course.create({
      title,
      description,
      summary,
      premium,
      slug,
    })

    if (course) {
      return res.status(201).json({
        success: true,
        message: 'Category Created successfully',
        course,
      })
    }

    return res.json({
      success: false,
      msg: 'Category not created, please try again',
    })
  }

  static async editVideo(req, res) {
    if (req.user.roles.toLowerCase() !== 'admin') {
      return res.status(401).json({
        success: false,
        message: "You're not authorized to edit videos",
      })
    }

    try {
      const video = await Video.findOne({ where: { id: req.params.id } })

      await video.update(req.body)
      return res.status(200).json({
        success: true,
        message: 'Video updated successfully',
        video,
      })
    } catch (error) {
      return res.status(401).json({
        success: false,
        msg: 'Video not created',
        error,
      })
    }
  }

  static async editCourse(req, res) {
    if (req.user.roles.toLowerCase() !== 'admin') {
      return res.status(401).json({
        success: false,
        message: "You're not authorized to edit courses",
      })
    }

    try {
      const course = await Course.findOne({ where: { id: req.params.id } })
      await course.update(req.body)
      return res.status(200).json({
        success: true,
        message: 'Course updated successfully',
        course,
      })
    } catch (error) {
      return res.status(401).json({
        success: false,
        msg: 'Course not created',
        error,
      })
    }
  }

  static async createUserCourse(req, res) {
    if (req.user.id !== parseInt(req.params.id)) {
      return res.status(401).json({
        success: false,
        message: "You're not authorized",
      })
    }

    // eslint-disable-next-line camelcase
    const { user_id, course_id, current_video_id } = req.body

    // Check if User already has course
    const course = await UserCourse.findOne({ where: { user_id, course_id } })
    if (course) {
      await course.update({ current_video_id })
      return res.status(200).json({
        success: true,
        message: 'User course updated successfully',
        course,
      })
    }

    const userCourse = await UserCourse.create({
      user_id,
      course_id,
      current_video_id,
    })
    if (userCourse) {
      return res.status(201).json({
        success: true,
        message: 'User Course Created successfully',
        userCourse,
      })
    }

    return res.status(401).json({
      success: false,
      msg: 'User Course not created',
    })
  }
}

module.exports = CourseController

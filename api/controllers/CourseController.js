const Video = require('../models').Video
const Category = require('../models').Category
// const Vimeo = require('../services/Vimeo')

class CourseController {
  static async courses(req, res) {
    try {
      const page = req.query.page || 0
      const size = req.query.size || 10
      const courses = await Category.findAll({
        offset: page,
        limit: size,
        include: Video,
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
        error,
      })
    }
  }

  static async videosByCategoryID(req, res) {
    try {
      const page = req.query.page || 0
      const size = req.query.size || 10
      const courses = await Category.findAll({ offset: page, limit: size })

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
      const courses = await Category.findAll({ offset: page, limit: size })

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
    const {
      vimeoId,
      title,
      summary,
      description,
      categoryId,
      section,
    } = req.body
    const video = await Video.create({
      title,
      description,
      summary,
      vimeoId,
      category_id: categoryId,
      section,
    })

    if (video) {
      return res.json({
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

  static async createCategory(req, res) {
    const { title, description, summary, premium } = req.body
    const video = await Category.create({
      title,
      description,
      summary,
      premium,
    })

    if (video) {
      return res.json({
        success: true,
        message: 'Category Created successfully',
        video,
      })
    }

    return res.status(401).json({
      success: false,
      msg: 'Category not created',
    })
  }
}

module.exports = CourseController

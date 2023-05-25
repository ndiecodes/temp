import UserRepository from '~/repositories/UserRepository'
import CourseRepository from '~/repositories/CourseRepository'
import AdminRepository from '~/repositories/AdminRepository'

export default ($axios) => ({
  user: UserRepository($axios),
  course: CourseRepository($axios),
  admin: AdminRepository($axios),
})

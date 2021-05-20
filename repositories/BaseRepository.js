import UserRepository from '~/repositories/UserRepository'
import CourseRepository from '~/repositories/CourseRepository'

export default ($axios) => ({
  user: UserRepository($axios),
  course: CourseRepository($axios),
})

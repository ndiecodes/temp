import UserRepository from '~/repositories/UserRepository'
import ChannelRepository from '~/repositories/ChannelRepository'

export default ($axios) => ({
  user: UserRepository($axios),
  channel: ChannelRepository($axios),
})

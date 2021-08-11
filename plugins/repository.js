import createRepository from '~/repositories/BaseRepository'

export default (ctx, inject) => {
  inject('repositories', createRepository(ctx.$axios))
}

module.exports = {
  apps: [
    {
      name: 'nuxtapp',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      watch: '.',
      watch_delay: 3000,
      ignore_watch: ['node_modules'],
    },
  ],
}

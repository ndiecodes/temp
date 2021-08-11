<template>
  <main class="bg-grey-lightest">
    <section class="bg-grey-lightest">
      <div class="container py-4 bg-grey-lightest">
        <div class="d-flex justify-content-between text-grey-dark">
          <div class="d-flex">
            <span class="text-muted">
              <nuxt-link to="/courses">Courses</nuxt-link></span
            >
            <span class="px-2">
              <i class="fas fa-angle-right px-1"></i>
              <nuxt-link :to="'/courses/' + course.slug">{{
                course.title
              }}</nuxt-link></span
            >

            <span class="px-1">
              <i class="fas fa-angle-right px-1"></i>
              <nuxt-link
                :to="'/courses/' + course.slug + '/lessons/' + video.slug"
                >{{ video.title }}</nuxt-link
              ></span
            >
          </div>
        </div>
      </div>
    </section>
    <section class="bg-grey-darkest">
      <div
        class="container mx-auto px-4 sm:px-6 lg:px-8"
        style="position: block"
      >
        <div style="position: relative; padding-top: 56.25%">
          <iframe
            v-if="video"
            :src="`https://player.vimeo.com/video/${video.vimeoId}`"
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            "
            class="py-2"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            allow="autoplay; encrypted-media"
            data-ready="true"
            width="100%"
            data-vimeo-autoplay="true"
            height="100%"
          ></iframe>
        </div>
      </div>
    </section>

    <section class="bg-grey-lightest">
      <div class="container py-5">
        <p>
          {{ course.description }}
        </p>

        <div class="mt-5">
          <Outline :course="course" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async beforeRouteUpdate(to, from, next) {
    const getCourse = await this.$store.getters['course/getCourse']
    const course = await getCourse(to.params.course)
    if (!course) {
      await this.$store.dispatch('course/getCourses')
      const getCourse = await this.$store.getters['course/getCourse']
      this.course = await getCourse(to.params.course)
    }

    const getVideo = await this.$store.getters['course/getVideo']
    this.video = await getVideo(to.params.course, to.params.slug)

    next()
  },

  layout: 'lesson',
  middleware: ['auth'],
  auth: false,

  async asyncData({ store, params }) {
    try {
      const getCourse = await store.getters['course/getCourse']
      let course = await getCourse(params.course)
      if (!course) {
        await store.dispatch('course/getCourses')
        const getCourse = await store.getters['course/getCourse']
        course = await getCourse(params.course)
      }

      const getVideo = await store.getters['course/getVideo']
      const video = await getVideo(params.course, params.slug)

      return { course, video }
    } catch (error) {
      console.log(error, 'error')
    }
  },

  mounted() {
    const iframe = document.querySelector('iframe')
    // eslint-disable-next-line no-undef
    const player = new Vimeo.Player(iframe, {
      autoplay: true,
      responsive: true,
    })

    let nextVideo = null
    const _this = this
    player.on('play', async function () {
      // Search for next video and store next video
      const getVideo = await _this.$store.getters['course/getNextVideo']
      nextVideo = await getVideo(_this.course, _this.video.slug)
    })

    player.on('ended', function () {
      // Get slug and push route to Vue Router
      if (nextVideo)
        return _this.$router.push({
          path: `/courses/${_this.course.slug}/lessons/${nextVideo.slug}`,
        })
    })

    this.createOrUpdateUserCourse()
  },

  methods: {
    async createOrUpdateUserCourse() {
      if (this.$auth.loggedIn && this.course && this.video) {
        const payload = {}
        payload.user_id = this.$auth.user.id
        payload.course_id = this.course.id
        payload.current_video_id = this.video.id
        await this.$store.dispatch('course/createUserCourse', payload)
      }
    },
  },
}
</script>

<style scoped>
button:focus,
button:active {
  outline: none !important;
  box-shadow: none;
}
.text-grey-dark {
  --tw-text-opacity: 1;
  color: rgba(115, 124, 151, var(--tw-text-opacity));
}

.bg-grey-darkest {
  --tw-bg-opacity: 1;
  background-color: rgba(34, 34, 34, var(--tw-bg-opacity));
}

.bg-grey-lightest {
  --tw-bg-opacity: 1;
  background-color: rgba(248, 248, 255, var(--tw-bg-opacity));
}

.text-grey-dark {
  --tw-text-opacity: 1;
  color: rgba(115, 124, 151, var(--tw-text-opacity));
}

.accordion-body .d-flex > span,
a {
  color: rgb(145, 144, 144) !important;
}

.accordion-item h2 {
  background: #f0eef9 !important;
  border: 0;
}

.accordion-button {
  background: #f0eef9 !important;
  color: #484849;
  font-size: 1.1rem;
  font-weight: 500;
}

.accordion-button:hover {
  color: #6f6f70 !important;
}

.accordion-button:focus {
  color: #6f6f70 !important;
}

dt {
  background-color: #ccc;
  padding: 1em;
  font-weight: bold;
}

button:focus,
button:active {
  outline: none !important;
  box-shadow: none;
}
</style>

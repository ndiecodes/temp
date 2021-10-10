<template>
  <div id="accordionExample" class="accordion">
    <div
      v-for="(videos, name) in mergeVideos()"
      :key="removeSpaces(name)"
      class="accordion-item"
    >
      <h2 id="headingOne" class="accordion-header p-2">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#collapseOne' + removeSpaces(name)"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          {{ name }}
        </button>
      </h2>
      <div
        :id="'collapseOne' + removeSpaces(name)"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body row">
          <div v-for="(video, index) in videos" :key="index" class="">
            <ListVideo :course="course" :video="video" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: [Object, Array],
      default: () => [],
    },
  },
  methods: {
    mergeVideos() {
      if (this.course) {
        return this.course.Videos.reduce((videos, currentItem) => {
          // If the key does not yet exist in our object then create it
          // and initialize it with an empty array
          if (!videos[currentItem.section]) videos[currentItem.section] = []

          // Add the object to the correct array
          videos[currentItem.section].push(currentItem)

          // Return the categorised objects for the next iteration
          return videos
        }, {})
      }
    },

    removeSpaces(text) {
      return text.replace(/ /g, '')
    },
  },
}
</script>

<style scoped>
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

<template>
  <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
    <div class="text-center">
      <div
        class="
          text-gold
          p-1
          text-center text-xl
          inline-flex
          items-center
          justify-center
          mb-5
        "
      >
        <i class="fas fa-star"></i>
      </div>
      <div
        class="
          text-gold
          p-1
          text-center text-xl
          inline-flex
          items-center
          justify-center
          mb-5
        "
      >
        <i class="fas fa-star"></i>
      </div>
      <div
        class="
          text-gold
          p-1
          text-center text-xl
          inline-flex
          items-center
          justify-center
          mb-5
        "
      >
        <i class="fas fa-star"></i>
      </div>
      <div
        class="
          text-gold
          p-1
          text-center text-xl
          inline-flex
          items-center
          justify-center
          mb-5
        "
      >
        <i class="fas fa-star"></i>
      </div>
      <div
        class="
          text-gold
          p-1
          text-center text-xl
          inline-flex
          items-center
          justify-center
          mb-5
        "
      >
        <i class="fas fa-star"></i>
      </div>
    </div>
    <div class="px-6">
      <blockquote class="relative mb-2">
        <div class="absolute top-0 left-0 text-primary">
          <i class="fas fa-quote-left"></i>
        </div>
        <p class="px-4 text-justify text-primary indent-4">
          {{ review }}
        </p>
        <div class="absolute bottom-0 right-0 text-primary">
          <i class="fas fa-quote-right"></i>
        </div>
      </blockquote>
      <div class="flex justify-center items-center">
        <div>
          <span
            class="
              text-xs
              font-semibold
              inline-block
              uppercase
              rounded-full
              text-blueGray-500
              bg-blueGray-50
              mr-3
              mt-2
            "
          >
            <img
              alt="..."
              :src="[src]"
              class="shadow-lg rounded-full mx-auto max-w-60-px"
            />
          </span>
        </div>
        <div class="text-center">
          <h5 class="text-lg font-bold">{{ username }}</h5>
          <p class="mt-1 text-xs text-blueGray-400 font-semibold">
            {{ platform }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardReview",
  data() {
    return {};
  },
  props: {
    username: String,
    platform: String,
    review: String,
    src: String,
  },
  methods: {},
};
</script>
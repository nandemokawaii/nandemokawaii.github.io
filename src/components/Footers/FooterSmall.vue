<template>
  <footer
    class="pb-6"
    :class="[
      absolute ? 'absolute w-full bottom-0 bg-blueGray-800' : 'relative',
    ]"
  >
    <div class="container mx-auto px-4">
      <hr class="mb-6 border-b-1 border-primary" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full px-4 mx-auto">
          <div
            class="text-sm text-primary font-semibold py-1 text-center"
          >
            Copyright © {{ date }}
          </div>
        </div>
        
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
  props: {
    absolute: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
    <button
      type="button"
      class="
        inline-block
        px-6
        py-2.5
        bg-primary
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded-full
        shadow-md
        hover:bg-purple-500 hover:shadow-lg
        focus:bg-purple-500 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-purple-500 active:shadow-lg
        transition
        duration-150
        ease-in-out
      "
    >
      {{ title }}
    </button>
</template>

<script>
export default {
  name: "BtnRound",
  data() {
    return {
    };
  },
  props: {
    title: String,
    list: Function,
  },
  methods: {

  },
};
</script>
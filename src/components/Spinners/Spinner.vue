<template>
  <div else>
    <div class="relative flex flex-wrap justify-center h-350-px">
      <div class="centerDiv p-5">
        <div :class="[name ? name : 'flower-loader']">Loading...</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "spinner",
  data() {
    return {};
  },
  props: {
    name: String,
  },
  methods: {},
};
</script>
<style>
.centerDiv {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
}
</style>
<template>
  <div v-if="alertOpen" class="text-white px-6 py-4 border-0 rounded mb-4" :class="[alertColor]">
    <span class="text-md md:text-xl inline-block mr-2 align-middle">
      <i :class="[alertIcon]"></i>
    </span>
    <span class="inline-block align-middle mr-4">
      <b class="capitalize">{{ title }}</b> {{ message }}
    </span>
    <button class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none" v-on:click="closeAlert()">
      <span>×</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "alert",
  data() {
    return {
      alertOpen: true,
    }
  },
  props: {
    title: String,
    message: String,
    icon: String,
    alertColor: String,
    alertIcon: String,
  },
  methods: {
    closeAlert: function(){
      this.alertOpen = false;
    }
  }
}
</script>
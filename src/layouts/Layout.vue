<template>
  <div class="bg-blueGray-200">
    <index-navbar />

      <img
        class="fixed top-0 b-auto right-0 pt-16 max-h-860-px invisible md:visible"
        :src="patternFlower"
        alt="..."
      />
   
    
    <div class="pt-24 h-full fullHeight">
      <router-view />
    </div>
    <footer-component />
  </div>
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/FooterSmall.vue";

import patternFlower from "@/assets/img/bg/pattern_flower.png";

export default {
  name: "layout",
  data() {
    return {
      patternFlower,
    };
  },
  components: {
    IndexNavbar,
    FooterComponent,
  },
};
</script>
<style>
  .fullHeight {
    min-height: 100vh;
  }
</style>
<template>
  <div class="relative container mx-auto">
    <div>
      <div class="flex flex-wrap mb-10">
        <div class="md:mx-2 p-2 md:p-4">
          <RoundButton v-on:click="listByCategory()" title="All Products" />
        </div>
        <div class="md:mx-2 p-2 md:p-4">
          <RoundButton v-on:click="listByCategory('official')" title="Official Merch" />
        </div>
        <div class="md:mx-2 p-2 md:p-4">
          <RoundButton v-on:click="listByCategory('custom')" title="Custom / Personalized" />
        </div>
        <div class="md:mx-2 p-2 md:p-4">
          <RoundButton v-on:click="listByCategory('photocards')" title="Photocards" />
        </div>
        <div class="md:mx-2 p-2 md:p-4">
          <RoundButton v-on:click="listByCategory('stickers')" title="Stickers" />
        </div>
        <div class="md:mx-2 p-2 md:p-4">
          <RoundButton v-on:click="listByCategory('others')" title="Others" />
        </div>
      </div>
    </div>
    <div v-if="items">
      <div class="flex flex-wrap pb-48">
        <div
          v-for="items in items"
          :key="items.id"
          class="w-full xl:w-3/12 mb-12 xl:mb-0 px-1"
        >
          <card-product
            :title="items.title"
            :desc="items.desc"
            :src="items.img"
            :id="items.id"
            :category="items.category"
            v-bind:urlCart="urlCart"
          />
        </div>
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>
<script>
import CardProduct from "@/components/Cards/CardProduct.vue";
import Spinner from "@/components/Spinners/Spinner.vue";
import RoundButton from "@/components/Buttons/RoundButton.vue";
import getItems from "@/composables/getItems";

export default {
  name: "shop-page",
  data() {
    return {
      urlItems: "http://localhost:3000/items",
      urlItemsByCategory: "http://localhost:3000/items?category=",
      urlCart: "http://localhost:3000/cart",
    };
  },
  components: {
    CardProduct,
    Spinner,
    RoundButton,
  },
  setup(){
    const { items, error } = getItems()    
    return { items, error }
  },
  methods: {
    listByCategory(a) {
      this.url = a != undefined ? this.urlItemsByCategory+a : this.urlItems
      fetch(this.url)
      .then((res) => res.json())
      .then((data) => (this.items = data))
      .catch((err) => console.log(err.message));
    },
  },
};
</script>
<style scoped>
</style>

<template>
  <div class="flex flex-wrap container mx-auto">
    <div class="w-full lg:w-9/12 px-4">
      <CardCartList v-bind:order="order" v-bind:fetchOrders="fetchOrders" v-bind:urlCart="urlCart" />
    </div>
    <div class="w-full lg:w-3/12 px-4 z-30">
      <CardSummary v-bind:order="order" v-bind:total="total" v-bind:discount="discount" v-bind:totalAmt="totalAmt" />
      <div class="">
        <router-link
          v-if="order.length"
          class="
            flex
            w-full
            justify-center
            bg-red-600
            active:bg-red-100
            uppercase
            text-white
            font-bold
            hover:shadow-md
            shadow
            text-md
            px-4
            py-2
            rounded
            outline-none
            focus:outline-none
            mx-auto
            ease-linear
            transition-all
            duration-150
          "
          :to="{ name: 'checkout' }"
        >
          Checkout
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import CardCartList from "@/components/Cards/CardCartList.vue";
import CardSummary from "@/components/Cards/CardSummary.vue";

export default {
  name: "cart-page",
  data() {
    return {
      order: [],
      total: 0,
      discount: 0,
      totalAmt: 0,
      url: '',
      urlCart: "http://localhost:3000/cart",
    };
  },
  mounted() {
    this.fetchOrders();
  },
  updated() {},
  components: {
    CardCartList,
    CardSummary,
  },
  methods: {
    fetchOrders() {
      this.url = this.url.length === 0 ? this.urlCart : this.url
      fetch(this.url)
        .then((res) => res.json())
        .then((data) => {
          this.order = data;
          this.total = 0;
          this.discount = 0;
          this.totalAmt = 0;

          for (var i = 0; i < this.order.length; i++) {
            this.total += this.order[i].qty * this.order[i].price;
            
            if (this.order[i].category === "photocards"){
              this.discount += this.order[i].qty * 5;
            }
          }
          
          this.totalAmt = this.total - this.discount;
        })
        .catch((err) => console.log(err.message));
    },
  },
};
</script>
<style>
</style>
<template>
  <section class="relative py-10">
    <div class="container mx-auto px-4">
      <div class="items-start flex flex-wrap">
        <div class="w-full md:w-6/12 ml-auto mr-auto px-2">
          <div class="sm:pr-12">
            <h3 class="text-3xl font-semibold text-primary">{{ product.title }}</h3>
            <div class="mt-4 text-md text-justify text-slate-500">
              {{ product.fullDesc }}
            </div>
            <div class="mt-5">
              <div class="font-semibold mb-3">Types:</div>
              <div class="flex flex-wrap">
                <div class="m-1"><RoundButton title="Coated" /></div>
                <div class="m-1"><RoundButton title="Laminated" /></div>
                <div class="m-1"><RoundButton title="Matte" /></div>
              </div>
            </div>
            <div class="flex flex-wrap mt-10 justify-center">
              <div class="w-3/12 pt-3 my-auto text-right">
                <button
                  class="
                    w-6/12
                    bg-primary
                    active:bg-purple-500
                    uppercase
                    text-white
                    font-bold
                    hover:shadow-md
                    shadow
                    text-xs
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
                  type="button"
                  v-on:click="changeQuantity('-')"
                >
                  -
                </button>
              </div>
              <div class="w-6/12 md:w-3/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="
                      block
                      uppercase
                      text-slate-600 text-xs
                      font-bold
                      mb-2
                      text-center
                    "
                    htmlFor="grid-password"
                  >
                    Quantity
                  </label>
                  <input
                    type="text"
                    class="
                      border-0
                      px-3
                      py-3
                      placeholder-slate-300
                      text-slate-600
                      bg-white
                      rounded
                      text-sm
                      shadow
                      focus:outline-none focus:ring
                      w-full
                      ease-linear
                      transition-all
                      duration-150
                      text-center
                    "
                    v-model="quantity"
                  />
                </div>
              </div>
              <div class="w-3/12 pt-3 my-auto text-left">
                <button
                  class="
                    w-6/12
                    bg-primary
                    active:bg-bg-purple-500
                    uppercase
                    text-white
                    font-bold
                    hover:shadow-md
                    shadow
                    text-xs
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
                  type="button"
                  v-on:click="changeQuantity('+')"
                >
                  +
                </button>
              </div>
            </div>
            <div class="flex flex-wrap mt-10 w-full md:w-3/12">
              <div class="w-6/12 font-semibold py-2">Price:</div>
              <div class="w-6/12 py-2">₱ {{ parseFloat(price).toFixed(2) }}</div>
            </div>
            <div class="flex flex-wrap mt-10">
              <div class="w-full md:w-6/12 p-1 px-3">
                <button
                  class="
                    w-full
                    bg-gold-400
                    active:bg-gold-100
                    uppercase
                    text-white
                    font-bold
                    hover:shadow-md
                    shadow
                    text-xs
                    px-4
                    py-3
                    rounded
                    outline-none
                    focus:outline-none
                    mx-auto
                    ease-linear
                    transition-all
                    duration-150
                  "
                  type="button"
                  v-on:click="addToCart(id)"
                >
                  Add to Wishlist
                </button>
              </div>
              <div class="w-full md:w-6/12 p-1 px-3">
                <button
                  class="
                    w-full
                    bg-red-600
                    active:bg-red-100
                    uppercase
                    text-white
                    font-bold
                    hover:shadow-md
                    shadow
                    text-xs
                    px-4
                    py-3
                    rounded
                    outline-none
                    focus:outline-none
                    mx-auto
                    ease-linear
                    transition-all
                    duration-150
                  "
                  type="button"
                  v-on:click="addToCart(id)"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-4/12 mt-20 mx-auto px-4">
          <img
            alt="..."
            class="max-w-full rounded-lg shadow-lg"
            :src="[product.img]"
          />
        </div>
      </div>
    </div>
    <Alert
      v-if="alertOpen"
      title=""
      message="This item has been added to cart."
      alertIcon="fas fa-shopping-basket"
      alertColor="bg-red-600"
      class="fixed top-0 right-0 mt-20 z-50"
    />
  </section>
</template>
<script>
import RoundButton from "@/components/Buttons/RoundButton.vue";
import Alert from "@/components/Alerts/Alert.vue";

export default {
  name: "shop-page",
  data() {
    return {
      product: [],
      id: this.$route.params.id,
      alertOpen: false,
      alertColor: '',
      alertIcon: '',
      quantity: 1,
      price: 75,
      urlItems: 'http://localhost:3000/items',
      urlCart: 'http://localhost:3000/cart',
    };
  },
  created() {
    fetch(this.urlItems+"/"+ this.id)
      .then((res) => res.json())
      .then((data) => (this.product = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    addToCart: function () {
      this.alertOpen = true;
      setTimeout(() => {
        this.alertOpen = false;
      }, 1000);
      
      fetch(this.urlCart, {
        method: "POST",
        body: JSON.stringify({
          title: this.product.title,
          qty: this.quantity,
          price: this.price,
          src: this.product.img,
          id: this.id,
        }),

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err.message));
    },
    changeQuantity(a) {
      if (a === "+") {
        this.quantity++;
      }
      if (a === "-") {
        if (this.quantity > 1) {
          this.quantity--;
        }
      }
    },
    closeAlert: function () {
      this.alertOpen = false;
    },
  },
  components: {
    Alert,
    RoundButton,
  },
};
</script>
<style>
.flip {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
</style>
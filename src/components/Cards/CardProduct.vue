<template>
  <div class="w-full px-4 mx-auto">
    <div
      class="
        relative
        flex flex-col
        min-w-0
        break-words
        bg-white
        w-full
        mb-6
        shadow-lg
        rounded-lg
        bg-white
      "
    >
      <img alt="..." :src="src" class="w-full align-middle rounded-t-lg" />
      <blockquote class="relative p-3 mb-1 h-20">
        <h4 class="text-l font-semibold text-primary">{{ title }}</h4>
      </blockquote>
      <div class="flex flex-wrap justify-center">
              <div class="w-3/12 pt-3 my-auto text-right">
                <button
                  class="
                    w-6/12
                    bg-primary
                    active:bg-purple-500
                    uppercase
                    text-white
                    font-semibold
                    hover:shadow-md
                    shadow
                    text-xs
                    text-center
                    p-1
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
              <div class="w-6/12 md:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="
                      block
                      uppercase
                      text-slate-600 
                      text-xs
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
                      px-4
                      py-1
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
                    active:bg-purple-500
                    uppercase
                    text-white
                    font-semibold
                    hover:shadow-md
                    shadow
                    text-xs
                    text-center
                    p-1
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
      <div class="mr-3 ml-3 mb-1">
        <router-link
          class="
            flex
            justify-center
            w-full
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
          :to="{ name: 'product', params: { id: this.id } }"
        >
          View
        </router-link>
      </div>
      <div class="mr-3 ml-3 mb-5">
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
          v-on:click="addToCart(id)"
        >
          Add to Cart
        </button>
      </div>
    </div>
    <Alert v-if="alertOpen" title="" message="This item has been added to cart." alertIcon="fas fa-shopping-basket" alertColor="bg-red-600" class="fixed top-0 right-0 mt-20 z-50" />
  </div>
</template>
<script>
import Alert from "@/components/Alerts/Alert.vue";

export default {
  data() {
    return {
      orders: [],
      alertOpen: false,
      alertColor: '',
      alertIcon: '',
      quantity: 1,
      price: 75,
    };
  },
  props: {
    title: String,
    desc: String,
    src: String,
    id: Number,
    category: String,
    urlCart: String,
  },
  updated() {

  },
  methods: {
    addToCart: function () {
      this.alertOpen = true;
      setTimeout(() => {
       this.alertOpen = false;
      }, 1000);

      fetch(this.urlCart, {
        method: 'POST',
        body: JSON.stringify({
          id: this.id,
          title: this.title,
          desc: this.desc,
          category: this.category,
          qty: this.quantity,
          price: this.price,
          src: this.src,
        }),
        
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
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
    closeAlert: function(){
      this.alertOpen = false;
    },
  },
  components: {
    Alert,
  },
};
</script>

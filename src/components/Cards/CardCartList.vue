<template>
  <div
    class="
      relative
      flex flex-col
      min-w-0
      break-words
      w-full
      mb-6
      shadow-lg
      rounded
    "
    :class="[color === 'light' ? 'bg-white' : 'bg-primary text-white']"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
            class="font-semibold text-2xl"
            :class="[color === 'light' ? 'text-primary' : 'text-white']"
          >
            My Cart
          </h3>
        </div>
      </div>
    </div>
    <div class="container">
      
      <div v-if="order.length">
        <div class="py-5 flex flex-wrap text-slate-600">
            <div class="w-full px-2">
              <div class="flex flex-wrap">
                <div class="px-4">
                 
                </div>
                <div class="w-10/12 md:w-11/12 flex-1">
                  <div class="flex flex-wrap text-sm md:mt-3 text-primary">
                    <div class="w-full md:w-6/12 text-sm font-semibold text-center">Description</div>
                    <div class="w-full md:w-2/12 text-sm font-semibold pl-2">Quantity</div>
                    <div class="w-full md:w-2/12 text-sm font-semibold">Unit Price</div>
                    <div class="w-full md:w-2/12 text-sm font-semibold">Subtotal</div>
                  </div>
                </div>
                <div class="px-8 text-right">
                 
                </div>
              </div>
            </div>
          </div>
        <div v-for="order in order" :key="order.id">
          <div class="py-5 flex flex-wrap text-slate-600">
            <div class="w-full px-2">
              <div class="flex flex-wrap">
                <div class="px-4">
                  <img
                    :src="[order.src]"
                    class="mx-auto h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  />
                </div>
                <div class="w-10/12 md:w-11/12 flex-1">
                  <div class="flex flex-wrap text-sm md:mt-3 text-primary">
                    <div class="w-full md:w-6/12">{{ order.title }}</div>
                    <div class="w-full md:w-2/12 text-sm">x {{ order.qty }}</div>
                    <div class="w-full md:w-2/12 text-sm">{{ parseFloat(order.price).toFixed(2) }}</div>
                    <div class="w-full md:w-2/12 text-sm">{{ parseFloat(order.qty*order.price).toFixed(2) }}</div>
                  </div>
                </div>
                <div class="px-4 text-right">
                  <button
                    class="
                      hover:text-red-100
                      text-red-600
                      px-3
                      py-2
                      items-center
                      text-sm
                      uppercase
                      font-bold
                      outline-none
                      focus:outline-none
                    "
                    v-on:click="removeItem(order.id)"
                  >
                    <i class="text-red fas fa-minus-circle" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="order.length == 0">
        <p class="text-center mb-5">There are no items in your cart.</p> 
      </div>
      <div v-else>
        <Spinner />
      </div>
    </div>
  </div>
</template>
<script>
import Spinner from "@/components/Spinners/Spinner.vue";

export default {
  props: {
    urlCart: String,
    order: {
      type: Array
    },
    fetchOrders: {
      type: Function
    },
    color: {
      default: "light",
      validator: function (value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  },
  methods: {
    removeItem: function (id) {
      fetch(this.urlCart+"/"+id, {
        method: "DELETE",
      }).then((response) => {
        this.fetchOrders();
        return response;
      });
    },
  },
  components: {
    Spinner,
  },
  
};
</script>

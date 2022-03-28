<template>
  <div
    class="
      relative
      flex flex-col
      break-words
      bg-primary
      w-full
      mb-6
      shadow-xl
      rounded-lg
    "
  >
  <div v-if="order.length">
    <div class="text-center text-white mt-10">
      <h3
        class="text-xl font-bold leading-normal mb-2 mb-2"
      >
        ORDER SUMMARY
      </h3>
      <span v-if="order.length >= 2" class="text-sm">There are a total of <b>{{order.length}}</b> items in your cart.</span>
      <span v-if="order.length <= 1" class="text-sm">There is only <b>{{order.length}}</b> item in your cart.</span>
    </div>
    <section class="p-5 sm:p-2 text-white text-sm mb-5">
      <div class="py-1">
        <div class="flex flex-wrap justify-center">
          <div class="w-6/12 mt-3 px-2 flex-1 text-right uppercase">
            Subtotal:
          </div>
          <div class="w-6/12 px-2 mt-3 text-center">₱ {{ parseFloat(total).toFixed(2) }}</div>
        </div>
      </div>
      <div class="py-1">
        <div class="flex flex-wrap justify-center">
          <div class="w-6/12 mt-3 px-2 flex-1 text-right uppercase">
            Discount:
          </div>
          <div class="w-6/12 px-2 mt-3 text-center">₱ {{ parseFloat(discount).toFixed(2) }}</div>
        </div>
      </div>
      <div class="py-1">
        <div class="flex flex-wrap justify-center">
          <div class="w-6/12 mt-3 px-2 flex-1 text-right font-bold uppercase">
            Total Amount:
          </div>
          <div class="w-6/12 px-2 mt-3 font-bold text-center">₱ {{ parseFloat(totalAmt).toFixed(2) }}</div>
        </div>
      </div>
    </section>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  props: {
    order: {
      type: Array
    },
    total: Number,
    discount: Number,
    totalAmt: Number,
  },
  mounted() {
    
  },
  updated() {
  },
  methods: {
    
  },
};
</script>

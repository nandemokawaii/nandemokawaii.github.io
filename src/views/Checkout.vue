<template>
  <div class="flex flex-wrap container mx-auto">
    <div class="w-full lg:w-9/12 px-4">
      <div v-if="order.length">
        <CardShipping 
          @inputChanged="saveData"
          v-bind:errors="errors"
          v-bind:getErrMsg="getErrMsg"
        />
      </div>
    </div>
    <div class="w-full lg:w-3/12 px-4 z-30">
      <CardSummary
        v-bind:order="order"
        v-bind:total="total"
        v-bind:discount="discount"
        v-bind:totalAmt="totalAmt"
      />
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
          :to="{ name: 'checkoutComplete', params: { id: this.orderId } }"
          v-on:click="checkForm"
        >
          Place Order
        </router-link>
        
      </div>
    </div>

  </div>
</template>
<script>
import CardShipping from "@/components/Cards/CardShipping.vue";
import CardSummary from "@/components/Cards/CardSummary.vue";

export default {
  name: "checkout-page",
  data() {
    return {
      order: [],
      total: 0,
      discount: 0,
      totalAmt: 0,
      orderId: 0,
      errors: [],
      date: new Date(),
      fullname: "",
      handler: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: 0,
      modeOfPayment: "GCash",
      modeOfDelivery: "Lalamove",
      notes: "",
      urlCart: "http://localhost:3000/cart",
      urlOrder: "http://localhost:3000/order",
    };
  },
  mounted() {
    this.fetchOrders();
  },
  components: {
    CardShipping,
    CardSummary,
  },
  methods: {
    fetchOrders() {
      fetch(this.urlCart)
        .then((res) => res.json())
        .then((data) => {
          this.order = data;
          this.total = 0;
          this.discount = 0;
          this.totalAmt = 0;

          for (var i = 0; i < this.order.length; i++) {
            this.total += this.order[i].qty * this.order[i].price;

            if (this.order[i].category === "photocards") {
              this.discount += this.order[i].qty * 5;
            }
          }

          this.totalAmt = this.total - this.discount;
        })
        .catch((err) => console.log(err.message));
    },
    checkForm: function (e) {
      if (this.fullname && this.handler && this.email && this.phone && this.address && this.city && this.postalCode) {
       this.placeOrder();
      }

      this.errors = [];

      if (!this.fullname || !this.fullname.match(/\w/)) {
        this.errors.push({'errorId':'name','errorMsg':'Name is required.'});
      }
      if (!this.handler || !this.handler.match(/\w/)) {
        this.errors.push({'errorId':'handler','errorMsg':'Twitter/Instagram handler is required.'});
      }
      if (!this.email || !this.email.match(/\w/)) {
        this.errors.push({'errorId':'email','errorMsg':'Email is required.'});
      }
      if (!this.phone) {
        this.errors.push({'errorId':'phone','errorMsg':'Cellphone number is required.'});
      }
      if (!this.address || !this.address.match(/\w/)) {
        this.errors.push({'errorId':'address','errorMsg':'Full Address is required.'});
      }
      if (!this.city || !this.city.match(/\w/)) {
        this.errors.push({'errorId':'city','errorMsg':'City is required.'});
      }
      if (!this.postalCode) {
        this.errors.push({'errorId':'postalCode','errorMsg':'Postal code is required.'});
      }
      e.preventDefault();
    },
    saveData(event){
      if(event.id === "name"){
        this.fullname = event.value
        console.log("name: " + this.fullname)
      }
      if(event.id === "handler"){
        this.handler = event.value
        console.log("handler: "+this.handler)
      }
      if(event.id === "email"){
        this.email = event.value
        console.log("email: "+this.email)
      }
      if(event.id === "phone"){
        this.phone = event.value
        console.log("phone: "+this.phone)
      }
      if(event.id === "address"){
        this.address = event.value
        console.log("address: "+this.address)
      }
      if(event.id === "city"){
        this.city = event.value
        console.log("city: "+this.city)
      }
      if(event.id === "postalCode"){
        this.postalCode = event.value
        console.log("postalCode: "+this.postalCode)
      }
      if(event.id === "notes"){
        this.notes = event.value
        console.log("notes: "+this.notes)
      }
      if(event.id === "modeOfPayment"){
        this.modeOfPayment = event.value
        console.log("modeOfPayment: "+this.modeOfPayment)
      }
      if(event.id === "modeOfDelivery"){
        this.modeOfDelivery = event.value
        console.log("modeOfDelivery: "+this.modeOfDelivery)
      }
    },
    getErrMsg(a) {
        if(!this.errors.length == 0)
        {
          var errList = this.errors.find((error) => error.errorId === a);
          return errList
        }        
    },
    placeOrder: function() {
      this.orderId = (this.date.getFullYear()+""+(this.date.getMonth()+1)+""+this.date.getDate()+""+this.date.getHours()+""+this.date.getMinutes()+""+this.date.getSeconds()).toString();

      fetch(this.urlOrder, {
        method: 'POST',
        body: JSON.stringify({
          id: this.id,
          orderId: this.orderId,
          subtotal: this.total,
          discount: this.discount,
          totalAmt: this.totalAmt,
          fullname: this.fullname,
          handler: this.handler,
          email: this.email,
          phone: this.phone,
          address: this.address,
          city: this.city,
          postalCode: this.postalCode,
          modeOfPayment: this.modeOfPayment,
          modeOfDelivery: this.modeOfDelivery,
          notes: this.notes,
          orderedItems: this.order,
        }),
        
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err.message));

      this.clearCartItems();
    },
    clearCartItems(e){
      for (var i = 0; i< this.order.length; i++){
        console.log(this.order.id);
        fetch(this.urlCart + this.order[i].id, {
          method: "DELETE",
        }).then((response) => {
          this.fetchOrders();
          return response;
        });
      }
      e.submit();
    }
  },
};
</script>
<style>
</style>
<template>
  <div class="flex flex-wrap container mx-auto">
    <div class="w-full md:w-6/12 mx-auto px-4">
      <div
        class="
          relative
          flex flex-col
          min-w-0
          break-words
          w-full
          mb-6
          shadow-lg
          rounded-lg
          bg-slate-100
          border-0
        "
      >
        <div class="rounded bg-white mb-0 px-2 py-6 lg:px-6 lg:py-6">
          <div class="container mx-auto px-0 lg:px-4">
            <div class="items-center text-center justify-center flex flex-wrap">
              <div class="w-full px-4">
                <div
                  class="
                    text-purple-600
                    p-3
                    inline-flex
                    items-center
                    justify-center
                    w-16
                    h-16
                    mb-6
                    shadow-lg
                    rounded-full
                    bg-secondary
                  "
                >
                  <i class="fas fa-shopping-bag text-xl lg:text-3xl"></i>
                </div>
                <h3 class="text-xl lg:text-3xl font-bold text-primary">
                  We have received your order!
                </h3>
                <p class="text-md lg:text-lg text-primary text-justify md:text-center">
                  <br />
                  Please kindly settle your bill and email us the screenshot of
                  your proof of payment. If you have a custom order/preferred
                  photos, kindly email it together with your proof of payment.
                </p>
                <p class="mt-2 text-md md:text-lg text-primary text-justify md:text-center">
                  Use the Order ID below as the subject of your email.
                </p>
                <a
                  @click="sendEmail"
                  class="text-purple-600 font-bold cursor-pointer"
                  >nandemokawaii.ph@gmail.com</a
                >

                <div class="flex flex-wrap items-start mt-2">
                  <div class="w-full md:w-6/12">
                    <ul class="list-none mt-2">
                      <li class="py-2">
                        <div class="flex items-center">
                          <div>
                            <span
                              class="
                                text-xs
                                font-semibold
                                inline-block
                                px-1
                                py-1
                                w-6
                                h-6
                                uppercase
                                rounded-full
                                text-purple-600
                                bg-secondary
                                mr-3
                              "
                            >
                              <i class="fas fa-barcode"></i>
                            </span>
                          </div>
                          <div>
                            <h4
                              class="inline-block font-medium text-primary mr-2"
                            >
                              OrderID:
                            </h4>
                            <span
                              class="inline-block font-bold text-purple-600"
                            >
                              {{ this.id }}</span
                            >
                          </div>
                        </div>
                      </li>
                      <li class="py-2">
                        <div class="flex items-center">
                          <div>
                            <span
                              class="
                                text-xs
                                font-semibold
                                inline-block
                                px-1
                                py-1
                                w-6
                                h-6
                                uppercase
                                rounded-full
                                text-purple-600
                                bg-secondary
                                mr-3
                              "
                            >
                              <i class="fas fa-tag"></i>
                            </span>
                          </div>
                          <div>
                            <h4
                              class="inline-block font-medium text-primary mr-2"
                            >
                              Total Amount:
                            </h4>
                            <span class="inline-block font-bold text-purple-600"
                              >₱
                              {{ parseFloat(order.totalAmt).toFixed(2) }}</span
                            >
                          </div>
                        </div>
                      </li>
                      <li class="py-2">
                        <div class="flex items-center">
                          <div>
                            <span
                              class="
                                text-xs
                                font-semibold
                                inline-block
                                px-1
                                py-1
                                w-6
                                h-6
                                uppercase
                                rounded-full
                                text-purple-600
                                bg-secondary
                                mr-3
                              "
                            >
                              <i class="fas fa-receipt"></i>
                            </span>
                          </div>
                          <div>
                            <div>
                              <h4
                                class="
                                  inline-block
                                  font-medium
                                  text-primary
                                  mr-2
                                "
                              >
                                Mode of Payment:
                              </h4>
                              <span
                                class="inline-block font-bold text-purple-600"
                                >{{ this.order.modeOfPayment }}</span
                              >
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="py-2">
                        <div class="flex items-start">
                          <div>
                            <span
                              class="
                                text-xs
                                font-semibold
                                inline-block
                                px-1
                                py-1
                                w-6
                                h-6
                                uppercase
                                rounded-full
                                text-purple-600
                                bg-secondary
                                mr-3
                              "
                            >
                              <i class="fas fa-shipping-fast"></i>
                            </span>
                          </div>
                          <div>
                            <div class="text-left">
                              <h4
                                class="
                                  inline-block
                                  font-medium
                                  text-primary
                                  mr-2
                                  
                                "
                              >
                              Mode of Delivery:
                              </h4>
                              <span
                                class="inline-block font-bold text-purple-600"
                                >{{ this.order.modeOfDelivery }}</span
                              >
                            
                            <p class="text-xs text-left text-primary">Shipping Fee will be discussed thru DM/Email.</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="w-full md:w-6/12">
                    <div v-if="this.order.modeOfPayment === 'GCash'">
                      <div class="w-6/12 mx-auto mt-4">
                        <div class="">
                          <img alt="GCashQR" :src="GCashQR" class="ml-2 mb-1" />
                        </div>
                      </div>
                      <p class="text-purple-600 text-sm font-bold indent-3">
                        Scan the QR Code to pay.
                      </p>
                      <p class="text-purple-600 text-xs indent-3">
                        Not working? <a href="">Click here.</a>
                      </p>
                    </div>
                    <div v-if="this.order.modeOfPayment === 'BDO'">
                      <div class="">
                        <div class="">
                          <img alt="BDOQR" :src="BDOQR" class="ml-2 mb-1" />
                        </div>
                      </div>
                      <p class="text-purple-600 text-sm font-bold indent-3">
                        Scan the QR Code to pay.
                      </p>
                      <p class="text-purple-600 text-xs indent-3">
                        Not working? <a href="">Click here.</a>
                      </p>
                    </div>
                  </div>
                </div>
                <p class="mt-4 lg:mt-7 text-md lg:text-lg leading-relaxed text-primary">
                  If you have any questions or concerns, please do not hesitate
                  to contact us thru the following channels:
                </p>
                <div
                  class="
                    flex
                    mt-4
                    lg:mb-0
                    mb-6
                    items-center
                    align-center
                    justify-center
                  "
                >
                  <button
                    class="
                      bg-secondary
                      shadow-lg
                      font-normal
                      h-10
                      w-10
                      items-center
                      justify-center
                      align-center
                      rounded-full
                      outline-none
                      focus:outline-none
                      mr-2
                    "
                    type="button"
                    @click="openShopee()"
                  >
                    <img
                      alt="shopee"
                      :src="shopeeLogo"
                      class="h-6 w-6 ml-2 mb-1"
                    />
                  </button>
                  <button
                    class="
                      bg-secondary
                      text-purple-600
                      shadow-lg
                      font-normal
                      h-10
                      w-10
                      items-center
                      justify-center
                      align-center
                      rounded-full
                      outline-none
                      focus:outline-none
                      mr-2
                    "
                    type="button"
                    @click="openTwitter()"
                  >
                    <i class="fab fa-twitter"></i>
                  </button>
                  <button
                    class="
                      bg-secondary
                      text-purple-600
                      shadow-lg
                      font-normal
                      h-10
                      w-10
                      items-center
                      justify-center
                      align-center
                      rounded-full
                      outline-none
                      focus:outline-none
                      mr-2
                    "
                    type="button"
                    @click="openInstagram()"
                  >
                    <i class="fab fa-instagram"></i>
                  </button>
                  <button
                    class="
                      bg-secondary
                      text-purple-600
                      shadow-lg
                      font-normal
                      h-10
                      w-10
                      items-center
                      justify-center
                      align-center
                      rounded-full
                      outline-none
                      focus:outline-none
                      mr-2
                    "
                    type="button"
                    @click="sendEmail()"
                  >
                    <i class="fab fa-google-plus-g"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import shopeeLogo from "@/assets/img/icons/shopee-purple-600.png";
import GCashQR from "@/assets/img/qrCode/gcash.png";
import BDOQR from "@/assets/img/qrCode/bdo.png";

export default {
  name: "checkout-complete-page",
  data() {
    return {
      order: [],
      shopeeLogo,
      GCashQR,
      BDOQR,
      id: this.$route.params.id,
      url: '',
      urlOrder: 'http://localhost:3000/order/',
    };
  },
  mounted() {
    this.fetchOrders();
  },
  components: {},
  methods: {
    fetchOrders() {
      this.url = this.url.length === 0 ? this.urlOrder : this.url
      fetch(this.url)
        .then((res) => res.json())
        .then((data) => {
          this.order = data;

          this.order = this.order.find((order) => order.orderId === this.id);
          console.log(this.order);
        })
        .catch((err) => console.log(err.message));
    },
    openShopee() {
      window.location = "https://shp.ee/qqtzjwr";
    },
    openTwitter() {
      window.location = "https://twitter.com/NandemokawaiiPH";
    },
    openInstagram() {
      window.location = "https://instagram.com/nandemokawaii.ph";
    },
    sendEmail() {
      window.location = "mailto:nandemokawaii.ph@gmail.com?subject=" + this.id;
    },
  },
};
</script>
<style>
</style>
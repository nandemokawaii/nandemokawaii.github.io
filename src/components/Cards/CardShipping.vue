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
      rounded-lg
      bg-slate-100
      border-0
    "
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-primary text-xl font-bold">Shipping Information</h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form id="orderForm" method="post">
        <h6
          class="
            text-primary text-sm
            mt-3
            mb-6
            font-bold
            uppercase
            after:content-['*'] after:text-red-600
          "
        >
          User Information
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-primary text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Name
              </label>
              <input
                type="text"
                class="
                  border-0
                  px-3
                  py-3
                  placeholder-slate-300
                  text-primary
                  bg-white
                  rounded
                  text-sm
                  shadow
                  focus:outline-none focus:ring
                  w-full
                  ease-linear
                  transition-all
                  duration-150
                "
                placeholder="Tom Hiddleston Marvolo"
                required
                id="name"
                name="name"
                @change="$emit('inputChanged', $event.target)"
              />
              <span v-if="errors" class="text-xs font-semibold text-red-600">{{
                getErrMsg("name")
              }}</span>
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-primary text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Twitter / Instagram Handler
              </label>
              <input
                type="text"
                class="
                  border-0
                  px-3
                  py-3
                  placeholder-slate-300
                  text-primary
                  bg-white
                  rounded
                  text-sm
                  shadow
                  focus:outline-none focus:ring
                  w-full
                  ease-linear
                  transition-all
                  duration-150
                "
                placeholder="@tommarvolo"
                required
                id="handler"
                name="handler"
                @change="$emit('inputChanged', $event.target)"
              />
              <span v-if="errors" class="text-xs font-semibold text-red-600">{{
                getErrMsg("handler")
              }}</span>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-primary text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Email address
              </label>
              <input
                type="email"
                class="
                  border-0
                  px-3
                  py-3
                  placeholder-slate-300
                  text-primary
                  bg-white
                  rounded
                  text-sm
                  shadow
                  focus:outline-none focus:ring
                  w-full
                  ease-linear
                  transition-all
                  duration-150
                "
                placeholder="nandemokawaii.ph@gmail.com"
                required
                id="email"
                name="email"
                @change="$emit('inputChanged', $event.target)"
              />
              <span v-if="errors" class="text-xs font-semibold text-red-600">{{
                getErrMsg("email")
              }}</span>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-primary text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Contact Number
              </label>
              <input
                type="number"
                class="
                  border-0
                  px-3
                  py-3
                  placeholder-slate-300
                  text-primary
                  bg-white
                  rounded
                  text-sm
                  shadow
                  focus:outline-none focus:ring
                  w-full
                  ease-linear
                  transition-all
                  duration-150
                "
                pattern="^(09)\d{9}$"
                placeholder="09xxxxxxxxx"
                required
                id="phone"
                name="phone"
                @change="$emit('inputChanged', $event.target)"
              />
              <span v-if="errors" class="text-xs font-semibold text-red-600">{{
                getErrMsg("phone")
              }}</span>
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-slate-300" />

        <h6
          class="
            text-primary text-sm
            mt-3
            mb-6
            font-bold
            uppercase
            after:content-['*'] after:text-red-600
          "
        >
          Contact Information
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-primary text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Address
              </label>
              <input
                type="text"
                class="
                  border-0
                  px-3
                  py-3
                  placeholder-slate-300
                  text-primary
                  bg-white
                  rounded
                  text-sm
                  shadow
                  focus:outline-none focus:ring
                  w-full
                  ease-linear
                  transition-all
                  duration-150
                "
                placeholder="Complete Address"
                required
                id="address"
                name="address"
                @change="$emit('inputChanged', $event.target)"
              />
              <span v-if="errors" class="text-xs font-semibold text-red-600">{{
                getErrMsg("address")
              }}</span>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-primary text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                City
              </label>
              <input
                type="email"
                class="
                  border-0
                  px-3
                  py-3
                  placeholder-slate-300
                  text-primary
                  bg-white
                  rounded
                  text-sm
                  shadow
                  focus:outline-none focus:ring
                  w-full
                  ease-linear
                  transition-all
                  duration-150
                "
                placeholder="City"
                required
                id="city"
                name="city"
                @change="$emit('inputChanged', $event.target)"
              />
              <span v-if="errors" class="text-xs font-semibold text-red-600">{{
                getErrMsg("city")
              }}</span>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-primary text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Postal Code
              </label>
              <input
                type="number"
                class="
                  border-0
                  px-3
                  py-3
                  placeholder-slate-300
                  text-primary
                  bg-white
                  rounded
                  text-sm
                  shadow
                  focus:outline-none focus:ring
                  w-full
                  ease-linear
                  transition-all
                  duration-150
                "
                placeholder="Postal Code"
                required
                id="postalCode"
                name="postalCode"
                @change="$emit('inputChanged', $event.target)"
              />
              <span v-if="errors" class="text-xs font-semibold text-red-600">{{
                getErrMsg("postalCode")
              }}</span>
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-slate-300" />

        <h6
          class="
            text-primary text-sm
            mt-3
            mb-6
            font-bold
            uppercase
            after:content-['*'] after:text-red-600
          "
        >
          Mode of Payment
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <input
                class="
                  form-check-input
                  appearance-none
                  rounded-full
                  h-4
                  w-4
                  border border-gray-300
                  bg-white
                  checked:bg-primary checked:border-primary
                  focus:outline-none
                  transition
                  duration-200
                  mt-1
                  align-top
                  bg-no-repeat bg-center bg-contain
                  float-left
                  mr-2
                  cursor-pointer
                "
                type="radio"
                name="modeOfPayment"
                id="modeOfPayment"
                value="GCash"
                @change="$emit('inputChanged', $event.target)"
                checked
              />
              <label
                class="form-check-label inline-block text-primary"
                for="modeOfPayment"
              >
                GCash
              </label>
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <input
                class="
                  form-check-input
                  appearance-none
                  rounded-full
                  h-4
                  w-4
                  border border-gray-300
                  bg-white
                  checked:bg-primary checked:border-primary
                  focus:outline-none
                  transition
                  duration-200
                  mt-1
                  align-top
                  bg-no-repeat bg-center bg-contain
                  float-left
                  mr-2
                  cursor-pointer
                "
                type="radio"
                name="modeOfPayment"
                id="modeOfPayment"
                value="BDO"
                @change="$emit('inputChanged', $event.target)"
              />
              <label
                class="form-check-label inline-block text-primary"
                for="modeOfPayment"
              >
                BDO
              </label>
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <input
                class="
                  form-check-input
                  appearance-none
                  rounded-full
                  h-4
                  w-4
                  border border-gray-300
                  bg-white
                  checked:bg-primary checked:border-primary
                  focus:outline-none
                  transition
                  duration-200
                  mt-1
                  align-top
                  bg-no-repeat bg-center bg-contain
                  float-left
                  mr-2
                  cursor-pointer
                "
                type="radio"
                name="modeOfPayment"
                id="modeOfPayment"
                value="Metrobank"
                @change="$emit('inputChanged', $event.target)"
              />
              <label
                class="form-check-label inline-block text-primary"
                for="modeOfPayment"
              >
                Metrobank
              </label>
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-slate-300" />

        <h6
          class="
            text-primary text-sm
            mt-3
            mb-6
            font-bold
            uppercase
            after:content-['*'] after:text-red-600
          "
        >
          Mode of Delivery
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <input
                class="
                  form-check-input
                  appearance-none
                  rounded-full
                  h-4
                  w-4
                  border border-gray-300
                  bg-white
                  checked:bg-primary checked:border-primary
                  focus:outline-none
                  transition
                  duration-200
                  mt-1
                  align-top
                  bg-no-repeat bg-center bg-contain
                  float-left
                  mr-2
                  cursor-pointer
                "
                type="radio"
                name="modeOfDelivery"
                id="modeOfDelivery"
                value="Lalamove"
                @change="$emit('inputChanged', $event.target)"
                checked
              />
              <label
                class="form-check-label inline-block text-primary"
                for="modeOfDelivery"
              >
                Lalamove
              </label>
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <input
                class="
                  form-check-input
                  appearance-none
                  rounded-full
                  h-4
                  w-4
                  border border-gray-300
                  bg-white
                  checked:bg-primary checked:border-primary
                  focus:outline-none
                  transition
                  duration-200
                  mt-1
                  align-top
                  bg-no-repeat bg-center bg-contain
                  float-left
                  mr-2
                  cursor-pointer
                "
                type="radio"
                name="modeOfDelivery"
                id="modeOfDelivery"
                value="J&T"
                @change="$emit('inputChanged', $event.target)"
              />
              <label
                class="form-check-label inline-block text-primary"
                for="modeOfDelivery"
              >
                J & T Express
              </label>
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <input
                class="
                  form-check-input
                  appearance-none
                  rounded-full
                  h-4
                  w-4
                  border border-gray-300
                  bg-white
                  checked:bg-primary checked:border-primary
                  focus:outline-none
                  transition
                  duration-200
                  mt-1
                  align-top
                  bg-no-repeat bg-center bg-contain
                  float-left
                  mr-2
                  cursor-pointer
                "
                type="radio"
                name="modeOfDelivery"
                id="modeOfDelivery"
                value="LBC"
                @change="$emit('inputChanged', $event.target)"
              />
              <label
                class="form-check-label inline-block text-primary"
                for="modeOfDelivery"
              >
                LBC
              </label>
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <input
                class="
                  form-check-input
                  appearance-none
                  rounded-full
                  h-4
                  w-4
                  border border-gray-300
                  bg-white
                  checked:bg-primary checked:border-primary
                  focus:outline-none
                  transition
                  duration-200
                  mt-1
                  align-top
                  bg-no-repeat bg-center bg-contain
                  float-left
                  mr-2
                  cursor-pointer
                "
                type="radio"
                name="modeOfDelivery"
                id="modeOfDelivery"
                value="Grab"
                @change="$emit('inputChanged', $event.target)"
              />
              <label
                class="form-check-label inline-block text-primary"
                for="modeOfDelivery"
              >
                Grab
              </label>
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <input
                class="
                  form-check-input
                  appearance-none
                  rounded-full
                  h-4
                  w-4
                  border border-gray-300
                  bg-white
                  checked:bg-primary checked:border-primary
                  focus:outline-none
                  transition
                  duration-200
                  mt-1
                  align-top
                  bg-no-repeat bg-center bg-contain
                  float-left
                  mr-2
                  cursor-pointer
                "
                type="radio"
                name="modeOfDelivery"
                id="modeOfDelivery"
                value="Abest"
                @change="$emit('inputChanged', $event.target)"
              />
              <label
                class="form-check-label inline-block text-primary"
                for="modeOfDelivery"
              >
                Abest Express
              </label>
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <input
                class="
                  form-check-input
                  appearance-none
                  rounded-full
                  h-4
                  w-4
                  border border-gray-300
                  bg-white
                  checked:bg-primary checked:border-primary
                  focus:outline-none
                  transition
                  duration-200
                  mt-1
                  align-top
                  bg-no-repeat bg-center bg-contain
                  float-left
                  mr-2
                  cursor-pointer
                "
                type="radio"
                name="modeOfDelivery"
                id="modeOfDelivery"
                value="JRS"
                @change="$emit('inputChanged', $event.target)"
              />
              <label
                class="form-check-label inline-block text-primary"
                for="modeOfDelivery"
              >
                JRS
              </label>
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <input
                class="
                  form-check-input
                  appearance-none
                  rounded-full
                  h-4
                  w-4
                  border border-gray-300
                  bg-white
                  checked:bg-primary checked:border-primary
                  focus:outline-none
                  transition
                  duration-200
                  mt-1
                  align-top
                  bg-no-repeat bg-center bg-contain
                  float-left
                  mr-2
                  cursor-pointer
                "
                type="radio"
                name="modeOfDelivery"
                id="modeOfDelivery"
                value="Angkas"
                @change="$emit('inputChanged', $event.target)"
              />
              <label
                class="form-check-label inline-block text-primary"
                for="modeOfDelivery"
              >
                Angkas
              </label>
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <input
                class="
                  form-check-input
                  appearance-none
                  rounded-full
                  h-4
                  w-4
                  border border-gray-300
                  bg-white
                  checked:bg-primary checked:border-primary
                  focus:outline-none
                  transition
                  duration-200
                  mt-1
                  align-top
                  bg-no-repeat bg-center bg-contain
                  float-left
                  mr-2
                  cursor-pointer
                "
                type="radio"
                name="modeOfDelivery"
                id="modeOfDelivery"
                value="Shopee"
                @change="$emit('inputChanged', $event.target)"
              />
              <label
                class="form-check-label inline-block text-primary"
                for="modeOfDelivery"
              >
                Addtl Order in Shopee
              </label>
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <input
                class="
                  form-check-input
                  appearance-none
                  rounded-full
                  h-4
                  w-4
                  border border-gray-300
                  bg-white
                  checked:bg-primary checked:border-primary
                  focus:outline-none
                  transition
                  duration-200
                  mt-1
                  align-top
                  bg-no-repeat bg-center bg-contain
                  float-left
                  mr-2
                  cursor-pointer
                "
                type="radio"
                name="modeOfDelivery"
                id="modeOfDelivery"
                value="Pickup"
                @change="$emit('inputChanged', $event.target)"
              />
              <label
                class="form-check-label inline-block text-primary"
                for="modeOfDelivery"
              >
                Self-Pickup
              </label>
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-slate-300" />

        <h6 class="text-primary text-sm mt-3 mb-6 font-bold uppercase">
          Message to Seller
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-primary text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Notes
              </label>
              <textarea
                type="text"
                class="
                  border-0
                  px-3
                  py-3
                  placeholder-slate-300
                  text-primary
                  bg-white
                  rounded
                  text-sm
                  shadow
                  focus:outline-none focus:ring
                  w-full
                  ease-linear
                  transition-all
                  duration-150
                "
                rows="4"
                placeholder="If you have any requests, questions, violent reactions, or comments, you can write it here."
                id="notes"
                name="notes"
                @change="$emit('inputChanged', $event.target)"
              >
              </textarea>
            </div>
          </div>
        </div>
      </form>
      <hr class="mt-6 border-b-1 border-slate-300" />

      <h6 class="text-primary text-sm mt-3 mb-6 font-bold uppercase">
        Reminders
      </h6>
      <div class="flex flex-wrap">
        <div class="w-full lg:w-12/12 px-4">
          <div class="relative w-full mb-3 text-primary">
            <p>
              ❧ Please be advised that is this <b>Made-To-Order</b> unless
              stated otherwise.
            </p>
            <p>
              ❧ We strictly implement <b>NO joy reservers or bogus buyers</b>.
            </p>
            <p>
              ❧ Make sure that you are <b>10000% sure</b> with your order and
              your shipping details are correct.
            </p>
            <p>
              ❧ We <b>do NOT</b> allow rush orders and we <b>do NOT</b> accept
              edit requests.
            </p>
            <p>
              ❧ <b>For customized</b>, please send your preferred photos at:
              <b> nandemokawaii.ph@gmail.com</b>
            </p>
            <p class="indent-5">
              Use your <b>Order ID</b> as the subject of your email. It can be
              found in your order details after place order.
            </p>
            <p class="indent-5 text-sm">E.g.: Order ID #xxxxxx</p>
            <p>
              ❧ <b>Shipping Fee</b> will be discussed thru <b>PM/DM</b> after
              your payment has been confirmed.
            </p>
            <p>
              ❧ Allow us to work on your order for <b>2 - 4 working days</b> as
              we don't know when we will be busy.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    errors: {
      type: Array,
    },
    getErrMsg: {
      type: Function,
    },
  },
  created() {
 
  },
  methods: {
    
  },
  data() {
    return {};
  },
};
</script>
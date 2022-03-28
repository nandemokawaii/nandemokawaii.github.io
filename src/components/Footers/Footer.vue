<template>
  <footer class="relative bg-primary pt-8 pb-6">
    <div
      class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
      style="transform: translateZ(0);"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-primary fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-center lg:text-left">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl text-white font-semibold">Get in touch with us!</h4>
          <h5 class="text-lg mt-0 mb-2 text-white">
            Find us on any of these platforms, we will respond as soon as we read your message. Usually, within 1 - 2 business days.
          </h5>
          <div class="flex mt-6 lg:mb-0 mb-6 items-center align-center justify-center md:justify-start">
            <button
              class="bg-white text-shopee-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
              @click="openShopee()"
            >
              <img alt="shopee" :src="shopeeLogo" class="h-6 w-6 ml-2 mb-1"  />
            </button>
            <button
              class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
              @click="openTwitter()"
            >
              <i class="fab fa-twitter"></i>
            </button>
            <button
              class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
              @click="openInstagram()"
            >
              <i class="fab fa-instagram"></i>
            </button>
            <button
              class="bg-white text-red-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
              @click="sendEmail()"
            >
              <i class="fab fa-google-plus-g"></i>
            </button>
          </div>
        </div>
        <!-- <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span
                class="block uppercase text-slate-200 text-sm font-bold mb-2"
              >
                Useful Links
              </span>
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-slate-200 hover:text-slate-200 font-semibold block pb-2 text-sm"
                    href="https://www.creative-tim.com/presentation?ref=vn-footer"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    class="text-slate-200 hover:text-slate-200 font-semibold block pb-2 text-sm"
                    href="https://blog.creative-tim.com?ref=vn-footer"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    class="text-slate-200 hover:text-slate-200 font-semibold block pb-2 text-sm"
                    href="https://www.github.com/creativetimofficial?ref=vn-footer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    class="text-slate-200 hover:text-slate-200 font-semibold block pb-2 text-sm"
                    href="https://www.creative-tim.com/bootstrap-themes/free?ref=vn-footer"
                  >
                    Free Products
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <span
                class="block uppercase text-slate-500 text-sm font-semibold mb-2"
              >
                Other Resources
              </span>
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                    href="https://github.com/creativetimofficial/vue-notus/blob/main/LICENSE.md?ref=vn-footer"
                  >
                    MIT License
                  </a>
                </li>
                <li>
                  <a
                    class="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/terms?ref=vn-footer"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    class="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/privacy?ref=vn-footer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    class="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/contact-us?ref=vn-footer"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> -->
      </div>
      <hr class="my-6 border-slate-300" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-white font-semibold py-1">
            Copyright © {{ date }} <i class="fas fa-heart text-xs"></i> Nandemokawaii PH
            <br />Template by
            <a
              href="https://www.creative-tim.com?ref=vn-footer"
              class="text-white hover:text-slate-800"
            >
              Creative Tim
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import shopeeLogo from "@/assets/img/icons/shopee.png";

export default {
  data() {
    return {
      date: new Date().getFullYear(),
      shopeeLogo,
    };
  },
  methods: {
    openShopee(){
      window.location = "https://shp.ee/qqtzjwr";
    },
    openTwitter(){
      window.location = "https://twitter.com/NandemokawaiiPH";
    },
    openInstagram(){
      window.location = "https://instagram.com/nandemokawaii.ph";
    },
    sendEmail(){
      window.location = "mailto:nandemokawaii.ph@gmail.com";
    }
  }
};
</script>

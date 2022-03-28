<template>
  <div>
    <index-navbar />
    <section
      class="header relative pt-16 items-center flex h-screen max-h-860-px"
    >
      <div class="container mx-auto items-center flex flex-wrap">
        <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div class="pt-32 sm:pt-0">
            <h2 class="font-semibold text-4xl text-primary">
              Welcome to Nandemokawaii PH
            </h2>
            <p class="mt-4 text-lg leading-relaxed text-primary">
              Our shop aims to provide high-quality products for events such as
              cupsleeve events, birthday events and other events that gives out
              freebies or gifts. In line with that, we do hope that we can
              provide little happiness for our customers who wants to have an
              affordable merch or gifts for themselves.
            </p>
            <div class="sm:block flex flex-col my-10 pb-10">
              <a
                href="https://shp.ee/qqtzjwr"
                target="_blank"
                class="
                  get-started
                  text-white
                  font-bold
                  px-6
                  py-4
                  m-2
                  rounded
                  outline-none
                  focus:outline-none
                  bg-shopee-600
                  active:bg-shopee-100
                  uppercase
                  text-sm
                  text-center
                  shadow
                  hover:shadow-lg
                  ease-linear
                  transition-all
                  duration-150
                "
              >
                Buy on Shopee
              </a>
              <router-link
                class="
                  text-white
                  font-bold
                  px-6
                  py-4
                  m-2
                  rounded
                  outline-none
                  focus:outline-none
                  bg-primary
                  active:bg-secondary
                  uppercase
                  text-sm
                  text-center
                  shadow
                  hover:shadow-lg
                  ease-linear
                  transition-all
                  duration-150
                "
                :to="{ name: 'shop' }"
              >
                View our Products
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <img
        class="
          absolute
          top-0
          b-auto
          right-0
          pt-16
          max-h-860-px
          invisible 
          md:visible
        "
        :src="patternFlower"
        alt="..."
      />
    </section>

    <section class="mt-48 md:mt-40 pb-20 md:pb-28 relative bg-slate-100">
      <div
        class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
        style="transform: translateZ(0)"
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
            class="text-slate-100 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div class="container mx-auto">
        <div class="flex flex-wrap items-center">
          <div
            class="
              w-10/12
              md:w-6/12
              lg:w-4/12
              px-2
              md:px-12
              mr-auto
              ml-auto
              -mt-32
            "
          >
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
                bg-primary
              "
            >
              <img
                alt="..."
                :src="events"
                class="w-full align-middle rounded-t-lg"
              />
              <blockquote class="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  class="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    class="text-primary fill-current"
                  ></polygon>
                </svg>
                <h4 class="text-xl font-bold text-white">Perfect for Events</h4>
                <p class="text-md font-light mt-2 text-white">
                  Our products are perfect gifts and freebies for cupsleeve
                  events!
                </p>
              </blockquote>
            </div>
          </div>

          <div class="w-full md:w-6/12 px-4">
            <div class="flex flex-wrap">
              <div class="w-full md:w-6/12 px-4">
                <div class="relative flex flex-col mt-4">
                  <div class="px-4 py-5 flex-auto">
                    <div
                      class="
                        text-primary
                        p-3
                        text-center
                        inline-flex
                        items-center
                        justify-center
                        w-12
                        h-12
                        mb-5
                        shadow-lg
                        rounded-full
                        bg-white
                      "
                    >
                      <i class="far fa-id-badge"></i>
                    </div>
                    <h6 class="text-xl text-primary mb-1 font-semibold">
                      Photocards | Polaroids
                    </h6>
                    <p class="mb-4 text-slate-500">
                      <Tag label="Coated" />
                      <Tag label="Laminated" />
                      <Tag label="Matte" />
                      <Tag label="Glittered" />
                      <Tag label="Holographic" />
                    </p>
                  </div>
                </div>
                <div class="relative flex flex-col min-w-0">
                  <div class="px-4 py-5 flex-auto">
                    <div
                      class="
                        text-primary
                        p-3
                        text-center
                        inline-flex
                        items-center
                        justify-center
                        w-12
                        h-12
                        mb-5
                        shadow-lg
                        rounded-full
                        bg-white
                      "
                    >
                      <i class="fas fa-bookmark"></i>
                    </div>
                    <h6 class="text-xl text-primary mb-1 font-semibold">
                      Bookmarks
                    </h6>
                    <p class="mb-4 text-slate-500">
                      <Tag label="Coated" />
                      <Tag label="Laminated" />
                      <Tag label="Matte" />
                      <Tag label="Glittered" />
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-6/12 px-4">
                <div class="relative flex flex-col min-w-0 mt-4">
                  <div class="px-4 py-5 flex-auto">
                    <div
                      class="
                        text-primary
                        p-3
                        text-center
                        inline-flex
                        items-center
                        justify-center
                        w-12
                        h-12
                        mb-5
                        shadow-lg
                        rounded-full
                        bg-white
                      "
                    >
                      <i class="fas fa-grip-vertical"></i>
                    </div>
                    <h6 class="text-xl text-primary mb-1 font-semibold">
                      Postcards | Photostrips
                    </h6>
                    <p class="mb-4 text-slate-500">
                      <Tag label="Coated" />
                      <Tag label="Laminated" />
                      <Tag label="Matte" />
                      <Tag label="Glittered" />
                    </p>
                  </div>
                </div>
                <div class="relative flex flex-col min-w-0">
                  <div class="px-4 py-5 flex-auto">
                    <div
                      class="
                        text-primary
                        p-3
                        text-center
                        inline-flex
                        items-center
                        justify-center
                        w-12
                        h-12
                        mb-5
                        shadow-lg
                        rounded-full
                        bg-white
                      "
                    >
                      <i class="fas fa-file-image"></i>
                    </div>
                    <h6 class="text-xl text-primary mb-1 font-semibold">
                      Posters
                    </h6>
                    <p class="mb-4 text-slate-500">
                      <Tag label="Coated" />
                      <Tag label="Laminated" />
                      <Tag label="Matte" />
                      <Tag label="Glittered" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-20 md:mt-20 pb-28 relative bg-white">
      <div
        class="-mt-20 md:-mt-40 top-0 bottom-auto left-0 right-0 w-full absolute md:h-20"
        style="transform: translateZ(0)"
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
            class="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
        <div class="justify-center text-center flex flex-wrap">
          <div class="w-full md:w-6/12 px-12 md:px-4">
            <h2 class="font-semibold text-4xl mt-5">Reviews</h2>
            <p class="text-lg leading-relaxed mt-4 mb-4 text-slate-500">
              Here are some of the reviews that comes from our customers.
            </p>
          </div>
        </div>
        <section class="pb-20 md:pb-48 mt-5">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap">
              <Review
                username="arxjanella"
                platform="From Shopee"
                src="https://cf.shopee.ph/file/04a2459b083f744ed2a3a612e06f90e3"
                review="ang ganda!! 😭♥️👌🏻 kung pwede lang po magbigay ng 10 stars, binigay ko na po wahahaha. napakabait and accommodating ni seller~ as in! well packaged ang items kaya nakarating sa akin ng walang damage & may freebie pa! ♥️ maganda ang both types ⭐ more werpa talaga to your shop, seller! u da mvp~! 👑"
              />

              <Review
                username="@IC_1816"
                platform="From Twitter"
                src="https://cf.shopee.ph/file/6f839baed74ceecd07badde30a929317"
                review="I was so stress today for month end closing 😭. But when I received I automatically smile while opening 😁😄😉 Made my day 💜💜💜 Super love the quality of your products as always Thank you so much @NandemokawaiiPH Also for the freebies #IU #UAENA"
              />

              <Review
                username="kaisanvalentin"
                platform="From Shopee"
                src="https://cf.shopee.ph/file/ad2c303c7ecc9bbcde6d84e57da97365"
                review="Thank you so much nandemokawaii!!! Sobrang ganda po ng gawa nyo 😭 nabigyan ng buhay talaga yung designs namin. And tuwang tuwa yung mga registrants ng cupsleeve event sa nareceive nilang photocards, bookmarks and yung free poster 🥺 we really appreciate your work at packaging na malinis at sa safe!"
              />

              <Review
                username="@calipayroumelaa"
                platform="From Twitter"
                src="https://cf.shopee.ph/file/6f839baed74ceecd07badde30a929317"
                review="I will always be a fan of @NandemokawaiiPH’s work! Thank you so much for this beautiful, fabulous and high quality cup sleeve kit. 💜🌸"
              />
            </div>
          </div>
        </section>
    </section>

    <section class="pb-16 bg-primary relative pt-20">
      <div
        class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
        style="transform: translateZ(0)"
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

      <div class="container mx-auto">
        <div
          class="
            flex flex-wrap
            justify-center
            bg-slate-100
            shadow-xl
            rounded-lg
            -mt-64
            py-16
            px-12
            relative
            z-10
            mx-5
          "
        >
          <div class="w-full text-center lg:w-8/12">
            <p class="text-4xl text-center">
              <i class="fas fa-heart text-lg mr-1"></i>
            </p>
            <h3 class="font-semibold text-3xl">
              Would you like to check our products now?
            </h3>
            <p class="text-slate-500 text-lg leading-relaxed mt-4 mb-4">
              Cause if you do, it can be yours now. <br /> Hit the buttons below to
              navigate to our shop or visit our Shopee Page.
            </p>
            <div class="sm:block flex flex-col mt-10">
              <a
                href="https://shp.ee/qqtzjwr"
                target="_blank"
                class="
                  get-started
                  text-white
                  font-bold
                  px-6
                  py-4
                  m-2
                  rounded
                  outline-none
                  focus:outline-none
                  bg-shopee-600
                  active:bg-shopee-100
                  uppercase
                  text-sm
                  shadow
                  hover:shadow-lg
                  ease-linear
                  transition-all
                  duration-150
                "
              >
                Shopee
              </a>
              <router-link
                class="
                  text-white
                  font-bold
                  px-6
                  py-4
                  m-2
                  rounded
                  outline-none
                  focus:outline-none
                  bg-primary
                  active:bg-secondary
                  uppercase
                  text-sm
                  shadow
                  hover:shadow-lg
                  ease-linear
                  transition-all
                  duration-150
                "
                :to="{ name: 'shop' }"
              >
                Go to our Store
              </router-link>
            </div>
            <div class="text-center mt-16"></div>
          </div>
        </div>
      </div>
    </section>
    <footer-component />
  </div>
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";
import Tag from "@/components/Typography/Tags.vue";
import Review from "@/components/Cards/CardReview.vue";
import patternFlower from "@/assets/img/bg/pattern_flower.png";
import events from "@/assets/img/index/cse.jpg";

export default {
  data() {
    return {
      patternFlower,
      events,
    };
  },
  components: {
    IndexNavbar,
    FooterComponent,
    Tag,
    Review,
  },
};
</script>
<style>
.indent-4 {
  text-indent: 1rem;
}
</style>
<template>
  <nav
    class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link to="/">
          <a
            class="text-primary text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            href="#"
          >
            Nandemokawaii PH
          </a>
        </router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="setNavbarOpen"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center"
        :class="[navbarOpen ? 'block' : 'hidden']"
        id="example-navbar-warning"
      >
        <!-- <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li class="flex items-center">
            <a
              class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index-navbar"
            >
              <i
                class="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"
              />
              Docs
            </a>
          </li>
        </ul> -->
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <!-- <li class="flex items-center">
            <index-dropdown />
          </li> -->
          <li class="flex items-center">
            <router-link
              class="hover:text-secondary text-primary px-3 py-2 flex items-center text-xs uppercase font-bold"
              :to="{ name: 'cart' }"
            >
              <i class="text-primary fas fa-shopping-cart text-lg leading-lg" />
              <span class="lg:hidden inline-block ml-2"></span>
            </router-link>
          </li>

          <!-- <li class="flex items-center">
            <router-link
              class="hover:text-secondary text-primary px-3 py-2 flex items-center text-xs uppercase font-bold"
              :to="{ name: 'profile' }"
            >
              <i class="text-primary fas fa-user text-lg leading-lg" />
            </router-link>
          </li> -->

          <li class="flex items-center">
            <button
              class="hover:text-secondary text-primary px-3 py-2 flex items-center text-xs uppercase font-bold outline-none focus:outline-none"
              v-on:click="addHeart()"
            >
              <i class="text-primary fas fa-heart text-lg leading-lg" />
            </button>
          </li>

          <!-- <li class="flex items-center">
            <button
              class="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              type="button"
            >
              <i class="fas fa-arrow-alt-circle-down"></i> Download
            </button>
          </li> -->
        </ul>
      </div>
    </div>
    <Alert v-if="alertOpen" title="+1 Heart!" message="Thank you for giving us a heart!" alertIcon="fas fa-heart" alertColor="bg-primary" class="absolute top-0 right-0 mt-20" />
  </nav>
</template>

<script>
import Alert from "@/components/Alerts/Alert.vue";

export default {
  data() {
    return {
      navbarOpen: false,
      alertOpen: false,
      alertColor: '',
      alertIcon: '',
      hearts: [],
    };
  },
  created() {
    this.fetchHeart();
  },
  methods: {
    fetchHeart(){
      fetch("http://localhost:3000/hearts/1")
        .then((res) => res.json())
        .then((data) => (this.hearts = data))
        .catch((err) => console.log(err.message));
    },
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
    addHeart: function() {
      this.hearts.heartCount++;
     
     fetch('http://localhost:3000/hearts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          heartCount: this.hearts.heartCount,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
     
     this.alertOpen = true;
      setTimeout(() => {
       this.alertOpen = false;
      }, 1000);
    },
    closeAlert: function(){
      this.alertOpen = false;
      console.log(this.alertOpen);
    }
  },
  components: {
    Alert,
  },
};
</script>

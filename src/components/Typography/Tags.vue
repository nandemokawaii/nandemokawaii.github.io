<template>
    <span
    class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full uppercase last:mr-0 mr-2 mt-2"
    :class="[ css ? css : 'bg-white' ]"
    >
    {{ label }}
    </span>
</template>

<script>
export default {
  name: "tag",
  data() {
    return {

    }
  },
  props: {
    label: String,
    css: String,
  },
  methods: {

  }
}
</script>
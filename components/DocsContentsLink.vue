<template>
  <nuxt-link
    :to="to"
    class="flex items-center pb-3 pr-5 text-gray-600 hover:text-gray-700"
  >
    {{ title }}
  </nuxt-link>
</template>
<script>
export default {
  props: ['to', 'title'],
}
</script>

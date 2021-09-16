<template>
  <div class="ml-4">
    <nuxt-link
      :to="to"
      class="flex items-center pb-3 pr-5 text-gray-600 hover:text-gray-700"
    >
      {{ title }}
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: ['to', 'title'],
}
</script>

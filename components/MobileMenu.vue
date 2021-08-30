<template>
  <div>
    <div class="absolute w-full flex bg-blue-100 z-40 pt-8 inset-0 pl-10">
      <div class="overflow-y-auto">
        <ExternalLinks />
        <DocsContents />
      </div>
      <div class="absolute top-0 right-0 pt-6 pr-10">
        <button @click="closeMobileMenu" class="ml-1 flex items-center justify-center h-10">
          X
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  methods: {
    closeMobileMenu() {
      this.$emit('closeMobileMenu')
    }
  },
}
</script>


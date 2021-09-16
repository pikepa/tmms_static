<template>
  <div>
    <div class="absolute inset-0 z-40 flex w-full pt-8 pl-10 bg-blue-100">
      <div class="overflow-y-auto">
        <!-- <ExternalLinks /> -->
        <DocsContents />
      </div>
      <div class="absolute top-0 right-0 pt-6 pr-10">
        <button
          @click="closeMobileMenu"
          class="flex items-center justify-center h-10 ml-1"
        >
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
    },
  },
}
</script>

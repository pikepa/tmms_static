<template>
  <div class="container mx-auto">
    <transition
      enter-active-class="transition-opacity duration-100 ease-linear"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-100 ease-linear"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <MobileMenu
        v-show="showMobileMenu"
        @closeMobileMenu="showMobileMenu = false"
      />
    </transition>
    <div
      class="fixed z-10 flex w-full h-16 max-w-6xl border-b-2 border-gray-500"
    >
      <MainHeader
        @showMobileMenu="showMobileMenu = true"
        v-show="!showMobileMenu"
      />
    </div>

    <div class="flex">
      <DesktopSidebar class="hidden md:flex" />
      <Nuxt class="flex-1 px-6 mt-10" />
    </div>
  </div>
</template>
<script>
export default {
  watch: {
    $route() {
      this.showMobileMenu = false
    },
  },
  data() {
    return {
      showMobileMenu: false,
    }
  },
}
</script>

<template>
  <div class="container mx-auto">
      <transition
        enter-active-class="transition-opacity ease-linear duration-100"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity ease-linear duration-100"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
        >
        <MobileMenu v-show="showMobileMenu" @closeMobileMenu="showMobileMenu = false" />
      </transition>
    <MainHeader @showMobileMenu="showMobileMenu = true" v-show="!showMobileMenu"/>
    <div class="h-screen flex">
      <DesktopSidebar class="hidden md:flex"/>
      <Nuxt class="mt-24 px-6 flex-1"/>
    </div>

  </div>
</template>
<script>

export default {
  watch: {
    '$route' () {
      this.showMobileMenu = false
    }
  },
    data() {
      return {
        showMobileMenu: false

      }
    },
}
</script>



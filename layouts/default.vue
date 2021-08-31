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
      <div class=" fixed flex  h-16 w-full max-w-6xl z-10 border-b-2 border-gray-500">
         <MainHeader @showMobileMenu="showMobileMenu = true" />
      </div>

        v-show="!showMobileMenu"/>

    <div class="flex bg-red-100">
      <DesktopSidebar class="bg-blue-200 hidden md:flex"/>
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



<template>
  <div class="bg-white fixed flex flex-shrink-0 h-16 w-full max-w-6xl z-10 border-b-2 border-gray-500">
      <!-- TODO  Mobile heAder -->
      <button class="md:hidden p-6 cursor-pointer" @click="showMobileMenu">
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div class="flex-1 px-4 flex items-center justify-between">
          <div class="flex" >
            <!-- Logo -->
                  <Home class="h-8 w-8 hidden md:flex"/>
          </div>
          <div>
            <!-- search -->
              <input  class="border p-2 rounded border-gray-600 w-64" placeholder="Search here" >
          </div>
            <!-- icons -->
          <div>
            <GlobeIcon class="mr-1 h-6 w-6 text-gray-700 hover:text-gray-800" />
          </div>
        </div>
    </div>

</template>

<script>
export default {
methods: {
  showMobileMenu() {
    this.$emit('showMobileMenu')
  }
},
  }
</script>




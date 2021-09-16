<template>
  <div>
    <h1 class="pb-8 mt-6 font-bold text-gray-900 md:text-5xl">
      {{ doc.title }}
    </h1>
    <NuxtContent :document="doc" class="prose text-justify sm:prose-2xl" />
  </div>
</template>

<script>
export default {
  transition: {
    name: 'page',
    mode: 'out-in',
  },
  async asyncData({ $content, params }) {
    const doc = await $content('documentation', params.doc).fetch()
    return { doc }
  },
  head() {
    return {
      title: 'TMMS | ' + this.doc.title,
    }
  },
}
</script>

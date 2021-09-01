<template>
  <div>
    <h1 class="pb-8 mt-6 text-4xl font-bold text-gray-900">
      {{ doc.title }}
    </h1>
    <NuxtContent :document="doc" class="prose prose-2xl text-justify"/>
  </div>
</template>

<script>
export default {
  transition:{
    name: 'page',
    mode: 'out-in'
  },
  async asyncData( {$content, params}){
    const doc = await $content('documentation', params.doc).fetch()
    return { doc }
  }
}
</script>

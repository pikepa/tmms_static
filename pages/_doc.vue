<template>
  <div>
    <h1 class="text-4xl font-bold text-gray-900 pb-8">
      {{ doc.title }}
    </h1>
    <NuxtContent :document="doc" class="prose prose-xl text-justify"/>
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

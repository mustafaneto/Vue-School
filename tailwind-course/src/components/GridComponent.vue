<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 grid-flow-dense">
    <div></div>
    <div></div>
    <div class="flex items-center justify-around">
      <div class="w-16 min-h-0 h-16 bg-green-300"></div>
      <div class="w-16 min-h-0 h-16 bg-blue-300"></div>
      <div class="w-16 min-h-0 h-16 bg-green-300"></div>
      <div class="w-16 min-h-0 h-16 bg-blue-300"></div>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </section>
</template>

<script setup></script>

<style scoped>
div {
  @apply bg-gray-400 min-h-[100px] even:bg-gray-600 hover:bg-blue-800 hover:cursor-pointer hover:even:bg-purple-700;
}
</style>

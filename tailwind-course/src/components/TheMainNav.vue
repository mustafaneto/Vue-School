<template>
  <ul
    class="list-disc marker:text-green-500 marker:text-2xl my-10 mx-5 gap-10 flex flex-wrap"
  >
    <li>
      <RouterLink to="/" class="visited:text-purple-500 text-lg"
        >Home</RouterLink
      >
    </li>
    <li>
      <RouterLink to="/flexbox" class="visited:text-purple-500 text-lg"
        >Flexbox</RouterLink
      >
    </li>
    <li>
      <RouterLink to="/grid" class="visited:text-purple-500 text-lg"
        >Grid</RouterLink
      >
    </li>
    <li>
      <RouterLink to="/typography" class="visited:text-purple-500 text-lg"
        >Typography</RouterLink
      >
    </li>
    <li>
      <RouterLink to="/forms" class="visited:text-purple-500 text-lg"
        >Forms</RouterLink
      >
    </li>
    <li class="text-lg">Vue.js</li>
  </ul>
</template>

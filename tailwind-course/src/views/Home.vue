<template>
  <div class="m-10">
    <TheMainNav />
    <label><input type="checkbox" v-model="isDark" /> Dark Mode</label>
    <AppInput></AppInput>
    <AppButton>Submit</AppButton>
    <AppCard />
  </div>
</template>

<script setup>
import TheMainNav from "@/components/TheMainNav.vue";
import AppInput from "@/components/AppInput.vue";
import AppButton from "@/components/AppButton.vue";
import AppCard from "@/components/AppCard.vue";
import { useDark } from "@vueuse/core";

const isDark = useDark();
</script>

<style scoped></style>

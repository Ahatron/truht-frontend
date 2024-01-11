<template>
  <v-container>
    <v-card class="">
      <MyInput name="search"
        placeholder="Search"
        variant="outlined"
        elevation="0"
        append-inner-icon="mdi-magnify"
        @click:append-inner="() => console.log('go')"></MyInput>
      <v-tabs v-model="tab"
        color="primary"
        dark
        slider-color="primary">
        <v-tab :value="1">People</v-tab>
        <v-tab :value="2">Groups</v-tab>
        <v-tab :value="3">Videos</v-tab>
      </v-tabs>
    </v-card>

  </v-container>
</template>
<script setup lang="ts">
import MyInput from '@/components/UI/MyInput.vue'
import { ref } from 'vue';

const tab = ref(1)
</script>
<template>
  <v-avatar size="40"
    color="grey-lighten-1"
    class="mr-3">
    <v-icon v-if="!avatarId"
      color="white">mdi-account</v-icon>
    <v-img v-else
      alt="alt"
      :cover="true" />
  </v-avatar>
</template>

<script setup lang="ts">
defineProps({ avatarId: Number })
</script>
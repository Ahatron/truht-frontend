<template>
  <v-container class="w-100">
    <v-row align="center"
      class="h-100">
      <v-spacer></v-spacer>
      <v-col cols="11"
        sm="6">
        <AuthForm />

      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import AuthForm from '@/components/AuthForm.vue';

</script>

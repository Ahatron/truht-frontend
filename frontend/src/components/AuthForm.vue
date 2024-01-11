<template>
  <v-form :disabled="authStore.loading"
    :loading="authStore.loading"
    @submit="authStore.auth"
    class="form my-auto"
    variant="outline">
    <FormTabs></FormTabs>

    <FormInputs></FormInputs>

    <FormButton></FormButton>
  </v-form>
</template>
<script setup lang="ts">
import { onBeforeMount } from 'vue'
import FormButton from './UI/FormButton.vue';
import FormTabs from './UI/FormTabs.vue';
import FormInputs from './FormInputs.vue';
import useGlobalStore from "@/store/global";
import useAuthStore from '@/store/auth.store';

const globalStore = useGlobalStore(),
  authStore = useAuthStore();


onBeforeMount(() => {
  globalStore.drawerActive = false;
})
</script>


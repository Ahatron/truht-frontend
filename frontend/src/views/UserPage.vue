<template>
  <div class="d-flex flex-column h-100">
    <UserHeader :size="size"
      class="position-relative">
      <UserProfile class="w-100 position-absolute"
        :style="{ top: `${size}px` }"
        :styles="{ 'box-shadow': 'black 0px 0px 3px 0px' }"
        :size="size"
        :header="'text-h5'" />
    </UserHeader>
    <div class="d-flex flex-column align-center mt-3 text-grey-darken-1">
      <p class="mb-4">
        <span>Follow <b>{{ 100 }}</b> </span>
        <span class="mx-3"></span>
        <span>Followers <b>{{ 100 }}</b></span>
      </p>

      <p>
        <v-icon>mdi-calendar-month</v-icon>
        Joined {{ userStore.createdAt }}
      </p>
    </div>

  </div>
</template>

<script setup lang="ts">
import UserProfile from '@/components/UserProfile.vue';
import { ref } from "vue";
import UserHeader from "@/components/UserHeader.vue";
import useUserStore from "@/store/user.store";

const userStore = useUserStore(),
  size = ref(100);


</script>

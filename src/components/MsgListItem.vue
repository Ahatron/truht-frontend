<script setup lang="ts">
defineProps({
  message: {
    type: Object,
    value: {
      type: String,
      default: "Response is rejected"
    },
    userAvatar: String,
  }
})
</script>

<template>
  <v-sheet :elevation="2"
    :class="message?.isUserOwn ? 'align-self-end rounded-be-0' : 'rounded-bs-0'"
    class="border rounded-xl pa-3 my-2">
    <v-list-item>
      <div class="d-flex">
        <v-avatar color="black">
          <v-img :src="message?.userAvatar"
            alt="User avatar in chat" />
        </v-avatar>
        <v-divider class="mx-3"
          :vertical="true"></v-divider>
        <p>{{ message?.value }}</p>
      </div>

    </v-list-item>
  </v-sheet>
</template>

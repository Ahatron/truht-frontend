<template>
  <div>
    <ChatDrawer v-if="chatStore.drawerActive || !mobile"
      :width="mobile ? 540 : 200"></ChatDrawer>
    <AppBar></AppBar>

    <MsgList></MsgList>
    <!--    <ChatInfoDrawer location="right"></ChatInfoDrawer>-->
    <MsgInput></MsgInput>
  </div>
</template>

<script setup lang="ts">
import ChatDrawer from "@/components/ChatDrawer.vue";
import MsgList from "@/components/MsgList.vue";
import { onBeforeMount } from "vue";
import { getChatList } from "@/services/chats";
import { useDisplay } from "vuetify";
import { useChatStore } from "@/store/chat";
import AppBar from "@/components/AppBar.vue";
import MsgInput from "@/components/MsgInput.vue";
// import ChatInfoDrawer from "@/components/ChatInfoDrawer.vue";
const { mobile } = useDisplay(),
  chatStore = useChatStore()

onBeforeMount(() => {
  getChatList();
})
</script>
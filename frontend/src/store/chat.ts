// Utilities
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export interface Chat {
  title: string;
  id: number;
  image: string;
  messages: {
    userAvatar: string;
    nickname: string;
    date: string;
    value: string;
    isUserOwn: boolean;
  }[];
}


export const useChatStore = defineStore('chat', () => {
  const selectedId = ref(1),
    chats = ref<Chat[]>([]),
    drawerActive = ref(true);


  const selectedChat = computed(() => {
    return chats.value.find((chat: Chat) => chat.id === selectedId.value);
  });

  return { selectedId, chats, selectedChat, drawerActive };
});

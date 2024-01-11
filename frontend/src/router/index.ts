// Composables
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/views/HomePage.vue';
import AuthPage from '@/views/AuthPage.vue';
import UserPage from '@/views/UserPage.vue';
import ChatPage from "@/views/ChatPage.vue";
import SearchPage from "@/views/SearchPage.vue";
import MsgList from "@/components/MsgList.vue";

const routes = [
  {
    path: '/',
    redirect: '/auth',
  },
  {
    path: '/home',
    component: HomePage,
  },
  {
    path: '/search',
    component: SearchPage,
  },
  {
    path: '/auth',
    component: AuthPage
  },
  {
    path: '/user',
    component: UserPage
  },
  {
    path: '/chats',
    component: ChatPage,
    children: [
      {
        path: '/chat/:id',
        name: 'chat',
        component: MsgList
      }
    ]


  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});



export default router;

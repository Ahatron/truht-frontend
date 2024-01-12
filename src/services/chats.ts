import { useChatStore } from "@/store/chat";

const chatList = [
  {
    title: 'Important Themes Lololoshka',
    id: 1,
    image: '/aristotel.jpg',
    messages: [
      {
        userAvatar: '/aristotel.jpg',
        nickname: 'Fisting Slayer',
        date: Date.now().toLocaleString(),
        value: 'All goverments is poop!!!',
        isUserOwn: false
      },
      {
        userAvatar: '/aristotel.jpg',
        nickname: 'Fisting Slayer',
        date: Date.now().toLocaleString(),
        value: 'There is Johny!!!',
        isUserOwn: false
      },
      {
        userAvatar: '/aristotel.jpg',
        nickname: 'Fisting Slayer',
        date: Date.now().toLocaleString(),
        value: 'All goverments is poop!!!',
        isUserOwn: false
      },
      {
        userAvatar: '/aristotel.jpg',
        nickname: 'Fisting Slayer',
        date: Date.now().toLocaleString(),
        value: 'There is Johny!!!',
        isUserOwn: false
      },
      {
        userAvatar: '/aristotel.jpg',
        nickname: 'Fisting Slayer',
        date: Date.now().toLocaleString(),
        value: 'All goverments is poop!!!',
        isUserOwn: false
      },
      {
        userAvatar: '/aristotel.jpg',
        nickname: 'Fisting Slayer',
        date: Date.now().toLocaleString(),
        value: 'There is Johny!!!',
        isUserOwn: false
      },
      {
        userAvatar: '/aristotel.jpg',
        nickname: 'Fisting Slayer',
        date: Date.now().toLocaleString(),
        value: 'All goverments is poop!!!',
        isUserOwn: false
      },
      {
        userAvatar: '/aristotel.jpg',
        nickname: 'Fisting Slayer',
        date: Date.now().toLocaleString(),
        value: 'There is Johny!!!',
        isUserOwn: false
      },
      {
        userAvatar: '/aristotel.jpg',
        nickname: 'Ahatron',
        date: Date.now().toLocaleString(),
        value: 'Hello!',
        isUserOwn: true
      },
    ],
  },
  {
    title: 'Important',
    id: 2,
    image: '/aristotel.jpg',
    messages: [
      {
        userAvatar: '/aristotel.jpg',
        nickname: 'Fisting',
        date: Date.now().toLocaleString(),
        value: 'All is poop!!!',
        isUserOwn: false
      },
    ],
  },
  {
    title: 'Themes',
    id: 3,
    image: '/aristotel.jpg',
    messages: [
      {
        userAvatar: '/aristotel.jpg',
        nickname: 'Slayer',
        date: Date.now().toLocaleString(),
        value: 'poop!!!',
        isUserOwn: false
      },
    ],
  }
];

export async function getChatList() {
  try {
    const chatsStore = useChatStore();

    chatsStore.chats = chatList;
  } catch (e) {
    console.log('Error getting data', e)
  }
}

export async function postMessage(message: object) {
  console.log(message)
}

// Подключение библиотеки Socket.io
import { io } from "socket.io-client";

// Замените URL на адрес вашего сервера Socket.io
const socket = io("http://localhost:8080");

// Обработка события подключения
socket.on("connect", () => {
  console.log("Подключено к серверу");

  // Отправка события на сервер при подключении
  socket.emit("clientConnected", "Привет, сервер!");
});

// Обработка события от сервера
socket.on("serverResponse", (data) => {
  console.log("Получен ответ от сервера:", data);
});

// Ваши обработчики других событий
// socket.on("yourEvent", (data) => {
//   console.log("Получено событие 'yourEvent':", data);
// });

// Пример отправки данных на сервер
// socket.emit("sendMessage", "Привет, сервер!");

import { defineStore } from "pinia";
import { ref } from "vue";
import postService from "@/services/post.service";


interface Post {
  text: string,
  id: number,
  UserId: string,
  createdAt: string,
  likes: number,
  comments: number,
  reposts: number,
  views: number,
  User: {
    nickname: string,
    avatar: number;
  }
  Files: { id: string, filename: string }[]
}

const usePostStore = defineStore('posts', () => {
  const posts = ref<Post[]>([]), src = ref();

  async function getPosts() {
    const result = await postService.getPosts();
    console.log(result);

    posts.value = result?.data;

  }

  return { posts, src, getPosts };
})

export default usePostStore;

export { Post }
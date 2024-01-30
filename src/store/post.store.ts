import { defineStore } from "pinia";
import { ref } from "vue";
import postService from "@/services/post.service";
import fileService from "@/services/file.service";

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
  Files: { id: string }[]
}

const usePostStore = defineStore('posts', () => {
  const posts = ref<Post[]>([]), src = ref();

  async function getPosts() {
    const result = await postService.getPosts();
    console.log(result);

    posts.value = result?.data;

  }

  async function getFile(fileId: string) {
    await fileService.getFile(fileId).then((res: any) => {
      console.log(res);

      src.value = URL.createObjectURL(res);
    })
  }


  return { posts, src, getPosts, getFile };
})

export default usePostStore;
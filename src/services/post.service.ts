import base from '@/services';

interface Post {
  text: string,
  files: File[]
}

class PostService {
  async post(req: FormData) {
    try {
      const res = await base.post('/post', req)

      return res;
    } catch (e) {
      console.error('Posting error:', e);
    }
  }
  async getPosts() {
    try {
      const res = await base.get('/posts');
      console.log(res);
      return res;
    } catch (e) {
      console.error('Error getting posts: \n', e)
    }
  }
  async edit() { }
  async delete() { }
  async likeToggle(postId: number) {
    try {
      const res = await base.post('/post/like', { postId })

      console.log(res);

    } catch (e) {
      console.error('like request error: \n', e)
    }
  }
}

export default new PostService();
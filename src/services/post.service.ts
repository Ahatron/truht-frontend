import base from '@/services';

interface Post {
  text: string,
  files: File[]
}

class PostService {
  async post(req: Post) {
    try {
      const res = base.post('/post', req)

      return res;
    } catch (e) {
      console.error('Posting error:', e);
    }
  }
  async getPosts() {
    try {
      const res = base.get('/posts');

      return res;
    } catch (e) {
      console.error('Error getting posts: \n', e)
    }
  }
  async edit() { }
  async remove() { }
}

export default new PostService();
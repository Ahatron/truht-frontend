import base from '@/services';

class UserService {
  async getUserData() {
    try {
      const response = await base.get(`/profile`);
      return response.data;
    } catch (error) {
      console.log('Loading UserData error', error);
      throw error; // Можно выбросить ошибку, чтобы обработать её в вызывающем коде
    }
  }
  async checkUserInSystem() {
    try {
      const response = await base.post('/auth/verify-token');
      console.log(response);
      return response;
    } catch (e) {
      console.error('Token validation error', e);
      throw e;
    }
  }
}

export default new UserService();

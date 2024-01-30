import base from '@/services';

export interface userAuth {
  nickname?: string,
  userLogin: string,
  password?: string,
}

class AuthService {
  async register(req: userAuth) {
    try {
      const res = await base.post('/auth/register', req);

      return res;
    } catch (error) {
      console.error('Register error', error);
    }
  }

  async checkLogin(req: userAuth) {
    try {
      const res = await base.post('/auth/check-login', req)
      return res;
    } catch (error: any) {
      console.error('Ошибка логина', error);
      return error.response;
    }
  }

  async login(req: userAuth) {
    try {
      const res = await base.post('/auth/login', req);
      localStorage.setItem('accessToken', res.data.accessToken);
      return res;
    } catch (error: any) {
      console.error('Login error', error);
      return error.response;
    }
  }

  async logout() {
    try {
      await base.post('/auth/logout');
      localStorage.clear();
    } catch (error) {
      console.error('Logout error', error);
    }
  }
}

export default new AuthService();



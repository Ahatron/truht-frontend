import base from '@/API';

export async function getToken(username, password) {
  base.post('/api/v1/auth/token', username, password)
    .then(res => {
      console.log(res)
      localStorage.setItem('accessToken', res.access_token);
    }).catch(e => {
      console.log('Error getting access token', e);
    });
}

export async function getRefreshToken(username, password) {
  base.post('/api/v1/auth/refresh', username, password)
    .then(res => {
      localStorage.setItem('accessToken', res.accessToken);
    }).catch(e => {
      console.log('Error refresh token', e);
    });
}
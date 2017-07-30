import cookie from 'react-cookies'

export function setTokenCookie(token) {
  const expires = new Date();
  expires.setDate(expires.getDate() + 10000);
  cookie.save(
    'jwt-token',
    token,
    {
      path: '/',
      expires,
      maxAge: 1000,
    }
  );
}

export function getTokenCookie() {
  const jwtToken = cookie.load('jwt-token');
  return jwtToken;
}

export function removeTokenCookie() {
  cookie.remove('jwt-token', { path: '/' })
}

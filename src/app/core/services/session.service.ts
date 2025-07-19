import { Injectable } from '@angular/core';
import { setCookie, getCookie, removeCookie } from 'typescript-cookie';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private TOKEN_NAME = 'IMAGINE_APPS';

  saveToken(token: string) {
    setCookie(this.TOKEN_NAME, token, { expires: 365, path: '/' });
  }

  getToken() {
    const token = getCookie(this.TOKEN_NAME);
    return token;
  }

  removeToken() {
    removeCookie(this.TOKEN_NAME);
  }

  isValidToken() {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    return true;
  }
}

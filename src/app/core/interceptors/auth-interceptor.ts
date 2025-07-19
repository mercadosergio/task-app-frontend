import { HttpContext, HttpContextToken, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SessionService } from '../services/session.service';


export const CACHING_ENABLED = new HttpContextToken<boolean>(() => true);

export function checkToken() {
  return new HttpContext().set(CACHING_ENABLED, true);
}

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const accessToken = inject(SessionService).getToken();

  if (accessToken) {
    const bearerReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
    });
    return next(bearerReq);
  }
  return next(req);
};
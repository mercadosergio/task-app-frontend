import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const sessionService = inject(SessionService);
  const router = inject(Router);

  const isValidToken = sessionService.isValidToken();
  if (!isValidToken) {
    router.navigate(['/']);
    return false;
  }
  return true;
};
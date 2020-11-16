import Router from 'munster-router';
import AuthService from '../services/auth.service';

export class GuestGuard {
  authService = new AuthService();
  canActivate() {
    if (this.authService.getToken()) {
      Router.navigate('/auth');
      return false;
    }
    return true;
  }
}
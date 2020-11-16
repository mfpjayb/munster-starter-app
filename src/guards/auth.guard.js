import Router from 'munster-router';
import AuthService from '../services/auth.service';

export class AuthGuard {
  authService = new AuthService();
  canActivate() {
    if (this.authService.getToken()) {
      return true;
    }
    Router.navigate('/');
    return false;
  }
}

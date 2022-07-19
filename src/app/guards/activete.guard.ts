import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root',
})
export class ActiveteGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const checkAdmin = this.userService.isAdmin();
    if (checkAdmin) {
      console.log(state);
      return true;
    } else {
      alert(`Sorry!, You can't access this page ("CanActivate") `);
      this.router.navigate(['/']);
      return false;
    }
  }
}

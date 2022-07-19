import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { MerchantComponent } from '../merchant/merchant.component';

@Injectable({
  providedIn: 'root',
})
export class DeactiveteGuard implements CanDeactivate<MerchantComponent> {
  canDeactivate(): boolean {
    return window.confirm('Are you sure to naviget ?');
  }
}

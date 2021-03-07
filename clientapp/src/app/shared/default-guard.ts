import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DefaultGuard implements CanActivate {
  private _router: Router;

  constructor(router : Router){
    this._router=router;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const token = sessionStorage.getItem('auth-token');
    if (token == null || token.length==0) {
      this._router.navigate(['/login']);
    }

    return true;
  }
}

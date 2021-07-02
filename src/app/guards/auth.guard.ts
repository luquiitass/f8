import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUserService } from '../services/auth-user.service';
import { take,map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    public authUser :AuthUserService,
    public router : Router
  ){
    
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return this.authUser.userOb.pipe(
        take(1),
        map(user => {
          console.log('guard usaer', user)
          if(!user){
            this.router.navigateByUrl('/login')
            return false;
          }else{
            return true;
          }
        })
      )
    //return true;
  }
  
}

import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router , CanLoad} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate , CanLoad  {

  constructor(private authService:AuthService , private router:Router){

  }
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
    if(this.authService.isAuthenticated()){
      return true;
    }else{
      this.router.navigate(['/signin']);
    }
  }

  canLoad(route:RouterStateSnapshot) {
    return this.authService.isAuthenticated();
  }
}

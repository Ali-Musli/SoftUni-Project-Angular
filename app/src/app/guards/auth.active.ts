import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserServiceService } from "../user/user-service.service";

@Injectable({providedIn: 'root'})

export class AuthActivate implements CanActivate {
    constructor(private userService: UserServiceService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       if(this.userService.isLogged){
        return true
       }else{
        this.router.navigate(['error'])
        return false
       }
    }
}
import {Injectable} from '@angular/core';
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Router,Route,NavigationStart} from '@angular/router';

@Injectable()
export class AuthService implements CanActivate{
    canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        debugger;
        return true;
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        debugger;       
        return true;
    }

    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean
    {
        debugger;        
        return false;
    }
    
    //return true;
}
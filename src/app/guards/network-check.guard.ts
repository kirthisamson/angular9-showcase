import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { NetworkService } from "../services/network.service";

@Injectable({
  providedIn: "root"
})
export class NetworkCheckGuard implements CanActivate {
  constructor(private NetworkService: NetworkService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.NetworkService.online) {
      this.router.navigateByUrl("/network-error");
      return false;
    }
    return true;
  }
}

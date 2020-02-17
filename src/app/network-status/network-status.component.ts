import { Component, OnInit } from "@angular/core";
import { ConnectionService } from "ng-connection-service";

@Component({
  selector: "app-network-status",
  templateUrl: "./network-status.component.html",
  styleUrls: ["./network-status.component.scss"]
})
export class NetworkStatusComponent implements OnInit {
  hasNetworkConnection: boolean;
  hasInternetAccess: boolean;
  status: string;

  public onlineOffline: boolean;

  constructor(private ConnectionService: ConnectionService) {
    console.log("currentState constructor -- ");
    this.onlineOffline = navigator.onLine;
    console.log(this.onlineOffline);
    this.ConnectionService.monitor().subscribe(isConnected => {
      console.log("currentState constructor" + isConnected);
      console.log(isConnected);
      // this.hasNetworkConnection = currentState.hasNetworkConnection;
      // this.hasInternetAccess = currentState.hasInternetAccess;
      // if (this.hasNetworkConnection && this.hasInternetAccess) {
      //   this.status = "ONLINE";
      // } else {
      //   this.status = "OFFLINE";
      // }
    });
  }

  ngOnInit(): void {}
}

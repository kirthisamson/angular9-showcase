import { Component, OnInit } from "@angular/core";
import { Product } from "../models/product";

@Component({
  selector: "app-item-list",
  templateUrl: "./item-list.component.html",
  styleUrls: ["./item-list.component.scss"]
})
export class ItemListComponent implements OnInit {
  private products: Product[] = [
    {
      id: 1,
      name: "Ferrari",
      description: "The prancing stallion"
    },
    {
      id: 2,
      name: "Mercedes",
      description: "The Silver Arrow"
    }
  ];
  constructor() {}

  ngOnInit() {}

  onOrder() {
    window.alert("Congrats!! your order is placed");
  }
}

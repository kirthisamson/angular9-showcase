import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../models/product";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})
export class ItemComponent implements OnInit {
  @Input() product;
  @Output() order = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  share() {
    window.alert("Sharing is 'car'ing ");
  }
}

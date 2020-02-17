import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ItemListComponent } from "./item-list/item-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NetworkCheckGuard } from "./guards/network-check.guard";

const routes: Routes = [
  {
    path: "item-list",
    component: ItemListComponent,
    canActivate: [NetworkCheckGuard]
  },
  {
    path: "network-error",
    component: PageNotFoundComponent
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

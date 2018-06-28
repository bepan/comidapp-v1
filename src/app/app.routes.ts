import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { CollectionComponent } from "./collection/collection.component";

export const appRoutes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Screen routes
  { path: 'login', component: LoginComponent },
  { path: 'collection', component: CollectionComponent },

  { path: '**', redirectTo: '/login' }

];

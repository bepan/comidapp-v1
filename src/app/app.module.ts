import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule} from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { FieldsetModule } from 'primeng/fieldset';
import { AccordionModule } from 'primeng/accordion';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { appRoutes } from './app.routes';
import { NavbarComponent } from './navbar/navbar.component';
import { CollectionComponent } from './collection/collection.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    TableModule,
    FieldsetModule,
    AccordionModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

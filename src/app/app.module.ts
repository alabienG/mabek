import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CommonModule} from "@angular/common";
import {HomeComponent} from './components/personnel/home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {ServiceComponent} from './components/personnel/service/service.component';
import {MenuComponent} from './components/personnel/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatBadgeModule} from "@angular/material/badge";


const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'dashboard', component: DashboardComponent},
    {
      path: 'personnels', component: HomeComponent, children: [
        {path: 'home', component: MenuComponent},
        {path: 'services', component: ServiceComponent},
      ]
    },
  ]
;

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    ServiceComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes, {useHash: true}),
    BrowserAnimationsModule,
    MatBadgeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

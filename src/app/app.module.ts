import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Prj01Component } from './prj-01/prj-01.component';

import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { ToolsComponent } from './tools/tools.component';
import { PrjInfoComponent } from './prj-info/prj-info.component';

const appRoutes: Routes = [
  {path: 'prj01', component: Prj01Component},
  {path: 'login', component: LoginComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'tools', component: ToolsComponent},
  {path: 'projInfo', component: PrjInfoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Prj01Component,
    ContactsComponent,
    ToolsComponent,
    PrjInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

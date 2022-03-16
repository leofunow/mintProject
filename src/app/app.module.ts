import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from "@angular/router";
import { IppComponent } from './ipp/ipp.component';
import { CorpClientsComponent } from './corp-clients/corp-clients.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PrivateClientsComponent } from './private-clients/private-clients.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BottomComponent } from './bottom/bottom.component';
import { PublicationsComponent } from './publications/publications.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const appRoutes: Routes =[
  {path:'', component: IndexComponent},
  {path:'ipp', component: IppComponent},
  {path:'registration', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'CorpClients', component: CorpClientsComponent},
  {path:'about', component: AboutComponent},
  {path:'contacts', component: ContactsComponent},
  {path:'PrivClients', component: PrivateClientsComponent},
  {path:'**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    IppComponent,
    CorpClientsComponent,
    AboutComponent,
    ContactsComponent,
    NotFoundComponent,
    PrivateClientsComponent,
    BottomComponent,
    PublicationsComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

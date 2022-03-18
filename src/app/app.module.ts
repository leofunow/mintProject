import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule, Routes} from "@angular/router";
import { IppComponent } from './components/ipp/ipp.component';
import { CorpClientsComponent } from './components/corp-clients/corp-clients.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PrivateClientsComponent } from './components/private-clients/private-clients.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BottomComponent } from './components/bottom/bottom.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HelpComponent } from './components/help/help.component';
import { NewContractComponent } from './components/new-contract/new-contract.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";



const appRoutes: Routes =[
  {path:'', component: IndexComponent},
  {path:'ipp', component: IppComponent},
  {path:'registration', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'help', component: HelpComponent},
  {path:'newconract', component: NewContractComponent},
  {path:'lk', component: ProfileComponent},
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
    ProfileComponent,
    HelpComponent,
    NewContractComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

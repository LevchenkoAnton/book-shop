import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { PanelComponent } from './components/panel/panel.component';

import { BookService } from "./services/book.service";
import { IdService } from "./services/id.service";
import { AuthService } from './services/auth.service';
import { BasketService } from './services/basket.service';

import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from "@angular/forms";
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { CurrencyComponent } from './components/currency/currency.component';
import { BasketComponent } from './components/basket/basket.component';
import { ClientHomeComponent } from './components/client-home/client-home.component';
import { ClientCheckoutComponent } from './components/client-checkout/client-checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    AddBookComponent,
    EditBookComponent,
    PanelComponent,
    NotFoundComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    CustomDatePipe,
    CurrencyComponent,
    BasketComponent,
    ClientHomeComponent,
    ClientCheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FontAwesomeModule,
  ],
  providers: [
    BookService,
    IdService,
    AuthService,
    BasketService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

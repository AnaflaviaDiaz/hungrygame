import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WallComponent } from './wall/wall.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule  } from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    WallComponent
  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

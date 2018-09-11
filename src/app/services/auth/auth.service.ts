import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable()
export class AuthService {
  constructor(
    public _afAuth: AngularFireAuth
  ) { }

  signupUser(email: string, pass: string) {
    // tslint:disable-next-line:no-shadowed-variable
    return new Promise((resolve, reject) => {
      this._afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, pass)
        .then(user => resolve(user))
        .catch(error => reject(error));
    });
  }

  loginUser(email: string, pass: string) {
    // tslint:disable-next-line:no-shadowed-variable
    return new Promise((resolve, reject) => {
      this._afAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(user => resolve(user))
        .catch(error => reject(error));
    });
  }

  logoutUser() {
    return this._afAuth.auth.signOut();
  }
}

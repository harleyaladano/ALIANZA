// auth.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.default.User | null>;
  getAuthState: any;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }

  login(email: string, password: string): Promise<firebase.default.auth.UserCredential> {
      return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async register(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      console.log('User registered: ', result.user);
    } catch (error) {
      console.error(error);
    }
  }
}

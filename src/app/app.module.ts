import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './environments/environment';

const routes: Routes = [
  { path: '', redirectTo: 'post-list', pathMatch: 'full' },
  { path: 'post-list', component: PostListComponent },
  { path: 'post-add', component: PostEditComponent },
  { path: 'authentication', component: AuthComponent },
  { path: 'post-edit/:index', component: PostEditComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    PostComponent,
    PostListComponent,
    PostEditComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAo3sr0hQ1hSzVdS17ImvabniaMcSBazmE",
        authDomain: "myfirebase-59e34.firebaseapp.com",
        databaseURL: "https://alianzafinalproject-default-rtdb.firebaseio.com/",
        projectId: "myfirebase-59e34",
        storageBucket: "myfirebase-59e34.appspot.com",
        messagingSenderId: "113761456011",
        appId: "1:113761456011:web:f71275dbb70bc9616ea98e",
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
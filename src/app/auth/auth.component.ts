import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; // Add this import at the top

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginForm!: FormGroup;
  registerEmail: string | undefined;
  registerPassword: string | undefined;
  

  constructor(private authService: AuthService, private router: Router) { } 


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }
  onLogin() {
    if (!this.loginForm.valid) {
        return;
    }
    const emailControl = this.loginForm.get('email');
    const passwordControl = this.loginForm.get('password');
    if (emailControl && passwordControl) {
        const email = emailControl.value;
        const password = passwordControl.value;
        this.authService.login(email, password).then(() => {
            window.alert('Login successful'); // Add this line to show a popup message
            this.router.navigate(['/post-list']); // Add this line to navigate to the welcome page
        }).catch(error => {
            // Handle the error
        });
    }
};

register() {
  if (this.registerEmail && this.registerPassword) {
    this.authService.register(this.registerEmail, this.registerPassword)
      .then((result: any) => {
        console.log('User registered');
        console.log(result); // This will log the result of the registration
        window.alert('Registered successfully'); // This will display the alert
        this.registerEmail = '';
        this.registerPassword = '';
        this.router.navigate(['/login']); // navigate to add account page
      }).catch((error: any) => {
        console.error(error);
      });
  }
}
}

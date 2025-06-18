import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router, private httpClient: HttpClient) {
        this.loginForm = this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required]]
        })
    }

  onSubmit() {
    if (this.loginForm.valid) {
      /*
      this.httpClient.post('http://mock', this.loginForm.value).subscribe(
        {
          next: (response) => {
            console.log("Delivered:", response);
            alert("Logged In");
            this.router.navigate(['/register']);
          },
          error: (error) => {
            console.log(error);
            alert("Error detected")
          }
        })
*/
      alert("Logged In");
      console.log(this.loginForm.value);
    }
  }


}

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    remember: [false],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {} cc

  login() {
    this.form.markAllAsTouched();
    console.log("login: ", this.form.value, ' -- ', this.form.valid);

    if (this.form.invalid) {

    }
  }
}

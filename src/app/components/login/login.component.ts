import {AfterContentInit, Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Account} from "../../models/account";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    login: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  isCorrect = true;

  constructor(private userService: UsersService, private route: Router) {

  }

  ngOnInit(): void {

  }



  login() {
    let user: Account = this.userService.users.filter(user => user.login === this.loginForm.controls["login"].value
      && user.password === this.loginForm.controls["password"].value)[0];
    if (!user) {
      this.isCorrect = false;
    } else {
      this.userService.user_id = user.id;
      this.route.navigate(["/lk"]);
    }
  }


}
function login() {
    throw new Error('Function not implemented.');
}


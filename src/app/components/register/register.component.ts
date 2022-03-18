import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {Account} from "../../models/account";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm: FormGroup = new FormGroup({
    login: new FormControl("", Validators.email),
    snils: new FormControl("", Validators.pattern("([0-9][ \\t\\v\\r\\n\\f]*){11}")),
    password: new FormControl("", Validators.required)
  });
  isCorrect = true;

  constructor(private userService: UsersService, private route: Router) {
  }

  ngOnInit(): void {
  }

  register() {
    let user: Account = this.userService.users.filter(user => user.login === this.regForm.controls["login"].value)[0];
    if (user) {
      this.isCorrect = false;
    } else {
      this.userService.addUser(this.regForm.controls["login"].value, this.regForm.controls["password"].value, parseInt(this.regForm.controls['snils'].value.split(" ").join("")));
      this.userService.user_id = this.userService.users[this.userService.users.length-1].id;
      this.route.navigate(["/lk"])
    }
  }

}

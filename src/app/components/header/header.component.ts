import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UsersService} from "../../services/users.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UsersService, private route: Router) {
  }

  ngOnInit(): void {
  }

  lk() {
    if (this.userService.user_id !== -1) {
      this.route.navigate(['/lk']);
    } else
      this.route.navigate(['/login']);
  }

}

import { Component, OnInit } from '@angular/core';
import {ContractsService} from "../../services/contracts.service";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {Contract} from "../../models/contract";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name = "";
  contract: Contract|null = null;
  contracts: Contract[]=[];

  constructor(private contractService: ContractsService, private userService: UsersService, private route: Router) {
    this.name = userService.users.filter(c => c.id === userService.user_id)[0].login;
    this.contracts = contractService.contracts.filter(c => c.email === this.name);
    this.contract = this.contracts[0];
    console.log(contractService.contracts);
  }

  ngOnInit(): void {

  }

  changeCard(id:number){
    this.contract = this.contracts.filter(c=>c.id === id)[0];
  }

  exit(){
    this.userService.user_id = -1;
    this.route.navigate(['/login']);
  }

}

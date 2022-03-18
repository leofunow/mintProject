import {Component, OnInit} from '@angular/core';
import {ContractsService} from "../../services/contracts.service";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-contract',
  templateUrl: './new-contract.component.html',
  styleUrls: ['./new-contract.component.css']
})
export class NewContractComponent implements OnInit {

  contractForm: FormGroup = new FormGroup({
    Surname: new FormControl("", Validators.required),
    Name: new FormControl("", Validators.required),
    MidName: new FormControl("", Validators.required),
    Email: new FormControl("", Validators.email),
    Phone: new FormControl("", [Validators.required, Validators.pattern("([0-9][ \\t\\v\\r\\n\\f]*){11}")]),
    Passport: new FormControl("", [Validators.required, Validators.pattern("([0-9][ \\t\\v\\r\\n\\f]*){10}")]),
    Snils: new FormControl("", [Validators.required, Validators.pattern("([0-9][ \\t\\v\\r\\n\\f]*){11}")]),
  });

  constructor(private contractService: ContractsService, private userService: UsersService, private route: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    this.contractService.addContract(this.contractForm.controls['Surname'].value,
      this.contractForm.controls['Name'].value, this.contractForm.controls['MidName'].value,
      this.contractForm.controls['Email'].value, parseInt(this.contractForm.controls['Phone'].value.split(" ").join("")),
      parseInt(this.contractForm.controls['Passport'].value.split(" ").join("")),
      parseInt(this.contractForm.controls['Snils'].value.split(" ").join("")))
    alert('Спасибо за поданную заявку, вам придет письмо на электронную почту с детальной информацией. Также вы можете просмотреть информацию о заявке в личном кабинете');
    this.route.navigate(['/']);
  }

}

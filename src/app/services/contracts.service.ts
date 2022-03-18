import {Injectable} from '@angular/core';
import {Contract} from "../models/contract";
import {HttpService} from "./http.service";
import {Account} from "../models/account";

@Injectable({
  providedIn: 'root'
})
export class ContractsService {

  private _contracts: Contract[] = [];

  constructor(private http: HttpService) {
    this.http.getContracts().subscribe((data) => {
      let contracts: Contract[] = [];
      for (let key in data) {
        contracts.push((data as Record<string, Contract>)[key]);
      }
      this._contracts = contracts;
    }, (error) => {
      console.log(error);
    });
  }

  private updateDB() {
    this.http.getContracts().subscribe((data) => {
      let contracts: Contract[] = [];
      for (let key in data) {
        contracts.push((data as Record<string, Contract>)[key]);
      }
      this._contracts = contracts;
    }, (error) => {
      console.log(error);
    });
  }

  get contracts(): Contract[] {
    this.updateDB();
    return this._contracts;
  }

  set contracts(value: Contract[]) {
    this.updateDB();
    this._contracts = value;
  }

  addContract(surname: string,
              name: string,
              midname: string,
              email: string,
              phone: number,
              passport: number,
              snils: number) {
    this.updateDB();
    let contract: Contract = {
      surname: surname,
      name: name,
      midname: midname,
      email: email,
      phone: phone,
      passport: passport,
      snils: snils,
      id: this._contracts[this._contracts.length - 1] ? this._contracts[this._contracts.length - 1].id + 1 : 0
    }
    this._contracts.push(contract);
    this.http.addContract(contract).subscribe();
  }

  deleteContractById(id: number) {
    this._contracts.splice(this._contracts.indexOf(this._contracts.filter(c => c.id === id)[0]));
  }

}

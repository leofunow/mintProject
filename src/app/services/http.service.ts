import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Account} from "../models/account";
import {Contract} from "../models/contract";
import {Publication} from "../models/publication";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  URL = "https://lfs-mint-project-default-rtdb.europe-west1.firebasedatabase.app/";

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(this.URL + "users.json");
  }

  addUser(user: Account) {
    return this.http.post(this.URL + "users.json", user);
  }

  getContracts() {
    return this.http.get(this.URL + "contracts.json");
  }

  addContract(contract: Contract) {
    return this.http.post(this.URL + "contracts.json", contract);
  }

  getPublications() {
    return this.http.get(this.URL + "publications.json");
  }

  addPublication(pub: Publication) {
    return this.http.post(this.URL + "publications.json", pub);
  }

}

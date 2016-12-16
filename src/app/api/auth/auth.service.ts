import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable()
export class AuthService {
  path: string = '/Auth';

  constructor(private api: ApiService) {}

  getUsers(){
    return this.api.get(this.path);
  }

  checkLogin(email: string, pass: string){
    return this.api.get(`${this.path}?email=${email}&pass=${pass}`);
  }

}

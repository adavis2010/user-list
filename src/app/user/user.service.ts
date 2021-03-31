import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //imported statement
import { Observable } from 'rxjs'; // imported statments needed
import { User } from './user.class'; //import statements needed

@Injectable({
  providedIn: 'root'
})
export class UserService {

baseurl: string = "http://localhost:32405/api/users";

  constructor(   
    private http : HttpClient //injecting
  ) { }

    list():Observable<User[]>{
      return this.http.get(`${this.baseurl}`) as Observable<User[]>; //get all
    }

    get(id: number):Observable<User>{   //get by PK
      return this.http.get(`${this.baseurl}/${id}`) as Observable<User>;
    }                 

    create(user: User): Observable<User> {  // create/POST(takes 2 parameters)
      return this.http.post(`${this.baseurl}`,user) as Observable<User>;
    }
    change(user: User): Observable<any>{  // change/PUT (takes 2 parameters)
      return this.http.put(`${this.baseurl}/${user.id}`,user) as Observable<any>;
    }
    remove(user: User): Observable<User>{ //remove /DELETE
      return this.http.delete(`${this.baseurl}/${user.id}`) as Observable<User>;
    }
}

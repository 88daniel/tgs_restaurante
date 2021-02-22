import { GlobalService } from './global.service';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user_bs: BehaviorSubject<User> =  new BehaviorSubject<User>(new User());
  user$ = this.user_bs.asObservable();


  constructor(private http: HttpClient, private globalservice: GlobalService) { }

  // metodo para validar credenciales del usuario
  validarCredenciales(usuario: User): Observable<User> {
    return this.http.post<User>(this.globalservice.getUrl() + 'validarcredenciales', usuario).pipe(
      map(data => data as User)
    );

  }

  // registrar a un usuario
  registerUser(usuario: User): Observable<User> {
    return this.http.post<User>(this.globalservice.getUrl() + 'registeruser',usuario).pipe(
      map(data => data as User)
    );
  }

  // set user bs para login y guardar store
  setUseForStore(usuario: User) {
    this.user_bs.next(usuario);
  }


}

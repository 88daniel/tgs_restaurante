import { User } from 'src/app/models/user';
import { Store } from './../models/store';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserStore } from '../models/user_store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  userstore_bs: BehaviorSubject<UserStore> = new BehaviorSubject<UserStore>(new UserStore);
  userstore$ = this.userstore_bs.asObservable();

  constructor(private http: HttpClient, private globalservice: GlobalService) { }

  // save store
  saveStore(store: Store): Observable<Store> {
    return this.http.post(this.globalservice.getUrl() + 'savestore', store).pipe(
      map(data => data as Store)
    );
  }

  // set informacion del usuario y store
  setUserStore(userstore: UserStore) {
    this.userstore_bs.next(userstore);
  }

  // obtener una store por medio del id del usuario logueado
  getStoreByUserId(user_id: number): Observable<Store> {
    return this.http.get(this.globalservice.getUrl() + 'getstorebyuserid/' + user_id).pipe(
      map(data => data as Store)
    );
  }
}

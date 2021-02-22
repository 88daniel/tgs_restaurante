import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor() { }

  url = 'http://localhost:8000/'

 public  getUrl() {
    return this.url;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }


  getLocalCartData(){
    return sessionStorage.getItem('product');
  }

  setLocalCartData(data:any){
    sessionStorage.setItem('product',data);
    return true;
  }

  getLocalListData(){
    return sessionStorage.getItem('list');
  }

  setLocalListData(data:any){
    sessionStorage.setItem('list',data);
    return true;
  }

}

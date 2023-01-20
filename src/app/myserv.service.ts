import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MyservService {

  constructor(private http:HttpClient) { }

  changepassword(name:any,pass:any):Observable<any>{
    return this.http.put("http://localhost:8081/updateProd/"+`${name}`,{"password":pass});
  }
}


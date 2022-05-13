import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule} from'@angular/common/http';
import { find, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListService {
private _url:any='http://localhost:3000/SignUpDetails'
private _taskUrl='http://localhost:3000/taskDetails'
  constructor(private http:HttpClient) { }
 
  postUsers(body: any):Observable<object>{
   return this.http.post(this._url,body)
  }
  matchUser():Observable<object>{
 return this.http.get(this._url)
  }
  PostTaskData(task:any):Observable<object>{
   return this.http.post(this._taskUrl,task)
  }
  GetTaskData():Observable<object>{
    return this.http.get(this._taskUrl)
  }
}
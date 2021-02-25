import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private http:HttpClient
  )
   { 
    
   }
   getdata() : Observable<any>   
   {
    //  return this.http.get("http://localhost:8080/todo/list");
    return this.http.get("http://jsonplaceholder.typicode.com/users");
   }
   getPostData(userId:any) : Observable<any>   
   {
    return this.http.get("http://jsonplaceholder.typicode.com/posts?userId="+userId+"&skip=0&limit=10");
   }
   getPostDetailData(postId:any)    
   {
     
    return this.http.get("http://jsonplaceholder.typicode.com/posts/"+postId);
    
   }
   getComments(postId:any)   : Observable<any>
   {
    return this.http.get("http://jsonplaceholder.typicode.com/posts/"+postId+"/comments");
   }
   deletePost(postId:any)   
   {
    return this.http.delete("http://jsonplaceholder.typicode.com/posts/"+postId);
   }
}

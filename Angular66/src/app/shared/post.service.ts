import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  selectedUserPost: Post = {
    user:'',
    title: '',
    description: '',
    amount: '',
    date: ''
  };
  posts: Post[];
  post:Post;
  myposts:Post[];
  editpost:Post;


  constructor(private http: HttpClient) { }

  postUserPost(userPost: Post){
    //console.log(userPost.user);
    return this.http.post(environment.apiBaseUrl+'/makePost',userPost);
  }

  getEmployeeList() {
    return this.http.get(environment.apiBaseUrl+'/postlist');
  }

  getmypostList() {
    return this.http.get(environment.apiBaseUrl+'/getpostbyuser/'+localStorage.getItem('email'));
  }

  searchpostList() {
    return this.http.get(environment.apiBaseUrl+'/getPostByName/'+localStorage.getItem('query'));
  }

  deleteEmployee(_id: string) {
    return this.http.delete(environment.apiBaseUrl+'/deletebyid'+ `/${_id}`);
  }

  getselectedpost()
  {
    return this.http.get(environment.apiBaseUrl+'/getpostbyid/'+ localStorage.getItem("SelectedPostId"));
  }

  editthispost()
  {
    return this.http.get(environment.apiBaseUrl+'/getpostbyid/'+localStorage.getItem("PostId"));
  }

  updatepost(pst: Post) {
    return this.http.put(environment.apiBaseUrl + '/updatepostbyid/'+localStorage.getItem("PostId"), pst);

  }
}


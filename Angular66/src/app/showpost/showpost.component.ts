import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service'
import { Router } from "@angular/router";
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-showpost',
  templateUrl: './showpost.component.html',
  styleUrls: ['./showpost.component.css'],
  providers: [PostService]
})
export class ShowpostComponent implements OnInit {

  constructor(private postService: PostService,private router : Router) { }

  ngOnInit() {
    this.refreshEmployeeList();
  }

  refreshEmployeeList() {
    this.postService.getEmployeeList().subscribe((res) => {
      this.postService.posts = res as Post[];
    });
  }

  

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.postService.deleteEmployee(_id).subscribe((res) => {
        this.refreshEmployeeList();
      });
    }
  }
  onSearch(reftext : HTMLTextAreaElement) {
    alert('fdf');
    this.postService.posts=[];
    //alert(this.postService.posts);
    var a= reftext.value;
    localStorage.setItem('query', a);
      this.postService.searchpostList().subscribe((res) => {
        this.postService.posts = res as Post[];
        alert(this.postService.posts);
      });
    
  }

  NevigateToProfile()
  {
    this.router.navigateByUrl('/userprofile');
  }
  NevigateToMyPost()
  {
    this.router.navigateByUrl('/myposts');
  }
  NevigateToBids()
  {
    this.router.navigateByUrl('/mybids');
  }

  NevigateToMakePost()
  {
    this.router.navigateByUrl('/makepost');
  }

  NevigateToShowDetails(_id:string)
  {
    localStorage.setItem("SelectedPostId",_id);
    this.router.navigateByUrl('/productdet');
  }

}



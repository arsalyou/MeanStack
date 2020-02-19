import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service'
import { Router } from "@angular/router";
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css'],
  providers: [PostService]
})
export class MypostsComponent implements OnInit {

  constructor(private postService: PostService,private router: Router) { }

  ngOnInit() {
    this.refreshMyPostList();
  }

  refreshMyPostList() {
    this.postService.getmypostList().subscribe((res) => {
      this.postService.myposts = res as Post[];
    });
  }

  searchMyPostList() {
    
    this.postService.searchpostList().subscribe((res) => {
      this.postService.myposts = res as Post[];
    });
  }



  onEdit(_id:string) {
    console.log(_id);
    localStorage.setItem("PostId",_id);
    this.router.navigateByUrl('/editpost');
    
}

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.postService.deleteEmployee(_id).subscribe((res) => {
        this.refreshMyPostList();
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service'
import { Post } from '../shared/post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.EditThisPost();
    this.postService.selectedUserPost.title=this.postService.editpost.title;
  }

  EditThisPost() {
    this.postService.editthispost().subscribe((res) => {
      this.postService.editpost = res as Post;
      this.postService.selectedUserPost.user=this.postService.editpost.user;
      this.postService.selectedUserPost.title=this.postService.editpost.title;
      this.postService.selectedUserPost.description=this.postService.editpost.description;
      this.postService.selectedUserPost.amount=this.postService.editpost.amount;
      this.postService.selectedUserPost.date=this.postService.editpost.date;
    });
  }

  onSubmit(form: NgForm) {
    this.postService.updatepost(form.value).subscribe(
      res => {
        this.resetForm(form);
      }
    );
  }

  resetForm(form: NgForm) {
    this.postService.selectedUserPost = {
      user:'',
      title: '',
      description: '',
      amount: '',
      date: ''
    };
    form.resetForm();
  }

}

import { Component, OnInit } from '@angular/core';
import { PostService } from '../../shared/post.service'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
  providers: [PostService]

})
export class PostFormComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(private postService: PostService) { }

  ngOnInit() {
    //console.log(localStorage.getItem('email'));
    this.postService.selectedUserPost.user=localStorage.getItem('email');
    //console.log(this.postService.selectedUserPost.User);
  }

  onSubmit(form: NgForm) {
    this.postService.postUserPost(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
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
    this.serverErrorMessages = '';
  }

}

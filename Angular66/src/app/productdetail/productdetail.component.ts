import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service'
import { Post } from '../shared/post.model';
import { Bid } from '../shared/bid.model';
import { BidService } from '../shared/bid.service';
import { Spam } from '../shared/spam.model';
import { SpamService } from '../shared/spam.service';
import { Router } from "@angular/router";
import { Review } from '../shared/review.model';
import { ReviewService } from '../shared/review.service';


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  constructor(private postService: PostService,private bidService: BidService,private spamService: SpamService,private router : Router,private reviewService: ReviewService) { }

  ngOnInit() {
    this.getSelectedPost();
    this.refreshMyBidList();
    this.refreshMyReviews();
    console.log(this.postService.post.user);
    

  }

  getSelectedPost() {
    this.postService.getselectedpost().subscribe((res) => {
      this.postService.post = res as Post;
    });
  }

  PlaceBid() {
    this.bidService.selectedUserBid.post_id=localStorage.getItem("SelectedPostId");
    this.bidService.placebid(this.bidService.selectedUserBid).subscribe(
      res => {
        this.bidService.selectedUserBid.amount='1';
        this.refreshMyBidList();
      }
    );
  }

  refreshMyBidList() {
    this.bidService.getmybidlist().subscribe((res) => {
      this.bidService.bids = res as Bid[];
      this.bidService.bids.sort((a, b) => (Number(a.amount) > Number(b.amount)) ? 1 : -1);
      for (let i = 0; i < this.bidService.bids.length ; i++) {
        this.bidService.bids[i].rank =i.toString(); 
      }
    });
  }

  PlaceSpamReport() {
    this.spamService.selectedSpamReport.user=this.postService.post.user;
    this.spamService.postUserSpam(this.spamService.selectedSpamReport).subscribe(
      res => {
        this.bidService.selectedUserBid.amount='5';
      }
    );
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

  PlaceReview() {
    this.reviewService.selectedReview.user=this.postService.post.user;
    this.reviewService.postReview(this.reviewService.selectedReview).subscribe(
      res => {
        this.bidService.selectedUserBid.amount='5';
      }
    );
  }
  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.reviewService.deleteReview(_id).subscribe((res) => {
        this.refreshMyReviews();
      });
    }
  }

  refreshMyReviews() {
    this.reviewService.getmyReviews("admin@admin.com").subscribe((res) => {
      this.reviewService.reviews = res as Review[];
    });
  }



  

}

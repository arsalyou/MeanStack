import { Component, OnInit } from '@angular/core';
import { Bid } from '../shared/bid.model';
import { BidService } from '../shared/bid.service';

@Component({
  selector: 'app-mybids',
  templateUrl: './mybids.component.html',
  styleUrls: ['./mybids.component.css']
})
export class MybidsComponent implements OnInit {

  constructor(private bidService: BidService) { }

  ngOnInit() {
    this.refreshMyBidList();
  }

  refreshMyBidList() {
    this.bidService.getmybidlist2().subscribe((res) => {
      this.bidService.bids2 = res as Bid[];
    });
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.bidService.deleteBid(_id).subscribe((res) => {
        this.refreshMyBidList();
      });
    }
  }

}

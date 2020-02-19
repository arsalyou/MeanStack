import { Component, OnInit } from '@angular/core';
import { SpamService } from '../shared/spam.service'
import { Router } from "@angular/router";
import { Spam } from '../shared/spam.model';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  constructor(private spamService: SpamService) { }

  ngOnInit() {
    this.refreshSpamReportList();
  }

  refreshSpamReportList() {
    this.spamService.getspamreports().subscribe((res) => {
      this.spamService.spams = res as Spam[];
      console.log("Yasir");
    });
  }

  onDelete(user: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.spamService.deleteThisUser(user).subscribe((res) => {
        console.log("Success");
      });
    }
    if (confirm('Are you sure to delete this record ?') == true) {
      this.spamService.deleteThisProfile(user).subscribe((res) => {
        console.log("Success");
      });
    }
    if (confirm('Are you sure to delete this record ?') == true) {
      this.spamService.deleteThisSpamReport(user).subscribe((res) => {
        console.log("Success");
      });
    }

  }

}

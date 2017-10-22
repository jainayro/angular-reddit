import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reddit-body',
  templateUrl: './reddit-body.component.html',
  styleUrls: ['./reddit-body.component.scss']
})
export class RedditBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement) : boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css']
})
export class NewsArticleComponent implements OnInit {

  @Input() articleName : String | undefined;
  @Output() closeNewsArticle = new EventEmitter<undefined>();

  constructor() { }

  ngOnInit(): void {

  }

  closeArticle(){
    this.closeNewsArticle.emit();
  }


}

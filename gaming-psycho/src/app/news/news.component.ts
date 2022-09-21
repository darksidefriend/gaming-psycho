import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsArticleIsOpen : boolean = false;
  openedArticleName : String = '';

  constructor() { }

  ngOnInit(): void {
  }

  openArticle(articleName : String){ //открытие новости в модальном окне
    this.openedArticleName = articleName;
    this.newsArticleIsOpen = true;
    document.body.style.overflowY = 'hidden';
  }

  closeArticle(){
    this.openedArticleName = '';
    this.newsArticleIsOpen = false;
    document.body.style.overflowY = 'visible';
  }

}

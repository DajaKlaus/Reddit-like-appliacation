import { Component, OnInit, HostBinding, Input} from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'card mt-3';
  @Input() article:Article;

  constructor() {
    this.article = new Article('Angular 2','http://angular.io',10);
  }

  voteUp():Boolean { //Aggiunto tipo di ritorno
    this.article.voteUp(); //Modificato qui
    return false; //Non propagare l'evento 
  }
  voteDown():Boolean{
    this.article.voteDown(); //Modificato qui
    return false; //Non propagare l'evento 
  }

  ngOnInit() {}
}

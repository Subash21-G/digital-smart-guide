import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ARTICLES, Article } from '../../data/articles';

@Component({
  selector: 'app-article-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './article-detail.html',
  styleUrl: './article-detail.scss'
})
export class ArticleDetail {
  article?: Article;

  constructor(private route: ActivatedRoute) {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.article = ARTICLES.find(x => x.slug === slug);
  }
}

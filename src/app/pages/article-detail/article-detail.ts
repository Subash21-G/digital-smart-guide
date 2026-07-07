import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ARTICLES, Article } from '../../data/articles';

@Component({
  selector: 'app-article-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './article-detail.html',
  styleUrl: './article-detail.scss'
})
export class ArticleDetail {
  private route = inject(ActivatedRoute);

  slug = this.route.snapshot.paramMap.get('slug');

  article: Article | undefined = ARTICLES.find(
    article => article.slug === this.slug
  );

  relatedArticles: Article[] = ARTICLES
    .filter(article =>
      article.category === this.article?.category &&
      article.slug !== this.article?.slug
    )
    .slice(0, 3);
}

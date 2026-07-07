import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ARTICLES, Article } from '../../data/articles';

@Component({
  selector: 'app-article-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './article-detail.html',
  styleUrl: './article-detail.scss'
})
export class ArticleDetail implements OnInit {
  private route = inject(ActivatedRoute);

  article: Article | undefined;
  relatedArticles: Article[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');

      this.article = ARTICLES.find(article => article.slug === slug);

      this.relatedArticles = ARTICLES
        .filter(article =>
          article.category === this.article?.category &&
          article.slug !== this.article?.slug
        )
        .slice(0, 3);

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  getCategorySlug(category: string): string {
    return category
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-');
  }
}

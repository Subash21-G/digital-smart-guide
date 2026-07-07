import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ARTICLES, Article } from '../../data/articles';

@Component({
  selector: 'app-article-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './article-detail.html',
  styleUrl: './article-detail.scss'
})
export class ArticleDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  article: Article | undefined;
  relatedArticles: Article[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');

      this.article = ARTICLES.find(article => article.slug === slug);

      if (this.article) {
        this.titleService.setTitle(`${this.article.title} | Digital Smart Guide`);

        this.metaService.updateTag({
          name: 'description',
          content: this.article.description
        });

        this.metaService.updateTag({
          name: 'keywords',
          content: `${this.article.title}, ${this.article.category}, Digital Smart Guide, comparison guide, Tamil English guide`
        });
      } else {
        this.titleService.setTitle('Article Not Found | Digital Smart Guide');

        this.metaService.updateTag({
          name: 'description',
          content: 'The guide you are looking for is not available on Digital Smart Guide.'
        });
      }

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

import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ARTICLES, Article } from '../../data/articles';

@Component({
  selector: 'app-category',
  imports: [CommonModule, RouterLink],
  templateUrl: './category.html',
  styleUrl: './category.scss'
})
export class Category implements OnInit {
  private route = inject(ActivatedRoute);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  categorySlug = '';
  categoryTitle = '';
  articles: Article[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categorySlug = params.get('name') || '';
      this.categoryTitle = this.convertSlugToTitle(this.categorySlug);

      this.articles = ARTICLES.filter(article =>
        this.createSlug(article.category) === this.categorySlug
      );

      this.updateSeo();

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  private updateSeo(): void {
    this.titleService.setTitle(
      `${this.categoryTitle} Guides | Digital Smart Guide`
    );

    this.metaService.updateTag({
      name: 'description',
      content: `Read simple Tamil-English ${this.categoryTitle} guides on Digital Smart Guide. Compare important details before applying, buying or choosing any product or service.`
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: `${this.categoryTitle} guides, Digital Smart Guide, comparison guides, Tamil English guide, beginner guides`
    });
  }

  private createSlug(value: string): string {
    return value
      .toLowerCase()
      .trim()
      .replace(/&/g, 'and')
      .replace(/\s+/g, '-');
  }

  private convertSlugToTitle(slug: string): string {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ARTICLES, Article } from '../../data/articles';

@Component({
  selector: 'app-category',
  imports: [CommonModule, RouterLink],
  templateUrl: './category.html',
  styleUrl: './category.scss'
})
export class Category implements OnInit {
  private route = inject(ActivatedRoute);

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

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
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

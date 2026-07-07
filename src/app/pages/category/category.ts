import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ARTICLES, Article } from '../../data/articles';

@Component({
  selector: 'app-category',
  imports: [CommonModule, RouterLink],
  templateUrl: './category.html',
  styleUrl: './category.scss'
})
export class Category {
  categoryName = '';
  articles: Article[] = [];

  constructor(private route: ActivatedRoute) {
    const name = this.route.snapshot.paramMap.get('name') || '';
    this.categoryName = this.formatCategoryName(name);

    this.articles = ARTICLES.filter(article =>
      this.normalize(article.category) === name
    );
  }

  private normalize(value: string): string {
    return value.toLowerCase().replace(/\s+/g, '-');
  }

  private formatCategoryName(value: string): string {
    return value
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}

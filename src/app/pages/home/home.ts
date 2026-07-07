import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ARTICLES, Article } from '../../data/articles';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  articles: Article[] = ARTICLES;

  featuredArticles: Article[] = ARTICLES.slice(0, 6);

  categories = [
    {
      name: 'Finance',
      slug: 'finance',
      icon: '₹',
      description: 'Credit cards, savings accounts, insurance and finance guides.',
      count: ARTICLES.filter(article => article.category === 'Finance').length
    },
    {
      name: 'Vehicles',
      slug: 'vehicles',
      icon: '⚡',
      description: 'Bikes, EV scooters, petrol bikes and insurance guides.',
      count: ARTICLES.filter(article => article.category === 'Vehicles').length
    },
    {
      name: 'Tech Products',
      slug: 'tech-products',
      icon: '💻',
      description: 'Laptop, monitor and useful tech product buying guides.',
      count: ARTICLES.filter(article => article.category === 'Tech Products').length
    },
    {
      name: 'Courses',
      slug: 'courses',
      icon: '🎓',
      description: 'Career courses, .NET, CAD and software learning guides.',
      count: ARTICLES.filter(article => article.category === 'Courses').length
    }
  ];
}

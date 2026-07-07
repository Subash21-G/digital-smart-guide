import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ARTICLES } from '../../data/articles';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  categories = [
    {
      id: 'finance',
      title: 'Finance',
      description: 'Credit cards, bank accounts, loans, insurance and demat account guides.',
      icon: '💳'
    },
    {
      id: 'vehicles',
      title: 'Vehicles',
      description: 'Bike, scooter, EV, car, insurance and loan comparison guides.',
      icon: '🏍️'
    },
    {
      id: 'tech-products',
      title: 'Tech Products',
      description: 'Laptop, monitor, mouse, keyboard, SSD and RAM buying guides.',
      icon: '💻'
    },
    {
      id: 'courses',
      title: 'Courses',
      description: '.NET, CAD, full stack, aptitude and career course guides.',
      icon: '🎓'
    }
  ];

  articles = ARTICLES.slice(0, 8);
}
